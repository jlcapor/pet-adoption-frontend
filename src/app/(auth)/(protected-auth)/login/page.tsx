import UserLoginForm from '@/components/auth/LoginForm';
import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const user =  await getSession()
  if (user) {
    redirect("/")
  }
  return (
    <div className="flex pt-8 items-center justify-center p-3">
      <div className="z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 px-4 py-6 pt-8 text-center sm:px-16">
          <h1 className="text-3xl font-semibold">Iniciar sesión</h1>
        </div>
        <UserLoginForm/>
      </div>
    </div>
  )
}
