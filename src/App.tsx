import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import Home from './Views/Home'
import CharacterForm from './Views/CharacterForm/CharacterForm';
import mwTheme from './chakra.config';

const App = () => {

  return (
    <BrowserRouter>
      <ChakraProvider theme={mwTheme}>
          <Routes>
            <Route
              path='/'
              element={
                  <Home />
              }
            />
            <Route
              path='/create-character'
              element={
                  <CharacterForm />
              }
            />
          </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
