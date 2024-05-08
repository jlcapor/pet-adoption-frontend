'use client'
import { useForm } from "react-hook-form";
import Link from "next/link";
import ErrorMessage from "@/components/ErrorMessage";
import { toast } from "react-toastify";
import type { UserRegistrationForm } from "@/schema";
import { api } from "@/trpc/react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";



export default function RegisterForm() {
  const initialValues: UserRegistrationForm = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: 'USER' 
  }

  const createUser = api.user.create.useMutation({
    onSuccess: () => {
      reset()
      toast.success("Usuario creada con éxito!")
    },
    onError: (error) => {
      toast.error(error.message)
    }
  });

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<UserRegistrationForm>({ defaultValues: initialValues });
  const password = watch('password');


  const handleRegister = (formData: UserRegistrationForm) => {
    
    createUser.mutate({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role
    })
  }

  return (
    <form onSubmit={handleSubmit(handleRegister)} className="space-y-6 p-9" noValidate>
      
      <div className="flex flex-col gap-5">
        <label
          className="font-normal text-xl"
          htmlFor="name"
        >
          Nombre
        </label>
        <input
            id="name"
            type="text"
            placeholder="Nombre de Registro"
            className="w-full p-3  border-gray-300 border rounded"
            {...register("name", {
              required: "El Nombre de usuario es obligatorio",
          })}
        />
          {errors.name && (
            <ErrorMessage>{errors.name.message}</ErrorMessage>
          )}
      </div>

      <div className="flex flex-col gap-5">
        <label
          className="font-normal text-xl"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email de Registro"
          className="w-full p-3  border-gray-300 border rounded"
          {...register("email", {
            required: "El Email de registro es obligatorio",
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
        <label
          className="font-normal text-xl"
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password de Registro"
          className="w-full p-3  border-gray-300 border rounded"
          {...register("password", {
            required: "El Password es obligatorio",
            minLength: {
              value: 8,
              message: 'El Password debe ser mínimo de 8 caracteres'
            }
          })}
        />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
      </div>
      <div className="flex flex-col gap-5">
        <label
          className="font-normal text-xl"
          htmlFor="password_confirmation"
        >
          Repetir Password
        </label>
        <input
          id="password_confirmation"
          type="password"
          placeholder="Repite Password de Registro"
          className="w-full p-3 border-gray-300 border rounded"
            {...register("password_confirmation", {
              required: "Repetir Password es obligatorio",
              validate: value => value === password || 'Los Passwords no son iguales'
            })}
          />
          {errors.password_confirmation && (
            <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
          )}
      </div>
      <Button
          className=" w-full p-3"
          disabled={createUser.isPending}
        >
          {createUser.isPending && (
            <Icons.spinner
              className="mr-2 size-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Registrarme
        </Button>
      <div className="mt-10 flex flex-col space-y-4">
        <Link href="/login" className="font-normal ">
          ¿Ya tiene una cuenta? Iniciar sesión
        </Link>
      </div>
    </form>
  )
}
