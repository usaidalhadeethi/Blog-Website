import { useState } from 'react'
import Navbar from './components/Navbar && Footer/Navbar'
import Footer from './components//Navbar && Footer/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BlogsParent from './components/BlogsParent'
import { SearchContext } from './assets/contexts/SearchContext';


const theme = createTheme({
  palette: {
    primary: {
      main: '#050C9C',
    },
  },
});

function App() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <SearchContext.Provider value={{searchInput, setSearchInput}}>
        <ThemeProvider theme={theme}>
          <Navbar/>
          <BlogsParent/>
          <Footer/>
        </ThemeProvider>
        </SearchContext.Provider>
    </>
  )
}

export default App
