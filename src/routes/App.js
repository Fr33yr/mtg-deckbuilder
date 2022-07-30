import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../assets/css/main.css'
import { Layout } from '../components/Layout'
import {Deckbuilder} from '../pages/Deckbuilder'
import {Home} from '../pages/Home'
import {Login} from "../pages/Login"
import {SignIn} from '../pages/SignIn'
import CardsContext from '../context/CardsContext'
import { AuthProvider } from '../context/AuthContext'


function App() {
  const [searchResults, setSearchResults] = useState([])

  return (
    <Fragment>
      <BrowserRouter>
        <CardsContext.Provider value={{ searchResults, setSearchResults }}>
          <AuthProvider>
            <Layout setSearchResults={setSearchResults}>
              <div className="main">
                <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/deckbuilder" element={<Deckbuilder setSearchResults={setSearchResults}/>}></Route>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/signin" element={<SignIn/>}></Route>
                </Routes>
              </div>
            </Layout>
          </AuthProvider>
        </CardsContext.Provider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
