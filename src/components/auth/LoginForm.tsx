'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../services/api';
import styles from './LoginForm.module.scss';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';

interface LoginFormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const LoginForm = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });
  const { login, isAuthenticated} = useAuth();
  console.log(isAuthenticated)

  const onSubmit = async (data: LoginFormData) => {
    if (data.email === 'test@com' && data.password === 'test1111') {
      router.push('/users');
      login();

    } else {
      console.log('Invalid credentials');
      alert('Invalid credentials')
    }

    try {
      const response = await api.post('/login', data);
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className={styles['form-container']}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['login-form']}>
        <input {...register('email')} placeholder="Email" className={styles['form-input']} />
        <p className={styles['error-message']}>{errors.email?.message}</p>
        <input {...register('password')} type="password" placeholder="Password" className={styles['form-input']} />
        <p className={styles['error-message']}>{errors.password?.message}</p>
        <button type="submit" className={styles['form-button']}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
