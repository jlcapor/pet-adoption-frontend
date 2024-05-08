'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react'
import ErrorMessage from "@/components/ErrorMessage";
import type { UserLoginForm } from "@/schema";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function LoginForm() {
  const router= useRouter()
  const initialValues: UserLoginForm = {
    email: '',
    password: '',
  }
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })
  
  const handleLogin = async (formData: UserLoginForm) => { 
    setIsLoading(true)
    const callback = await signIn('credentials', {
      ...formData,
      redirect: false
    });
    setIsLoading(false);
    if (callback?.ok) {
      router.push('/');
      router.refresh();
    }
    if (callback?.error) {
      toast.error(callback.error);
    }
    
  }
  return (
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 p-9" noValidate>
        <div className="flex flex-col gap-5">
          <label htmlFor="email" className="ont-normal text-xl">
            Email 
          </label>
          <input  
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full p-3  border-gray-300 border"
            {...register("email", {
              required: "El Email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
          {errors.email && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}  
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="password" className="ont-normal text-xl">
            Password 
          </label>
          <input  
            type="password"
            placeholder="Password de Registro"
            className="w-full p-3  border-gray-300 border"
            {...register("password", {
              required: "El Password es obligatorio",
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )} 
        </div>

    
        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading && (
            <Icons.spinner
              className="mr-2 size-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Iniciar Sesión
          <span className="sr-only">Iniciar Sesión</span>
        </Button>
        <div className="mt-10 flex flex-col space-y-4">
          <Link href="/register" className="font-normal">
           ¿No tienes una cuenta? Regístrate
          </Link>
        </div>
      </form>
 
  )
}
