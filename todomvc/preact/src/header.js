import { h, Component } from 'preact';

const ENTER_KEY = 13;

export default class TodoHeader extends Component {
	handleKey = e => {
		if (e.keyCode!==ENTER_KEY) return;
		e.preventDefault();

		let text = this.state.text.trim();
		if (text) {
			this.props.addTodo(text);
			this.setState({ text: '' });
		}
	};

	render({ }, { text }) {
		return (
			<header id="header">
				<h1>todos</h1>
				<input
					id="new-todo"
					placeholder="What needs to be done?"
					value={text}
					onKeyDown={this.handleKey}
					onInput={this.linkState('text')}
					autoFocus
				/>
			</header>
		);
	}
}
