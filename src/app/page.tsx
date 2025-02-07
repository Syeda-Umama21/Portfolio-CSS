import Header from '@/components/header'
import About from '@/components/about'
import Services from '@/components/Services'
import Project from '@/components/project'
import Contact from '@/components/contact'


const page = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default page
