import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '@src/components/UI/Input/Input';
import Textarea from '@src/components/UI/Textarea/Textarea';
import Button from '@src/components/UI/Button/Button';
import Loader from '@src/components/Loader/Loader';
import { todoSubmit } from '@src/store/actions/todoAction';

const NewTodoPage = () => {
  const [titleValue, setTitleValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const loading = useSelector(state => state.todo.loading);
  const error = useSelector(state => state.todo.error);
  const dispatch = useDispatch();
  const submitTodo = newTodo => dispatch(todoSubmit(newTodo));

  const submitTodoHandler = event => {
    event.preventDefault();

    if (titleValue && textValue) {
      const newTodo = { title: titleValue, text: textValue };
      submitTodo(newTodo);
      setTitleValue('');
      setTextValue('');
    }
  };

  return (
    <div className="new-todo-page">
      <form className="container" onSubmit={submitTodoHandler}>
        <Input label="Title" value={titleValue} onChange={event => setTitleValue(event.target.value)} />
        <Textarea label="Text" value={textValue} onChange={event => setTextValue(event.target.value)} />
        {loading && <Loader />}
        <Button className="new-todo-page__button" type="submit">
          Send
        </Button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
};

export default memo(NewTodoPage);
