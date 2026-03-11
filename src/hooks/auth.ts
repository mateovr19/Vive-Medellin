'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Login } from '../services/auth';
import { UserLogin, ResponseLogin } from '../interfaces/user';
import { AxiosError } from 'axios';

export function useAuth() {
  const router = useRouter();

  const [token, setToken] = useState<string | null>(null);
  const [rol, setRol] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (form: UserLogin): Promise<ResponseLogin | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await Login(form);
      localStorage.setItem('token', response.access_token);
      localStorage.setItem('rol', response.rol);
      localStorage.setItem('name', response.name);
      setToken(response.access_token);
      setRol(response.rol);
      setName(response.name);

      if (response.rol === 'admin') router.push('/');
      else if (response.rol === 'user') router.push('/');

      return response;
    } catch (err) {
        const error = err as AxiosError<{ message: string }>;
        throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
    localStorage.removeItem('rol');
    localStorage.removeItem('name');
    setToken(null);
    setRol(null);
    setName(null);
    window.location.href = '/';
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setRol(localStorage.getItem('rol'));
    setName(localStorage.getItem('name'));
  }, []);

  return { token, rol, login, logout, loading, error, name }
}
