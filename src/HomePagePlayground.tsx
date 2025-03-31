import React from 'react'
import { Footer } from './stories/footer/footer'
import { Header } from './stories/header/Header'
import { Main } from './stories/main/main'
import { Button } from './stories/button/Button'

const HomePagePlayground: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col w-full'>
      <>
        <Header></Header>
        <Main>
          <div>
            <Button
              label={'Drive Market'}
              color='primary'
            />
          </div>
          <div>
            Nuestro supuesto contenido Drive Market
            <br />
          </div>
          <div>
            Nuestro supuesto contenido Drive Market
            <br />
          </div>
          <div>
            Nuestro supuesto contenido Drive Market
            <br />
          </div>
          <div>
            Nuestro supuesto contenido Drive Market
            <br />
          </div>
          <div>
            Nuestro supuesto contenido Drive Market
            <br />
          </div>
        </Main>
        <Footer></Footer>
      </>
    </div>
  )
}

export default HomePagePlayground
