// components/auth/LoginForm.tsx
'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/@shared/components/ui/button'
import { Input } from '@/@shared/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/@shared/components/ui/card'
import { Label } from '@/@shared/components/ui/label'

export default function LoginForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const result = await signIn('auth0', {
      email,
      password,
      redirect: false
    })

    if (result?.error) {
      setError(result.error)
    } else {
      router.push('/register') // Redirect to dashboard on successful login
    }
  }

  return (
    <div className={'w-full min-h-screen bg-background flex items-center justify-center'}>
      <div className={'w-[600px]'}>
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    required
                  />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
              <Button type="submit" className="w-full mt-6">
                Log in
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-center w-full">
              Don't have an account?{' '}
              <a href="/register" className="text-blue-600 hover:underline">
                Register here
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
