import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaNewTodo } from '@src/shared/schema';

import Input from '@src/components/UI/Input/Input';
import Textarea from '@src/components/UI/Textarea/Textarea';
import Button from '@src/components/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '@src/components/Loader/Loader';
import { changeTodo } from '@src/store/actions/todoActions';

const TodoPageEdit = props => {
  const { todo } = props;
  const id = props.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schemaNewTodo),
    defaultValues: { title: todo.title, text: todo.text },
  });
  const dispatch = useDispatch();
  const loading = useSelector(state => state.todo.changeTodoLoading);
  const error = useSelector(state => state.todo.changeTodoError);
  const changeTodoData = (id, data) => dispatch(changeTodo(id, data));

  const editTodoHandler = data => {
    changeTodoData(id, data);
  };

  return (
    <form onSubmit={handleSubmit(editTodoHandler)}>
      <h3 className="todo-page__title">{todo.title}</h3>
      <Input errors={!!errors.title} errorsMessage={errors?.title?.message} {...register('title')} />
      <div className="todo-page__text">{todo.text}</div>
      <Textarea errors={!!errors.text} errorsMessage={errors?.text?.message} {...register('text')} />
      {loading && <Loader />}
      {error && <p className="error">{error.message}</p>}
      <Button type="submit" disabled={loading}>
        Submit changes
      </Button>
    </form>
  );
};

export default TodoPageEdit;
