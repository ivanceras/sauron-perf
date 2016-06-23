import { h, Component } from 'preact';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export default class TodoItem extends Component {
	handleSubmit = () => {
		let val = this.state.editText.trim(),
			{ todo, onSave, onDestroy } = this.props;
		if (val) {
			onSave(todo, val);
			this.setState({ editText: val });
		}
		else {
			onDestroy(todo);
		}
	};

	handleEdit = () => {
		let { todo, onEdit } = this.props;
		onEdit(todo);
		this.setState({ editText: todo.title });
	};

	toggle = e => {
		let { todo, onToggle } = this.props;
		onToggle(todo);
		e.preventDefault();
	};

	handleKeyDown = e => {
		let { todo, onCancel } = this.props;
		if (e.which===ESCAPE_KEY) {
			this.setState({ editText: todo.title });
			onCancel(todo);
		}
		else if (e.which===ENTER_KEY) {
			this.handleSubmit(todo);
		}
	};

	destroy = () => {
		let { todo, onDestroy } = this.props;
		onDestroy(todo);
	};

	focus(c) {
		if (c) setTimeout(() => c.focus(), 1);
	}

	// componentDidUpdate({ editing }) {
	// 	let node = editing && this.base && this.base.querySelector('.edit');
	// 	if (node) node.focus();
	// }

	render({ todo:{ title, completed }, editing }, { editText }) {
		return (
			<li class={{ completed, editing }}>
				<div class="view">
					<input
						class="toggle"
						type="checkbox"
						checked={completed || 0}
						onClick={this.toggle}
					/>
					<label onDblClick={this.handleEdit}>{title}</label>
					<button class="destroy" onClick={this.destroy} />
				</div>
				{ editing && (
					<input
						ref={this.focus}
						class="edit"
						value={editing && editText || title}
						onBlur={this.handleSubmit}
						onChange={this.linkState('editText')}
						onKeyDown={this.handleKeyDown}
					/>
				) }
			</li>
		);
	}
}
