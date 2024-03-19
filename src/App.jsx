import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Landing from './pages/Landing'
import WatchHistory from './pages/WatchHistory'

function App() {

  return (
    /* install react-router-dom */
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={<WatchHistory/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
