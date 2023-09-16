import React, { useRef, useState } from 'react';
import { MdHighlightOff } from 'react-icons/md';

interface ITodoItemProps {
	id: string;
	text: string;
	removeFn: (id: string) => void;
	updateFn: (id: string, text: string) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({
	id,
	text,
	removeFn,
	updateFn,
}) => {
	const [originalItemText] = useState(text);
	const [tempText, setTempText] = useState(originalItemText);
	const [editing, setEditing] = useState(false);
	const itemTextField = useRef<HTMLInputElement>(null);

	const enableEdit = () => {
		if (itemTextField.current !== null) {
			itemTextField.current.disabled = false;
			itemTextField.current.focus();
			setEditing(true);
		}
	};

	const changeTodoText = (e: React.ChangeEvent) => {
		setTempText((e.target as HTMLInputElement).value);
	};

	const updateTodo = (e: React.KeyboardEvent) => {
		if (itemTextField.current !== null) {
			if (e.key === 'Enter') {
				updateFn(id, tempText);
				itemTextField.current.disabled = true;
				setEditing(false);
			}
			if (e.key === 'Escape') {
				setTempText(originalItemText);
				itemTextField.current.disabled = true;
				setEditing(false);
			}
		}
	};

	return (
		<article className='todo-item'>
			<div className='todo-text' onDoubleClick={enableEdit}>
				<input
					ref={itemTextField}
					disabled
					value={tempText}
					onChange={changeTodoText}
					onKeyDown={updateTodo}
					maxLength={70}
				/>
				{editing && (
					<div className='todo-instructions'>
						<i>"Enter" to confirm, "Escape" to cancel</i>
					</div>
				)}
			</div>
			<div
				className='todo-remove'
				onClick={() => {
					removeFn(id);
				}}
			>
				<MdHighlightOff />
			</div>
		</article>
	);
};

export default TodoItem;
