import { h, Component } from 'preact';
import bind from 'autobind-decorator';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

function shallowEqual(a, b) {
	for (let i in a) if (a[i]!==b[i]) return false;
	return true;
};

@bind
export default class TodoItem extends Component {
	shouldComponentUpdate(props, state) {
		return !shallowEqual(props, this.props) || !shallowEqual(state, this.state);
	}

	handleSubmit() {
		let val = this.state.editText.trim(),
			{ todo } = this.props;
		if (val) {
			this.props.onSave(todo, val);
			this.setState({ editText: val });
		}
		else {
			this.props.onDestroy(todo);
		}
	}

	handleEdit() {
		let { todo } = this.props;
		this.props.onEdit(todo);
		this.setState({ editText: todo.title });
	}

	toggle(e) {
		this.props.onToggle(this.props.todo);
		e.preventDefault();
	}

	handleKeyDown(e) {
		let { todo } = this.props;
		if (e.which===ESCAPE_KEY) {
			this.setState({ editText: todo.title });
			this.props.onCancel(todo);
		}
		else if (e.which===ENTER_KEY) {
			this.handleSubmit(todo);
		}
	}

	destroy() {
		this.props.onDestroy(this.props.todo);
	}

	componentDidUpdate({ editing }) {
		let node = editing && this.base && this.base.querySelector('.edit');
		if (node) node.focus();
	}

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
				<input
					class="edit"
					value={editing && editText || title}
					onBlur={this.handleSubmit}
					onChange={this.linkState('editText')}
					onKeyDown={this.handleKeyDown}
				/>
			</li>
		);
	}
}
