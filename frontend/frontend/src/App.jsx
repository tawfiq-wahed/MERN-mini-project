import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import CreatePost from './pages/post'
import './App.css'
import Feed from './pages/feed'
const App = () => {
  return (
    <Router>
  <Routes>
    <Route path='/create-post' element={<CreatePost />} />

    <Route path='/feed' element={<Feed/>} />
  </Routes>
    </Router>
  )
}

export default App;


