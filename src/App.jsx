import './index.css'
import Header from './components/Header'
import Main from './components/Main'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/main' element={<Main/>}/>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
