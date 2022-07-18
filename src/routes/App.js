import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../assets/css/main.css'
import { Layout } from '../components/Layout'
import {Deckbuilder} from '../pages/Deckbuilder'
import {Home} from '../pages/Home'
import CardsContext from '../context/CardsContext'
import { AuthProvider } from '../context/AuthContext'

function App() {
  const [value, setValue] = useState([])

  return (
    <Fragment>
      <BrowserRouter>
        <CardsContext.Provider value={{ value, setValue }}>
          <AuthProvider>
            <Layout>
              <div className="main">
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/deckbuilder" element={<Deckbuilder />}></Route>
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
