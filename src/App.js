import Navbar from './components/Navbar'
import Home from './pages/Home'

import { AnimatePresence } from 'framer-motion'

import { BrowserRouter as Router, Route } from 'react-router-dom'
// styles
import './scss/index.scss'

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Navbar />
        <Route path='/' exact component={Home}></Route>
      </Router>
    </AnimatePresence>
  )
}

export default App
