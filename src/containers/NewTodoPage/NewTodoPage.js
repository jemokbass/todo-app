import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router';
import { schemaNewTodo } from '@src/shared/schema';

import Input from '@src/components/UI/Input/Input';
import Textarea from '@src/components/UI/Textarea/Textarea';
import Button from '@src/components/UI/Button/Button';
import Loader from '@src/components/Loader/Loader';
import { todoSubmit } from '@src/store/actions/todoActions';
import Checkbox from '@src/components/UI/Checkbox/Checkbox';

const NewTodoPage = () => {
  const loading = useSelector(state => state.todo.loading);
  const error = useSelector(state => state.todo.error);
  const uid = useSelector(state => state.auth.id);
  const dispatch = useDispatch();
  const submitTodo = newTodo => dispatch(todoSubmit(newTodo));
  const history = useHistory();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schemaNewTodo) });

  const submitTodoHandler = data => {
    const newTodo = { title: data.title, text: data.text, uid };
    submitTodo(newTodo);
    reset({ title: '', text: '', check: data.check });

    if (data.check) {
      history.push('/todo-list');
    }
  };

  return (
    <div className="new-todo-page">
      <form className="container" onSubmit={handleSubmit(submitTodoHandler)}>
        <Input
          label="Title"
          errors={!!errors.title}
          errorsMessage={errors?.title?.message}
          {...register('title')}
        />
        <Textarea
          label="Text"
          errors={!!errors.text}
          errorsMessage={errors?.text?.message}
          {...register('text')}
        />
        <Checkbox title="Go to Todo List" {...register('check')} />
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
