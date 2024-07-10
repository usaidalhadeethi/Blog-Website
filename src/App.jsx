import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar && Footer/Navbar'
import Footer from './components//Navbar && Footer/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Blogs from './pages/Blogs'

const theme = createTheme({
  palette: {
    primary: {
      main: '#050C9C',
    },
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Blogs/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App
