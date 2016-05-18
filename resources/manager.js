
var runs = [],
    res = document.getElementById('results'),
    timesRan = 0,
    runButton

function formatTestName(suiteName, testName) {
    return suiteName + (testName ? '/' + testName : '');
}

function createUIForSuites(suites, onstep, onrun) {
    var control = document.createElement('nav');
    var ol = document.createElement('ol');
    var checkboxes = [];

    var button = document.createElement('button');
    button.textContent = 'Step Tests';
    button.onclick = onstep;
    control.appendChild(button);

    var button = runButton = document.createElement('button');
    button.textContent = 'Run All';
    button.onclick = onrun;
    control.appendChild(button);

    for (var suiteIndex = 0; suiteIndex < suites.length; suiteIndex++) {
        var suite = suites[suiteIndex];
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.id = suite.name;
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        checkbox.onchange = (function (suite, checkbox) { return function () { suite.disabled = !checkbox.checked; } })(suite, checkbox);
        checkbox.onchange();
        checkboxes.push(checkbox);

        li.appendChild(checkbox);
        var label = document.createElement('label');
        label.appendChild(document.createTextNode(formatTestName(suite.name) + ' ' + suite.version));
        li.appendChild(label);
        label.htmlFor = checkbox.id;

        var testList = document.createElement('ol');
        for (var testIndex = 0; testIndex < suite.tests.length; testIndex++) {
            var testItem = document.createElement('li');
            var test = suite.tests[testIndex];
            var anchor = document.createElement('a');
            anchor.id = suite.name + '-' + test.name;
            test.anchor = anchor;
            anchor.appendChild(document.createTextNode(formatTestName(suite.name, test.name)));
            testItem.appendChild(anchor);
            testList.appendChild(testItem);
        }
        li.appendChild(testList);

        ol.appendChild(li);
    }

    control.appendChild(ol);

    return control;
}

function startTest() {

    var match = window.location.search.match(/[\?&]r=(\d+)/),
        timesToRun = match ? +(match[1]) : 1

    var runner = new BenchmarkRunner(Suites, {
        willRunTest: function (suite, test) {
            if (!navigator.userAgent.match("MSIE 9.0")) test.anchor.classList.add('running');
        },
        didRunTest: function (suite, test) {
            var classList = test.anchor.classList;
            if (!navigator.userAgent.match("MSIE 9.0")) classList.remove('running');
            if (!navigator.userAgent.match("MSIE 9.0")) classList.add('ran');
        },
        didRunSuites: function (measuredValues) {
            var results = '';
            var total = 0; // FIXME: Compute the total properly.
            for (var suiteName in measuredValues) {
                var suiteResults = measuredValues[suiteName];
                for (var testName in suiteResults.tests) {
                    var testResults = suiteResults.tests[testName];
                    for (var subtestName in testResults) {
                        results += suiteName + ' : ' + testName + ' : ' + subtestName
                            + ': ' + testResults[subtestName] + ' ms\n';
                    }
                }
                results += suiteName + ' : ' + suiteResults.total + ' ms\n';
                total += suiteResults.total;
            }
            results += 'Run ' + (runs.length + 1) +'/' + timesToRun + ' - Total : ' + total + ' ms\n';

            if (!results)
                return;

            console.log(results)

            runs.push(measuredValues)
            timesRan++
            if (timesRan >= timesToRun) {
                timesRan = 0
                reportFastest()
                shuffle(Suites);
            } else {
                setTimeout(function () {
                    runButton.click()
                }, 0)
            }
        }
    });

    var currentState = null;
    function callNextStep(state) {
        runner.step(state).then(function (newState) {
            currentState = newState;
            if (newState)
                callNextStep(newState);
        });
    }

    // Don't call step while step is already executing.
    document.body.appendChild(createUIForSuites(Suites,
        function () { runner.step(currentState).then(function (state) { currentState = state; }); },
        function () {
            var analysis = document.getElementById("analysis");
            analysis.style.display = 'none';
            localStorage.clear();
            callNextStep(currentState);
        }));

    function reportFastest () {
        var results = {}
        runs.forEach(function (runData) {
            for (var key in runData) {
                results[key] = Math.min(results[key] || Infinity, runData[key].total)
            }
        });
        drawChart(results);
    }
}

google.load("visualization", "1", {packages:["corechart"]});
function drawChart(results) {
    var rawData = [];
    for (var key in results) {
        var color = colorify(key);
        rawData.push([ key, Math.round(results[key]), color ]);
    }
    rawData.sort(function(a, b){ return a[1] - b[1] })
    rawData.unshift([ "Project" , "Time", { role: "style"} ])
    var data = google.visualization.arrayToDataTable(rawData);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var runWord = "run" + (runs.length > 1 ? "s" : "");
    var title = "Best time in milliseconds over " + runs.length +
        " " + runWord + " (lower is better)";

    var options = {
	title: "TodoMVC Benchmark",
	width: 600,
	height: 400,
        legend: { position: "none" },
        backgroundColor: 'transparent',
        hAxis: {title: title},
        min:0,
        max:1500
    };
    var analysis = document.getElementById("analysis");
    analysis.style.display = 'block';
    var barchart = document.getElementById("barchart_values");
    var chart = new google.visualization.BarChart(barchart);
    chart.draw(view, options);
}

function shuffle ( ary ) {
  var i = ary.length;
  if ( i == 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = ary[i];
     var tempj = ary[j];
     ary[i] = tempj;
     ary[j] = tempi;
   }
}

function colorify(n){
    var c = 'rgb(' + ( Math.max(0,(n.toLowerCase().charCodeAt(3 % n.length) - 97) / 26 * 255 | 0) ) + 
              ", " + ( Math.max(0,(n.toLowerCase().charCodeAt(4 % n.length) - 97) / 26 * 255 | 0) ) +
              ", " + ( Math.max(0,(n.toLowerCase().charCodeAt(5 % n.length) - 97) / 26 * 255 | 0) ) + ")"
    return c
}

window.addEventListener('load', startTest);
