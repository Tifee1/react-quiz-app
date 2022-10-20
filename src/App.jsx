import useApp from './components/context'
import Footer from './components/Footer'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Question from './components/Question'

const App = () => {
  const { loading, home } = useApp()

  if (loading) {
    return <div className='loading'></div>
  }

  return (
    <>
      <Navbar />
      <div className='section'>
        <section className='min-h-[calc(100vh-172px)]'>
          {home ? <Form /> : <Question />}
        </section>
      </div>
      <Footer />
    </>
  )
}
export default App
