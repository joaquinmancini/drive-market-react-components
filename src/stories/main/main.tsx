import { ReactNode } from 'react'

export interface MainProps {
  className?: string
  children: ReactNode
}

// max-width: 1280px;
// margin: 0 auto;
// padding: 2rem;
// text-align: center;

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className=' flex flex-col flex-1  max-w-5xl  mt-20 mx-auto p-8 text-center sm:flex-row '>
      {children}
    </main>
  )
}
