import { uuid, store } from './util';

// note: commented out localStorage persistence as it mucks up tests.

export default () => {
	let onChanges = [];

	function inform() {
		for (let i=onChanges.length; i--; ) {
			onChanges[i](model);
		}
	}

	let model = {
		todos: [],

		onChanges: [],

		subscribe(fn) {
			onChanges.push(fn);
		},

		addTodo(title) {
			model.todos = model.todos.concat({
				id: uuid(),
				title,
				completed: false
			});
			inform();
		},

		toggleAll(completed) {
			model.todos = model.todos.map(
				todo => ({ ...todo, completed })
			);
			inform();
		},

		toggle(todoToToggle) {
			model.todos = model.todos.map( todo => (
				todo !== todoToToggle ? todo : ({ ...todo, completed: !todo.completed })
			) );
			inform();
		},

		destroy(todo) {
			model.todos = model.todos.filter( t => t !== todo );
			inform();
		},

		save(todoToSave, title) {
			model.todos = model.todos.map( todo => (
				todo !== todoToSave ? todo : ({ ...todo, title })
			));
			inform();
		},

		clearCompleted() {
			model.todos = model.todos.filter( todo => !todo.completed );
			inform();
		}
	};

	return model;
};
