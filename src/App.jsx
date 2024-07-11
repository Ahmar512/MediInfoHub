import { useState } from 'react'
import Hero from './Sections/Hero'
import Nav from './Components/Nav'
import Search from './Sections/Search'
import Footer from './Sections/Footer'
import Features from './Sections/Features'
function App() {

  return (
    <main>
      <Nav />
      <section data-aos="fade-in" className='w-full px-10 py-10 max-sm:px-2 pb-5'>
        <Hero />
      </section>
      <section>
        <Features />
      </section>
      <section className=''>
        <Search />
      </section>
      <section className='bg-black p-5'>
        <Footer />
      </section>
    </main>
  )
}

export default App
