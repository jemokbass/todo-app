import React, { memo, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router';
import { schemaNewTodoEn, schemaNewTodoRu } from '@src/shared/schema';

import Input from '@src/components/UI/Input/Input';
import Textarea from '@src/components/UI/Textarea/Textarea';
import Button from '@src/components/UI/Button/Button';
import Loader from '@src/components/Loader/Loader';
import { todoSubmit } from '@src/store/actions/todoActions';
import Checkbox from '@src/components/UI/Checkbox/Checkbox';
import { LanguageContext } from '@src/shared/context';

const NewTodoPage = () => {
  const loading = useSelector(state => state.todo.submitLoading);
  const error = useSelector(state => state.todo.submitError);
  const uid = useSelector(state => state.auth.id);
  const dispatch = useDispatch();
  const submitTodo = newTodo => dispatch(todoSubmit(newTodo));
  const history = useHistory();
  const language = useSelector(state => state.options.language);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(language === 'en' ? schemaNewTodoEn : schemaNewTodoRu),
  });
  const resources = useContext(LanguageContext);

  const submitTodoHandler = data => {
    const newTodo = { title: data.title, text: data.text, favorite: data.favorite, uid };
    submitTodo(newTodo);
    reset({ title: '', text: '', check: data.check });

    if (data.check) {
      history.push('/todo-list');
    }
  };

  useEffect(() => {}, [language]);

  return (
    <section className="new-todo-page">
      <form className="container" onSubmit={handleSubmit(submitTodoHandler)}>
        <Input
          label={resources.new_todo_title}
          errors={!!errors.title}
          errorsMessage={errors?.title?.message}
          {...register('title')}
        />
        <Textarea
          label={resources.new_todo_text}
          errors={!!errors.text}
          errorsMessage={errors?.text?.message}
          {...register('text')}
        />
        <Checkbox title={resources.new_todo_fav} {...register('favorite')} />
        <Checkbox title={resources.new_todo_go} {...register('check')} />
        {loading && <Loader />}
        <Button className="new-todo-page__button" type="submit">
          {resources.new_todo_button}
        </Button>
        {error && <p>{error.message}</p>}
      </form>
    </section>
  );
};

export default memo(NewTodoPage);
