import React from 'react'
import { Footer } from './stories/footer/footer'
import { Header } from './stories/header/Header'
import { Main } from './stories/main/main'

const HomePagePlayground: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col w-full'>
      <>
        <Header></Header>
        <Main>Nuestro supuesto contenido Drive Market</Main>
        <Footer></Footer>
      </>
    </div>
  )
}

export default HomePagePlayground
