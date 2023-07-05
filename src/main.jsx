import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Main from './components/Main'
import FilteredCards from './components/FilteredCards'
import Footer from './components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <FilteredCards/>
    <Footer/>
  </React.StrictMode>,
)
