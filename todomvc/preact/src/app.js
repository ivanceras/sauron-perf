import { h, render, Component } from 'preact';
import { Router } from 'preact-router';
import bind from 'autobind-decorator';
import TodoModel from './model';
import TodoFooter from './footer';
import TodoItem from './item';

const ENTER_KEY = 13;

const ALL_TODOS = 'all';
const ACTIVE_TODOS = 'active';
const COMPLETED_TODOS = 'completed';

const FILTERS = {
	[ALL_TODOS]: todo => true,
	[ACTIVE_TODOS]: todo => !todo.completed,
	[COMPLETED_TODOS]: todo => todo.completed
};

@bind
export default class App extends Component {
	constructor() {
		super();
		this.model = new TodoModel('preact-perf-todos');
		this.state = { todos: this.model.todos };
		this.model.subscribe( ({ todos }) => this.setState({ todos }) );
	}

	getInitialState() {
		return { nowShowing: ALL_TODOS };
	}

	handleRoute({ url }) {
		let nowShowing = url.replace(/\/$/,'').split('/').pop();
		if (!FILTERS[nowShowing]) {
			nowShowing = ALL_TODOS;
		}
		this.setState({ nowShowing });
	}

	handleNewTodoKeyDown(e) {
		if (e.keyCode!==ENTER_KEY) return;
		e.preventDefault();

		let val = this.state.newTodo.trim();
		if (val) {
			this.model.addTodo(val);
			this.setState({ newTodo: '' });
		}
	}

	toggleAll(e) {
		this.model.toggleAll(e.target.checked);
	}

	toggle(todo) {
		this.model.toggle(todo);
	}

	destroy(todo) {
		this.model.destroy(todo);
	}

	edit({ id }) {
		this.setState({ editing: id });
	}

	save(todo, text) {
		this.model.save(todo, text);
		this.setState({ editing: null });
	}

	cancel() {
		this.setState({ editing: null });
	}

	clearCompleted() {
		this.model.clearCompleted();
	}

	render({ }, { nowShowing=ALL_TODOS, todos, newTodo, editing }) {
		let shownTodos = todos.filter( FILTERS[nowShowing] ),
			activeTodoCount = todos.reduce( (a, todo) => a + (todo.completed ? 0 : 1), 0),
			completedCount = todos.length - activeTodoCount;

		return (
			<div>
				<Router onChange={this.handleRoute}><Noop path="/" /></Router>

				<header id="header">
					<h1>todos</h1>
					<input
						id="new-todo"
						placeholder="What needs to be done?"
						value={newTodo}
						onKeyDown={this.handleNewTodoKeyDown}
						onInput={this.linkState('newTodo')}
						autoFocus={true}
					/>
				</header>

				{ todos.length ? (
					<section id="main">
						<input
							id="toggle-all"
							type="checkbox"
							onChange={this.toggleAll}
							checked={activeTodoCount === 0}
						/>
						<ul id="todo-list">
							{ shownTodos.map( todo => (
								<TodoItem
									key={todo.id}
									todo={todo}
									onToggle={this.toggle}
									onDestroy={this.destroy}
									onEdit={this.edit}
									editing={editing === todo.id}
									onSave={this.save}
									onCancel={this.cancel}
								/>
							)) }
						</ul>
					</section>
				) : null }

				{ (activeTodoCount || completedCount) ? (
					<TodoFooter
						count={activeTodoCount}
						completedCount={completedCount}
						nowShowing={nowShowing}
						onClearCompleted={this.clearCompleted}
					/>
				) : null }
			</div>
		);
	}
}


// just a fake component we can feed to router. yay.
class Noop extends Component {
	render() {
		return null;
	}
}
