/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _preact = __webpack_require__(/*! preact */ 1);
	
	var _app = __webpack_require__(/*! ./app */ 4);
	
	var _app2 = _interopRequireDefault(_app);
	
	_preact.render(_preact.h(_app2['default'], null), document.getElementById('todoapp'));

/***/ },
/* 1 */
/*!*********************************!*\
  !*** ./~/preact/dist/preact.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {'use strict';
	
	!(function (global, factory) {
	     true ? factory(exports) : 'function' == typeof define && define.amd ? define(['exports'], factory) : factory(global.preact = global.preact || {});
	})(undefined, function (exports) {
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	        this.key = attributes && attributes.key;
	    }
	    function extend(obj, props) {
	        if (props) for (var i in props) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        return extend({}, obj);
	    }
	    function memoize(fn) {
	        var mem = {};
	        return function (k) {
	            return mem[k] || (mem[k] = fn(k));
	        };
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    function toArray(obj, offset) {
	        return [].slice.call(obj, offset);
	    }
	    function isFunction(obj) {
	        return 'function' == typeof obj;
	    }
	    function isString(obj) {
	        return 'string' == typeof obj;
	    }
	    function empty(x) {
	        return void 0 === x || null === x;
	    }
	    function falsey(value) {
	        return value === !1 || empty(value);
	    }
	    function styleObjToCss(s) {
	        var str = '';
	        for (var prop in s) {
	            var val = s[prop];
	            if (!empty(val)) {
	                if (str) str += ' ';
	                str += jsToCss(prop);
	                str += ': ';
	                str += val;
	                if ('number' == typeof val && !NON_DIMENSION_PROPS[prop]) str += 'px';
	                str += ';';
	            }
	        }
	        return str;
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function optionsHook(name, a) {
	        return hook(options, name, a);
	    }
	    function hook(obj, name, a, b, c) {
	        if (obj[name]) return obj[name](a, b, c);
	    }
	    function deepHook(obj, type) {
	        do hook(obj, type); while (obj = obj._component);
	    }
	    function h(_x, _x2, _x3) {
	        var _arguments = arguments;
	        var _again = true;
	
	        _function: while (_again) {
	            var nodeName = _x,
	                attributes = _x2,
	                firstChild = _x3;
	            _again = false;
	
	            var children,
	                arr,
	                lastSimple,
	                len = _arguments.length;
	            if (len > 2) {
	                var type = typeof firstChild;
	                if (3 === len && 'object' !== type && 'function' !== type) {
	                    if (!falsey(firstChild)) children = [String(firstChild)];
	                } else {
	                    children = [];
	                    for (var i = 2; i < len; i++) {
	                        var _p = _arguments[i];
	                        if (!falsey(_p)) {
	                            if (_p.join) arr = _p;else (arr = SHARED_TEMP_ARRAY)[0] = _p;
	                            for (var j = 0; j < arr.length; j++) {
	                                var child = arr[j],
	                                    simple = !(falsey(child) || isFunction(child) || child instanceof VNode);
	                                if (simple && !isString(child)) child = String(child);
	                                if (simple && lastSimple) children[children.length - 1] += child;else if (!falsey(child)) children.push(child);
	                                lastSimple = simple;
	                            }
	                        } else ;
	                    }
	                }
	            } else if (attributes && attributes.children) {
	                _arguments = [_x = nodeName, _x2 = attributes, _x3 = attributes.children];
	                _again = true;
	                children = arr = lastSimple = len = type = i = _p = j = child = simple = undefined;
	                continue _function;
	            }
	            if (attributes) {
	                if (attributes.children) delete attributes.children;
	                if (!isFunction(nodeName)) {
	                    if ('className' in attributes) {
	                        attributes['class'] = attributes.className;
	                        delete attributes.className;
	                    }
	                    lastSimple = attributes['class'];
	                    if (lastSimple && !isString(lastSimple)) attributes['class'] = hashToClassName(lastSimple);
	                    lastSimple = attributes.style;
	                    if (lastSimple && !isString(lastSimple)) attributes.style = styleObjToCss(lastSimple);
	                }
	            }
	            var p = new VNode(nodeName, attributes || void 0, children);
	            optionsHook('vnode', p);
	            return p;
	        }
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? toArray(arguments, 2) : vnode.children);
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.'),
	            p0 = path[0],
	            len = path.length;
	        return function (e) {
	            var _component$setState;
	            var v,
	                i,
	                t = e && e.currentTarget || this,
	                s = component.state,
	                obj = s;
	            if (isString(eventPath)) {
	                v = delve(e, eventPath);
	                if (empty(v) && (t = t._component)) v = delve(t, eventPath);
	            } else v = (t.nodeName + t.type).match(/^input(check|rad)/i) ? t.checked : t.value;
	            if (isFunction(v)) v = v.call(t);
	            if (len > 1) {
	                for (i = 0; i < len - 1; i++) obj = obj[path[i]] || (obj[path[i]] = {});
	                obj[path[i]] = v;
	                v = s[p0];
	            }
	            component.setState((_component$setState = {}, _component$setState[p0] = v, _component$setState));
	        };
	    }
	    function enqueueRender(component) {
	        if (1 === items.push(component)) (options.debounceRendering || setImmediate)(rerender);
	    }
	    function rerender() {
	        if (items.length) {
	            var p,
	                currentItems = items;
	            items = itemsOffline;
	            itemsOffline = currentItems;
	            while (p = currentItems.pop()) if (p._dirty) renderComponent(p);
	        }
	    }
	    function isFunctionalComponent(vnode) {
	        var nodeName = vnode && vnode.nodeName;
	        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY) || EMPTY_BASE;
	    }
	    function ensureNodeData(node, data) {
	        return node[ATTR_KEY] || (node[ATTR_KEY] = data || {});
	    }
	    function getNodeType(node) {
	        if (node instanceof Text) return 3;
	        if (node instanceof Element) return 1;else return 0;
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function setAccessor(node, name, value, isSvg) {
	        ensureNodeData(node)[name] = value;
	        if ('key' !== name && 'children' !== name) if ('class' === name && !isSvg) node.className = value || '';else if ('style' === name) node.style.cssText = value || '';else if ('dangerouslySetInnerHTML' === name) {
	            if (value) node.innerHTML = value.__html;
	        } else if ('type' !== name && !isSvg && name in node) {
	            setProperty(node, name, empty(value) ? '' : value);
	            if (falsey(value)) node.removeAttribute(name);
	        } else if ('o' === name[0] && 'n' === name[1]) {
	            var l = node._listeners || (node._listeners = {});
	            name = toLowerCase(name.substring(2));
	            if (!l[name]) node.addEventListener(name, eventProxy);else if (!value) node.removeEventListener(name, eventProxy);
	            l[name] = value;
	        } else {
	            var ns = isSvg && name.match(/^xlink\:?(.+)/);
	            if (falsey(value)) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', ns[1]);else node.removeAttribute(name);else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', ns[1], value);else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this._listeners[e.type](optionsHook('event', e) || e);
	    }
	    function getRawNodeAttributes(node) {
	        var attrs = {};
	        for (var i = node.attributes.length; i--;) attrs[node.attributes[i].name] = node.attributes[i].value;
	        return attrs;
	    }
	    function isSameNodeType(node, vnode) {
	        if (isString(vnode)) return 3 === getNodeType(node);
	        var nodeName = vnode.nodeName,
	            type = typeof nodeName;
	        if ('string' === type) return isNamedNode(node, nodeName);
	        if ('function' === type) return node._componentConstructor === nodeName || isFunctionalComponent(vnode);else ;
	    }
	    function isNamedNode(node, nodeName) {
	        return (node.normalizedNodeName || toLowerCase(node.nodeName)) === toLowerCase(nodeName);
	    }
	    function getNodeProps(vnode) {
	        var defaultProps = vnode.nodeName.defaultProps,
	            props = clone(defaultProps || vnode.attributes);
	        if (defaultProps) extend(props, vnode.attributes);
	        if (vnode.children) props.children = vnode.children;
	        return props;
	    }
	    function collectNode(node) {
	        cleanNode(node);
	        var name = toLowerCase(node.nodeName),
	            list = nodes[name];
	        if (list) list.push(node);else nodes[name] = [node];
	    }
	    function createNode(nodeName, isSvg) {
	        var name = toLowerCase(nodeName),
	            node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
	        ensureNodeData(node);
	        node.normalizedNodeName = name;
	        return node;
	    }
	    function cleanNode(node) {
	        removeNode(node);
	        if (3 !== getNodeType(node)) {
	            ensureNodeData(node, getRawNodeAttributes(node));
	            node._component = node._componentConstructor = null;
	        }
	    }
	    function diff(dom, vnode, context, mountAll, unmountChildrenOnly) {
	        var originalAttributes = vnode.attributes;
	        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
	        if (isString(vnode)) {
	            if (dom) {
	                if (3 === getNodeType(dom)) {
	                    if (dom.nodeValue !== vnode) dom.nodeValue = vnode;
	                    return dom;
	                }
	                if (!unmountChildrenOnly) collectNode(dom);
	            }
	            return document.createTextNode(vnode);
	        }
	        var svgMode,
	            out = dom,
	            nodeName = vnode.nodeName;
	        if (isFunction(nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        if (!isString(nodeName)) nodeName = String(nodeName);
	        svgMode = 'svg' === toLowerCase(nodeName);
	        if (svgMode) SVG_MODE = !0;
	        if (!dom) out = createNode(nodeName, SVG_MODE);else if (!isNamedNode(dom, nodeName)) {
	            out = createNode(nodeName, SVG_MODE);
	            while (dom.firstChild) out.appendChild(dom.firstChild);
	            if (!unmountChildrenOnly) recollectNodeTree(dom);
	        }
	        diffNode(out, vnode.children, context, mountAll);
	        diffAttributes(out, vnode.attributes);
	        if (originalAttributes && originalAttributes.ref) (out[ATTR_KEY].ref = originalAttributes.ref)(out);
	        if (svgMode) SVG_MODE = !1;
	        return out;
	    }
	    function diffNode(dom, vchildren, context, mountAll) {
	        var firstChild = dom.firstChild;
	        if (vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && firstChild instanceof Text && 1 === dom.childNodes.length) firstChild.nodeValue = vchildren[0];else if (vchildren || firstChild) innerDiffNode(dom, vchildren, context, mountAll);
	    }
	    function getKey(child) {
	        var c = child._component;
	        if (c) return c.__key;
	        var data = child[ATTR_KEY];
	        if (data) return data.key;else ;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll) {
	        var children,
	            keyed,
	            originalChildren = dom.childNodes,
	            keyedLen = 0,
	            min = 0,
	            len = originalChildren.length,
	            childrenLen = 0;
	        if (len) {
	            children = [];
	            for (var i = 0; i < len; i++) {
	                var child = originalChildren[i],
	                    key = getKey(child);
	                if (key || 0 === key) {
	                    if (! keyedLen++) keyed = {};
	                    keyed[key] = child;
	                } else children[childrenLen++] = child;
	            }
	        }
	        if (vchildren) for (var i = 0; i < vchildren.length; i++) {
	            var vchild = vchildren[i],
	                child = void 0;
	            if (keyedLen && vchild.attributes) {
	                var key = vchild.key;
	                if (!empty(key) && key in keyed) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            }
	            if (!child && min < childrenLen) for (var j = min; j < childrenLen; j++) {
	                var _c = children[j];
	                if (_c && isSameNodeType(_c, vchild)) {
	                    child = _c;
	                    children[j] = void 0;
	                    if (j === childrenLen - 1) childrenLen--;
	                    if (j === min) min++;
	                    break;
	                }
	            }
	            child = diff(child, vchild, context, mountAll);
	            var c = (mountAll || child.parentNode !== dom) && child._component;
	            if (c) deepHook(c, 'componentWillMount');
	            var next = originalChildren[i];
	            if (next !== child) if (next) dom.insertBefore(child, next);else dom.appendChild(child);
	            if (c) deepHook(c, 'componentDidMount');
	        }
	        if (keyedLen) for (var i in keyed) if (keyed[i]) children[min = childrenLen++] = keyed[i];
	        if (min < childrenLen) removeOrphanedChildren(children);
	    }
	    function removeOrphanedChildren(children, unmountOnly) {
	        for (var i = children.length; i--;) {
	            var child = children[i];
	            if (child) recollectNodeTree(child, unmountOnly);
	        }
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var attrs = node[ATTR_KEY];
	        if (attrs) hook(attrs, 'ref', null);
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly);else {
	            if (!unmountOnly) {
	                if (1 !== getNodeType(node)) {
	                    removeNode(node);
	                    return;
	                }
	                collectNode(node);
	            }
	            var c = node.childNodes;
	            if (c && c.length) removeOrphanedChildren(c, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, attrs) {
	        var old = dom[ATTR_KEY] || getRawNodeAttributes(dom);
	        for (var _name in old) if (!(attrs && _name in attrs)) setAccessor(dom, _name, null, SVG_MODE);
	        if (attrs) for (var _name2 in attrs) if (!(_name2 in old) || attrs[_name2] != ('value' === _name2 || 'selected' === _name2 || 'checked' === _name2 ? dom[_name2] : old[_name2])) setAccessor(dom, _name2, attrs[_name2], SVG_MODE);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name,
	            list = components[name];
	        if (list) list.push(component);else components[name] = [component];
	    }
	    function createComponent(Ctor, props, context, fresh) {
	        var inst = new Ctor(props, context),
	            list = !fresh && components[Ctor.name];
	        if (list) for (var i = 0; i < list.length; i++) if (list[i].constructor === Ctor) {
	            inst.nextBase = list[i].base;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function triggerComponentRender(component) {
	        if (!component._dirty) {
	            component._dirty = !0;
	            enqueueRender(component);
	        }
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        var d = component._disableRendering === !0;
	        component._disableRendering = !0;
	        if (component.__ref = props.ref) delete props.ref;
	        if (component.__key = props.key) delete props.key;
	        if (!empty(component.base)) hook(component, 'componentWillReceiveProps', props, context);
	        if (context && context !== component.context) {
	            if (!component.prevContext) component.prevContext = component.context;
	            component.context = context;
	        }
	        if (!component.prevProps) component.prevProps = component.props;
	        component.props = props;
	        component._disableRendering = d;
	        if (opts !== NO_RENDER) if (opts === SYNC_RENDER || options.syncComponentUpdates !== !1) renderComponent(component, SYNC_RENDER, mountAll);else triggerComponentRender(component);
	        hook(component, '__ref', component);
	    }
	    function renderComponent(component, opts, mountAll) {
	        if (!component._disableRendering) {
	            var skip,
	                rendered,
	                props = component.props,
	                state = component.state,
	                context = component.context,
	                previousProps = component.prevProps || props,
	                previousState = component.prevState || state,
	                previousContext = component.prevContext || context,
	                isUpdate = component.base,
	                initialBase = isUpdate || component.nextBase,
	                initialComponent = initialBase && initialBase._component;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (opts !== FORCE_RENDER && hook(component, 'shouldComponentUpdate', props, state, context) === !1) skip = !0;else hook(component, 'componentWillUpdate', props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                rendered = hook(component, 'render', props, state, context);
	                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
	                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
	                var toUnmount,
	                    base,
	                    childComponent = rendered && rendered.nodeName;
	                if (isFunction(childComponent) && childComponent.prototype.render) {
	                    var inst = component._component;
	                    if (inst && inst.constructor !== childComponent) {
	                        toUnmount = inst;
	                        inst = null;
	                    }
	                    var childProps = getNodeProps(rendered);
	                    if (inst) setComponentProps(inst, childProps, SYNC_RENDER, context);else {
	                        inst = createComponent(childComponent, childProps, context, !1);
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        if (isUpdate) deepHook(inst, 'componentWillMount');
	                        setComponentProps(inst, childProps, NO_RENDER, context);
	                        renderComponent(inst, SYNC_RENDER);
	                        if (isUpdate) deepHook(inst, 'componentDidMount');
	                    }
	                    base = inst.base;
	                } else {
	                    var cbase = initialBase;
	                    toUnmount = component._component;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || opts === SYNC_RENDER) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered || EMPTY_BASE, context, mountAll || !isUpdate, !0);
	                    }
	                }
	                if (initialBase && base !== initialBase) {
	                    var p = initialBase.parentNode;
	                    if (p && base !== p) p.replaceChild(base, initialBase);
	                    if (!toUnmount && initialComponent === component) recollectNodeTree(initialBase);
	                }
	                if (toUnmount) unmountComponent(toUnmount, !0);
	                component.base = base;
	                if (base) {
	                    var componentRef = component,
	                        t = component;
	                    while (t = t._parentComponent) componentRef = t;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	                if (isUpdate) hook(component, 'componentDidUpdate', previousProps, previousState, previousContext);
	            }
	            var fn,
	                cb = component._renderCallbacks;
	            if (cb) while (fn = cb.pop()) fn.call(component);
	            return rendered;
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component,
	            oldDom = dom,
	            isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	            isOwner = isDirectOwner;
	        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
	        if (isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, getNodeProps(vnode), SYNC_RENDER, context, mountAll);
	            dom = c.base;
	        } else {
	            if (c && !isDirectOwner) {
	                unmountComponent(c, !0);
	                dom = oldDom = null;
	            }
	            dom = createComponentFromVNode(vnode, dom, context, mountAll);
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function createComponentFromVNode(vnode, dom, context, mountAll) {
	        var props = getNodeProps(vnode);
	        var component = createComponent(vnode.nodeName, props, context, !!dom);
	        if (dom) component.nextBase = dom;
	        setComponentProps(component, props, SYNC_RENDER, context, mountAll);
	        return component.base;
	    }
	    function unmountComponent(component, remove) {
	        hook(component, '__ref', null);
	        hook(component, 'componentWillUnmount');
	        var inner = component._component;
	        if (inner) {
	            unmountComponent(inner, remove);
	            remove = !1;
	        }
	        var base = component.base;
	        if (base) {
	            if (remove !== !1) removeNode(base);
	            removeOrphanedChildren(base.childNodes, !0);
	        }
	        if (remove) {
	            component._parentComponent = null;
	            collectComponent(component);
	        }
	        hook(component, 'componentDidUnmount');
	    }
	    function Component(props, context) {
	        this._dirty = !0;
	        this._disableRendering = !1;
	        this.prevState = this.prevProps = this.prevContext = this.base = this.nextBase = this._parentComponent = this._component = this.__ref = this.__key = this._linkedStates = this._renderCallbacks = null;
	        this.context = context || {};
	        this.props = props;
	        this.state = hook(this, 'getInitialState') || {};
	    }
	    function render(vnode, parent, merge) {
	        var existing = merge && merge._component && merge._componentConstructor === vnode.nodeName,
	            built = diff(merge, vnode, {}, !1),
	            c = !existing && built._component;
	        if (c) deepHook(c, 'componentWillMount');
	        if (built.parentNode !== parent) parent.appendChild(built);
	        if (c) deepHook(c, 'componentDidMount');
	        return built;
	    }
	    var NO_RENDER = 0;
	    var SYNC_RENDER = 1;
	    var FORCE_RENDER = 2;
	    var EMPTY = {};
	    var EMPTY_BASE = '';
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol['for']('preactattr') : '__preactattr_';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var jsToCss = memoize(function (s) {
	        return toLowerCase(s.replace(/([A-Z])/g, '-$1'));
	    });
	    var toLowerCase = memoize(function (s) {
	        return s.toLowerCase();
	    });
	    var ch;
	    try {
	        ch = new MessageChannel();
	    } catch (e) {}
	    var setImmediate = ch ? function (f) {
	        ch.port1.onmessage = f;
	        ch.port2.postMessage(EMPTY_BASE);
	    } : setTimeout;
	    var options = {
	        vnode: empty
	    };
	    var SHARED_TEMP_ARRAY = [];
	    var items = [];
	    var itemsOffline = [];
	    var nodes = {};
	    var SVG_MODE = !1;
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function linkState(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {}),
	                cacheKey = key + '|' + eventPath;
	            return c[cacheKey] || (c[cacheKey] = createLinkedState(this, key, eventPath));
	        },
	        setState: function setState(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            triggerComponentRender(this);
	        },
	        forceUpdate: function forceUpdate() {
	            renderComponent(this, FORCE_RENDER);
	        },
	        render: function render() {
	            return null;
	        }
	    });
	    exports.h = h;
	    exports.cloneElement = cloneElement;
	    exports.Component = Component;
	    exports.render = render;
	    exports.rerender = rerender;
	    exports.options = options;
	});
	//# sourceMappingURL=preact.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/timers-browserify/main.js */ 2).setImmediate))

/***/ },
/* 2 */
/*!*************************************!*\
  !*** ./~/timers-browserify/main.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {"use strict";
	
	var nextTick = __webpack_require__(/*! process/browser.js */ 3).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  timeout.close();
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function (fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function (id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/timers-browserify/main.js */ 2).setImmediate, __webpack_require__(/*! ./~/timers-browserify/main.js */ 2).clearImmediate))

/***/ },
/* 3 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ function(module, exports) {

	// shim for using process in browser
	
	'use strict';
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 4 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _FILTERS;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError('Cannot destructure undefined'); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _preact = __webpack_require__(/*! preact */ 1);
	
	var _preactRouter = __webpack_require__(/*! preact-router */ 5);
	
	var _model = __webpack_require__(/*! ./model */ 6);
	
	var _model2 = _interopRequireDefault(_model);
	
	var _header = __webpack_require__(/*! ./header */ 8);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _footer = __webpack_require__(/*! ./footer */ 9);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	var _item = __webpack_require__(/*! ./item */ 10);
	
	var _item2 = _interopRequireDefault(_item);
	
	var ALL_TODOS = 'all';
	var ACTIVE_TODOS = 'active';
	var COMPLETED_TODOS = 'completed';
	
	var FILTERS = (_FILTERS = {}, _FILTERS[ALL_TODOS] = function (todo) {
		return true;
	}, _FILTERS[ACTIVE_TODOS] = function (todo) {
		return !todo.completed;
	}, _FILTERS[COMPLETED_TODOS] = function (todo) {
		return todo.completed;
	}, _FILTERS);
	
	var App = (function (_Component) {
		_inherits(App, _Component);
	
		function App() {
			var _this = this;
	
			_classCallCheck(this, App);
	
			_Component.apply(this, arguments);
	
			this.model = _model2['default']();
			this.state = {
				todos: this.model.todos,
				nowShowing: ALL_TODOS
			};
	
			this.handleRoute = function (_ref) {
				var url = _ref.url;
	
				var nowShowing = url.replace(/\/$/, '').split('/').pop();
				if (!FILTERS[nowShowing]) {
					nowShowing = ALL_TODOS;
				}
				_this.setState({ nowShowing: nowShowing });
			};
	
			this.toggleAll = function (e) {
				_this.model.toggleAll(e.target.checked);
			};
	
			this.save = function (todo, text) {
				_this.model.save(todo, text);
				_this.reset();
			};
	
			this.reset = function () {
				_this.setState({ editing: null });
			};
		}
	
		// just a fake component we can feed to router. yay.
	
		App.prototype.componentWillMount = function componentWillMount() {
			this.model.subscribe(this.linkState('todos', 'todos'));
		};
	
		App.prototype.render = function render(_ref2, _ref3) {
			var _this2 = this;
	
			_objectDestructuringEmpty(_ref2);
	
			var _ref3$nowShowing = _ref3.nowShowing;
			var nowShowing = _ref3$nowShowing === undefined ? ALL_TODOS : _ref3$nowShowing;
			var todos = _ref3.todos;
			var newTodo = _ref3.newTodo;
			var editing = _ref3.editing;
	
			var shownTodos = todos.filter(FILTERS[nowShowing]),
			    activeTodoCount = todos.reduce(function (a, todo) {
				return a + (todo.completed ? 0 : 1);
			}, 0),
			    completedCount = todos.length - activeTodoCount;
	
			return _preact.h(
				'div',
				null,
				_preact.h(
					_preactRouter.Router,
					{ onChange: this.handleRoute },
					_preact.h(Noop, { path: '/' })
				),
				_preact.h(_header2['default'], { addTodo: this.model.addTodo }),
				todos.length ? _preact.h(
					'section',
					{ id: 'main' },
					_preact.h('input', {
						id: 'toggle-all',
						type: 'checkbox',
						onChange: this.toggleAll,
						checked: activeTodoCount === 0
					}),
					_preact.h(
						'ul',
						{ id: 'todo-list' },
						shownTodos.map(function (todo) {
							return _preact.h(_item2['default'], {
								key: todo.id,
								todo: todo,
								onToggle: _this2.model.toggle,
								onDestroy: _this2.model.destroy,
								editing: editing === todo.id,
								onEdit: _this2.linkState('editing', 'id'),
								onSave: _this2.save,
								onCancel: _this2.reset
							});
						})
					)
				) : null,
				activeTodoCount || completedCount ? _preact.h(_footer2['default'], {
					count: activeTodoCount,
					completedCount: completedCount,
					nowShowing: nowShowing,
					onClearCompleted: this.model.clearCompleted
				}) : null
			);
		};
	
		return App;
	})(_preact.Component);
	
	exports['default'] = App;
	var Noop = function Noop() {
		return null;
	};
	module.exports = exports['default'];

/***/ },
/* 5 */
/*!***********************************************!*\
  !*** ./~/preact-router/dist/preact-router.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	(function (global, factory) {
		 true ? module.exports = factory(__webpack_require__(/*! preact */ 1)) : typeof define === 'function' && define.amd ? define(['preact'], factory) : global.preactRouter = factory(global.preact);
	})(undefined, function (preact) {
		'use strict';
	
		var babelHelpers = {};
	
		babelHelpers.classCallCheck = function (instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		};
	
		babelHelpers['extends'] = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
	
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
	
			return target;
		};
	
		babelHelpers.inherits = function (subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			}
	
			subClass.prototype = Object.create(superClass && superClass.prototype, {
				constructor: {
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		};
	
		babelHelpers.objectWithoutProperties = function (obj, keys) {
			var target = {};
	
			for (var i in obj) {
				if (keys.indexOf(i) >= 0) continue;
				if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
				target[i] = obj[i];
			}
	
			return target;
		};
	
		babelHelpers.possibleConstructorReturn = function (self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}
	
			return call && (typeof call === "object" || typeof call === "function") ? call : self;
		};
	
		babelHelpers;
	
		var EMPTY$1 = {};
	
		function exec(url, route) {
			var opts = arguments.length <= 2 || arguments[2] === undefined ? EMPTY$1 : arguments[2];
	
			var reg = /(?:\?([^#]*))?(#.*)?$/,
			    c = url.match(reg),
			    matches = {},
			    ret = void 0;
			if (c && c[1]) {
				var p = c[1].split('&');
				for (var i = 0; i < p.length; i++) {
					var r = p[i].split('=');
					matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
				}
			}
			url = segmentize(url.replace(reg, ''));
			route = segmentize(route || '');
			var max = Math.max(url.length, route.length);
			for (var _i = 0; _i < max; _i++) {
				if (route[_i] && route[_i].charAt(0) === ':') {
					var param = route[_i].replace(/(^\:|[+*?]+$)/g, ''),
					    flags = (route[_i].match(/[+*?]+$/) || EMPTY$1)[0] || '',
					    plus = ~flags.indexOf('+'),
					    star = ~flags.indexOf('*'),
					    val = url[_i] || '';
					if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
						ret = false;
						break;
					}
					matches[param] = decodeURIComponent(val);
					if (plus || star) {
						matches[param] = url.slice(_i).map(decodeURIComponent).join('/');
						break;
					}
				} else if (route[_i] !== url[_i]) {
					ret = false;
					break;
				}
			}
			if (opts['default'] !== true && ret === false) return false;
			return matches;
		}
	
		function pathRankSort(a, b) {
			var aAttr = a.attributes || EMPTY$1,
			    bAttr = b.attributes || EMPTY$1;
			if (aAttr['default']) return 1;
			if (bAttr['default']) return -1;
			var diff = rank(aAttr.path) - rank(bAttr.path);
			return diff || aAttr.path.length - bAttr.path.length;
		}
	
		function segmentize(url) {
			return strip(url).split('/');
		}
	
		function rank(url) {
			return (strip(url).match(/\/+/g) || '').length;
		}
	
		function strip(url) {
			return url.replace(/(^\/+|\/+$)/g, '');
		}
	
		var ROUTERS = [];
	
		var EMPTY = {};
	
		function route(url) {
			var replace = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
			if (typeof url !== 'string' && url.url) {
				replace = url.replace;
				url = url.url;
			}
			if (typeof history !== 'undefined' && history.pushState) {
				if (replace === true) {
					history.replaceState(null, null, url);
				} else {
					history.pushState(null, null, url);
				}
			}
			return routeTo(url);
		}
	
		function routeTo(url) {
			var didRoute = false;
			ROUTERS.forEach(function (router) {
				if (router.routeTo(url) === true) {
					didRoute = true;
				}
			});
			return didRoute;
		}
	
		function getCurrentUrl() {
			var url = typeof location !== 'undefined' ? location : EMPTY;
			return '' + (url.pathname || '') + (url.search || '');
		}
	
		function routeFromLink(node) {
			// only valid elements
			if (!node || !node.getAttribute) return;
	
			var href = node.getAttribute('href'),
			    target = node.getAttribute('target');
	
			// ignore links with targets and non-path URLs
			if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) return;
	
			// attempt to route, if no match simply cede control to browser
			return route(href);
		}
	
		function handleLinkClick(e) {
			routeFromLink(e.currentTarget || e.target || this);
			return prevent(e);
		}
	
		function prevent(e) {
			if (e) {
				if (e.stopImmediatePropagation) e.stopImmediatePropagation();
				if (e.stopPropagation) e.stopPropagation();
				e.preventDefault();
			}
			return false;
		}
	
		function delegateLinkHandler(e) {
			// ignore events the browser takes care of already:
			if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
	
			var t = e.target;
			do {
				if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
					// if link is handled by the router, prevent browser defaults
					if (routeFromLink(t)) {
						return prevent(e);
					}
				}
			} while (t = t.parentNode);
		}
	
		if (typeof addEventListener === 'function') {
			addEventListener('popstate', function () {
				return routeTo(getCurrentUrl());
			});
			addEventListener('click', delegateLinkHandler);
		}
	
		var Link = function Link(_ref) {
			var children = _ref.children;
			var props = babelHelpers.objectWithoutProperties(_ref, ['children']);
			return preact.h('a', babelHelpers['extends']({}, props, { onClick: handleLinkClick }), children);
		};
	
		var Router = (function (_Component) {
			babelHelpers.inherits(Router, _Component);
	
			function Router() {
				var _temp, _this, _ret;
	
				babelHelpers.classCallCheck(this, Router);
	
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
	
				return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
					url: _this.props.url || getCurrentUrl()
				}, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
			}
	
			Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
				if (props['static'] !== true) return true;
				return props.url !== this.props.url || props.onChange !== this.props.onChange;
			};
	
			Router.prototype.routeTo = function routeTo(url) {
				this._didRoute = false;
				this.setState({ url: url });
				this.forceUpdate();
				return this._didRoute;
			};
	
			Router.prototype.componentWillMount = function componentWillMount() {
				ROUTERS.push(this);
			};
	
			Router.prototype.componentWillUnmount = function componentWillUnmount() {
				ROUTERS.splice(ROUTERS.indexOf(this), 1);
			};
	
			Router.prototype.render = function render(_ref2, _ref3) {
				var children = _ref2.children;
				var onChange = _ref2.onChange;
				var url = _ref3.url;
	
				var active = children.slice().sort(pathRankSort).filter(function (_ref4) {
					var attributes = _ref4.attributes;
	
					var path = attributes.path,
					    matches = exec(url, path, attributes);
					if (matches) {
						attributes.url = url;
						attributes.matches = matches;
						// copy matches onto props
						for (var i in matches) {
							if (matches.hasOwnProperty(i)) {
								attributes[i] = matches[i];
							}
						}
						return true;
					}
				});
	
				var current = active[0] || null;
				this._didRoute = !!current;
	
				var previous = this.previousUrl;
				if (url !== previous) {
					this.previousUrl = url;
					if (typeof onChange === 'function') {
						onChange({
							router: this,
							url: url,
							previous: previous,
							active: active,
							current: current
						});
					}
				}
	
				return current;
			};
	
			return Router;
		})(preact.Component);
	
		var Route = function Route(_ref5) {
			var RoutedComponent = _ref5.component;
			var url = _ref5.url;
			var matches = _ref5.matches;
			return preact.h(RoutedComponent, { url: url, matches: matches });
		};
	
		Router.route = route;
		Router.Router = Router;
		Router.Route = Route;
		Router.Link = Link;
	
		return Router;
	});
	//# sourceMappingURL=preact-router.js.map

/***/ },
/* 6 */
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _util = __webpack_require__(/*! ./util */ 7);
	
	// note: commented out localStorage persistence as it mucks up tests.
	
	exports['default'] = function () {
		var onChanges = [];
	
		function inform() {
			for (var i = onChanges.length; i--;) {
				onChanges[i](model);
			}
		}
	
		var model = {
			todos: [],
	
			onChanges: [],
	
			subscribe: function subscribe(fn) {
				onChanges.push(fn);
			},
	
			addTodo: function addTodo(title) {
				model.todos = model.todos.concat({
					id: _util.uuid(),
					title: title,
					completed: false
				});
				inform();
			},
	
			toggleAll: function toggleAll(completed) {
				model.todos = model.todos.map(function (todo) {
					return _extends({}, todo, { completed: completed });
				});
				inform();
			},
	
			toggle: function toggle(todoToToggle) {
				model.todos = model.todos.map(function (todo) {
					return todo !== todoToToggle ? todo : _extends({}, todo, { completed: !todo.completed });
				});
				inform();
			},
	
			destroy: function destroy(todo) {
				model.todos = model.todos.filter(function (t) {
					return t !== todo;
				});
				inform();
			},
	
			save: function save(todoToSave, title) {
				model.todos = model.todos.map(function (todo) {
					return todo !== todoToSave ? todo : _extends({}, todo, { title: title });
				});
				inform();
			},
	
			clearCompleted: function clearCompleted() {
				model.todos = model.todos.filter(function (todo) {
					return !todo.completed;
				});
				inform();
			}
		};
	
		return model;
	};
	
	module.exports = exports['default'];

/***/ },
/* 7 */
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.uuid = uuid;
	exports.pluralize = pluralize;
	exports.store = store;
	
	function uuid() {
		var uuid = '';
		for (var i = 0; i < 32; i++) {
			var random = Math.random() * 16 | 0;
			if (i === 8 || i === 12 || i === 16 || i === 20) {
				uuid += '-';
			}
			uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
		}
		return uuid;
	}
	
	function pluralize(count, word) {
		return count === 1 ? word : word + 's';
	}
	
	function store(namespace, data) {
		if (data) {
			return localStorage.setItem(namespace, JSON.stringify(data));
		}
	
		var store = localStorage.getItem(namespace);
		return store && JSON.parse(store) || [];
	}

/***/ },
/* 8 */
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError('Cannot destructure undefined'); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _preact = __webpack_require__(/*! preact */ 1);
	
	var ENTER_KEY = 13;
	
	var TodoHeader = (function (_Component) {
		_inherits(TodoHeader, _Component);
	
		function TodoHeader() {
			var _this = this;
	
			_classCallCheck(this, TodoHeader);
	
			_Component.apply(this, arguments);
	
			this.handleKey = function (e) {
				if (e.keyCode !== ENTER_KEY) return;
				e.preventDefault();
	
				var text = _this.state.text.trim();
				if (text) {
					_this.props.addTodo(text);
					_this.setState({ text: '' });
				}
			};
		}
	
		TodoHeader.prototype.render = function render(_ref, _ref2) {
			_objectDestructuringEmpty(_ref);
	
			var text = _ref2.text;
	
			return _preact.h(
				'header',
				{ id: 'header' },
				_preact.h(
					'h1',
					null,
					'todos'
				),
				_preact.h('input', {
					id: 'new-todo',
					placeholder: 'What needs to be done?',
					value: text,
					onKeyDown: this.handleKey,
					onInput: this.linkState('text'),
					autoFocus: true
				})
			);
		};
	
		return TodoHeader;
	})(_preact.Component);
	
	exports['default'] = TodoHeader;
	module.exports = exports['default'];

/***/ },
/* 9 */
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _preact = __webpack_require__(/*! preact */ 1);
	
	var _preactRouter = __webpack_require__(/*! preact-router */ 5);
	
	var _util = __webpack_require__(/*! ./util */ 7);
	
	var ALL_TODOS = 'all';
	var ACTIVE_TODOS = 'active';
	var COMPLETED_TODOS = 'completed';
	
	exports['default'] = function (_ref) {
		var nowShowing = _ref.nowShowing;
		var count = _ref.count;
		var completedCount = _ref.completedCount;
		var onClearCompleted = _ref.onClearCompleted;
		return _preact.h(
			'footer',
			{ id: 'footer' },
			_preact.h(
				'span',
				{ id: 'todo-count' },
				_preact.h(
					'strong',
					null,
					count
				),
				' ',
				_util.pluralize(count, 'item'),
				' left'
			),
			_preact.h(
				'ul',
				{ id: 'filters' },
				_preact.h(
					'li',
					null,
					_preact.h(
						_preactRouter.Link,
						{ href: '/', 'class': { selected: nowShowing === ALL_TODOS } },
						'All'
					)
				),
				' ',
				_preact.h(
					'li',
					null,
					_preact.h(
						_preactRouter.Link,
						{ href: '/active', 'class': { selected: nowShowing === ACTIVE_TODOS } },
						'Active'
					)
				),
				' ',
				_preact.h(
					'li',
					null,
					_preact.h(
						_preactRouter.Link,
						{ href: '/completed', 'class': { selected: nowShowing === COMPLETED_TODOS } },
						'Completed'
					)
				)
			),
			completedCount > 0 ? _preact.h(
				'button',
				{ id: 'clear-completed', onClick: onClearCompleted },
				'Clear completed'
			) : null
		);
	};
	
	module.exports = exports['default'];

/***/ },
/* 10 */
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _preact = __webpack_require__(/*! preact */ 1);
	
	var ESCAPE_KEY = 27;
	var ENTER_KEY = 13;
	
	var TodoItem = (function (_Component) {
		_inherits(TodoItem, _Component);
	
		function TodoItem() {
			var _this = this;
	
			_classCallCheck(this, TodoItem);
	
			_Component.apply(this, arguments);
	
			this.handleSubmit = function () {
				var val = _this.state.editText.trim();
				var _props = _this.props;
				var todo = _props.todo;
				var onSave = _props.onSave;
				var onDestroy = _props.onDestroy;
	
				if (val) {
					onSave(todo, val);
					_this.setState({ editText: val });
				} else {
					onDestroy(todo);
				}
			};
	
			this.handleEdit = function () {
				var _props2 = _this.props;
				var todo = _props2.todo;
				var onEdit = _props2.onEdit;
	
				onEdit(todo);
				_this.setState({ editText: todo.title });
			};
	
			this.toggle = function (e) {
				var _props3 = _this.props;
				var todo = _props3.todo;
				var onToggle = _props3.onToggle;
	
				onToggle(todo);
				e.preventDefault();
			};
	
			this.handleKeyDown = function (e) {
				var _props4 = _this.props;
				var todo = _props4.todo;
				var onCancel = _props4.onCancel;
	
				if (e.which === ESCAPE_KEY) {
					_this.setState({ editText: todo.title });
					onCancel(todo);
				} else if (e.which === ENTER_KEY) {
					_this.handleSubmit(todo);
				}
			};
	
			this.destroy = function () {
				var _props5 = _this.props;
				var todo = _props5.todo;
				var onDestroy = _props5.onDestroy;
	
				onDestroy(todo);
			};
		}
	
		TodoItem.prototype.focus = function focus(c) {
			if (c) setTimeout(function () {
				return c.focus();
			}, 1);
		};
	
		// componentDidUpdate({ editing }) {
		// 	let node = editing && this.base && this.base.querySelector('.edit');
		// 	if (node) node.focus();
		// }
	
		TodoItem.prototype.render = function render(_ref, _ref2) {
			var _ref$todo = _ref.todo;
			var title = _ref$todo.title;
			var completed = _ref$todo.completed;
			var editing = _ref.editing;
			var editText = _ref2.editText;
	
			return _preact.h(
				"li",
				{ "class": { completed: completed, editing: editing } },
				_preact.h(
					"div",
					{ "class": "view" },
					_preact.h("input", {
						"class": "toggle",
						type: "checkbox",
						checked: completed || 0,
						onClick: this.toggle
					}),
					_preact.h(
						"label",
						{ onDblClick: this.handleEdit },
						title
					),
					_preact.h("button", { "class": "destroy", onClick: this.destroy })
				),
				editing && _preact.h("input", {
					ref: this.focus,
					"class": "edit",
					value: editing && editText || title,
					onBlur: this.handleSubmit,
					onChange: this.linkState('editText'),
					onKeyDown: this.handleKeyDown
				})
			);
		};
	
		return TodoItem;
	})(_preact.Component);
	
	exports["default"] = TodoItem;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map