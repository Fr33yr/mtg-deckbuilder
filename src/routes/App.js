import { Fragment, useState } from "react";

import '../assets/css/main.css'
import { Layout } from '../components/Layout'
import { CardsView } from '../components/CardsView'
import { Deck } from '../components/Deck'
import CardsContext from '../context/CardsContext'
import { AuthProvider } from '../context/AuthContext'

function App() {
  const [value, setValue] = useState([])

  return (
    <Fragment>
      <CardsContext.Provider value={{ value, setValue }}>
        <AuthProvider>
          <Layout>
            <div className="main">
              <CardsView />
              <Deck />
            </div>
          </Layout>
        </AuthProvider>
      </CardsContext.Provider>
    </Fragment>
  );
}

export default App;
