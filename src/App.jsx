import { ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Router from './Router'

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
