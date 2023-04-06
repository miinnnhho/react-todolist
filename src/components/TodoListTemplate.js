import React from 'react';
import './TodoListTemplate.css';


const TodoListTemplate = ({form, children}) => { //{form, children} same to (props)
return (
    <main className='todo-list-template'>
        <div className='title'>
            To Do List🧑🏻‍💻
        </div>
        <section className='form-wrapper'>
            {form}
        </section>
        <section className='todos-wrapper'>
            {children}
        </section>
    </main>
);
};

export default TodoListTemplate;