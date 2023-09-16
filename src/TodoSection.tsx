import { useState } from 'react';
import TodoItem from './TodoItem';
import { todos } from './todos';

const TodoSection: React.FC = () => {
	const removeTodo = (id: string) => {
		const newTodoItems = todoItems.filter((item) => item.id !== id);
		setTodoItems(newTodoItems);
	};

	const [todoItems, setTodoItems] = useState(todos);

	return (
		<>
			<section className='todos-list'>
				{todoItems.map((item) => {
					return <TodoItem key={item.id} {...item} removeFn={removeTodo} />;
				})}
			</section>
			<section className='add-todo'>
				<div>Add new item here</div>
			</section>
		</>
	);
};

export default TodoSection;
