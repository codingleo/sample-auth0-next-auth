import { useSession } from 'next-auth/react'

const RegisterPager = () => {
  const { data: session } = useSession()

  console.log(session)

  return (
    <div>
      {session?.user?.name ? session?.user?.name : 'loading...'}
    </div>
  )
}

export default RegisterPager
