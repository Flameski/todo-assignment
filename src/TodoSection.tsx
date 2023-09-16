import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { todos } from './todos';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoSection: React.FC = () => {
	const [todoItems, setTodoItems] = useState(todos);

	const updateTodo = (id: string, text: string) => {
		const updatedItems = todoItems.map((item) => {
			if (item.id === id) {
				return { ...item, text: text };
			}
			return item;
		});
		setTodoItems(updatedItems);
	};

	const removeTodo = (id: string) => {
		const newTodoItems = todoItems.filter((item) => item.id !== id);
		setTodoItems(newTodoItems);
	};

	const addNewItem = (text: string) => {
		const newItem = {
			id: uuidv4(),
			text: text,
		};
		const newTodoItems = [...todoItems, newItem];
		setTodoItems(newTodoItems);
	};

	return (
		<>
			<section className='todos-list'>
				{todoItems.length === 0 ? (
					<h2>No To-Do items to display. Add some below.</h2>
				) : (
					todoItems.map((item) => {
						return (
							<TodoItem
								key={item.id}
								{...item}
								removeFn={removeTodo}
								updateFn={updateTodo}
							/>
						);
					})
				)}
			</section>
			<AddTodo addItemFn={addNewItem} />
		</>
	);
};

export default TodoSection;
