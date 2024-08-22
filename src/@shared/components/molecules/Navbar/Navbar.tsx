import { type FC } from 'react'
import Image from 'next/image'

export const Navbar: FC = (props) => {
  return (
    <section className={'w-full min-h-20 bg-white flex items-center'}>
      <div className={'container flex items-center justify-between'}>
        <div>
          <Image
            src={'/adaptive-logo.svg'}
            alt={'Adaptive Insurance'}
            width={170}
            height={32}
          />
        </div>
        <nav className={'flex items-center'}>
          Speak to a licensed agent:&nbsp;{' '}
          <span className={'font-medium text-lg'}>1-800-000-0000</span>
        </nav>
      </div>
    </section>
  )
}
