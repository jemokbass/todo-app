import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaNewTodo } from '@src/shared/schema';

import Input from '@src/components/UI/Input/Input';
import Textarea from '@src/components/UI/Textarea/Textarea';
import Button from '@src/components/UI/Button/Button';

const TodoPageEdit = props => {
  const { todo } = props;
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schemaNewTodo) });

  const editTodoHandler = data => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(editTodoHandler)}>
      <h3 className="todo-page__title">{todo.title}</h3>
      <Input errors={!!errors.title} errorsMessage={errors?.title?.message} {...register('title')} />
      <div className="todo-page__text">{todo.text}</div>
      <Textarea errors={!!errors.text} errorsMessage={errors?.text?.message} {...register('text')} />
      <Button type="submit">Submit changes</Button>
    </form>
  );
};

export default TodoPageEdit;
