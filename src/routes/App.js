import { Fragment, useState } from "react";

import '../assets/css/main.css'
import { Layout } from '../components/Layout'
import { CardsView } from '../components/CardsView'
import { Deck } from '../components/Deck'
import CardsContext from '../store/CardsContext'

function App() {
  const [value, setValue] = useState([])

  return (
    <Fragment>
      <CardsContext.Provider value={{value, setValue}}>
        <Layout>
          <div className="main">
            <CardsView />
            <Deck />
          </div>
        </Layout>
      </CardsContext.Provider>
    </Fragment>
  );
}

export default App;
