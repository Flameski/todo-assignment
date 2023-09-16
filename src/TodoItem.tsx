import React from 'react';

interface ITodoItemProps {
	id: string;
	text: string;
	removeFn: (id: string) => void;
}

const updateTodo = (e: React.MouseEvent) => {};

const TodoItem: React.FC<ITodoItemProps> = ({ id, text, removeFn }) => {
	return (
		<article className='todo-item'>
			<div className='todo-text' onDoubleClick={updateTodo}>
				{text}
			</div>
			<div
				className='todo-remove'
				onClick={() => {
					removeFn(id);
				}}
			>
				X
			</div>
		</article>
	);
};

export default TodoItem;
