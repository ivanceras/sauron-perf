import { uuid, store } from './util';

// note: commented out localStorage persistence as it mucks up tests.

export default class TodoModel {
	constructor(key) {
		this.key = key;
		// this.todos = store(key) || [];
		this.todos = [];
		this.onChanges = [];
	}

	subscribe(fn) {
		this.onChanges.push(fn);
	}

	inform() {
		for (let i=this.onChanges.length; i--; ) this.onChanges[i](this);
		// if (!this.timer) this.queueSave();
	}

	// queueSave() {
	// 	this.timer = setTimeout( () => {
	// 		this.timer = null;
	// 		store(this.key, this.todos);
	// 	}, 500);
	// }

	addTodo(title) {
		this.todos = this.todos.concat({
			id: uuid(),
			title,
			completed: false
		});
		this.inform();
	}

	toggleAll(completed) {
		this.todos = this.todos.map(
			todo => ({ ...todo, completed })
		);
		this.inform();
	}

	toggle(todoToToggle) {
		this.todos = this.todos.map( todo => (
			todo !== todoToToggle ? todo : ({ ...todo, completed: !todo.completed })
		) );
		this.inform();
	}

	destroy(todo) {
		this.todos = this.todos.filter( t => t !== todo );
		this.inform();
	}

	save(todoToSave, title) {
		this.todos = this.todos.map( todo => (
			todo !== todoToSave ? todo : ({ ...todo, title })
		));
		this.inform();
	}

	clearCompleted() {
		this.todos = this.todos.filter( todo => !todo.completed );
		this.inform();
	}
}
