import { Fragment, useReducer } from "react";

import '../assets/css/main.css'
import { Layout } from '../components/Layout'
import { CardsView } from '../components/CardsView'
import { Deck } from '../components/Deck'
import { reducerCards } from '../store/reduceCards'
import { initialState } from "../store/initialState";
import CardsContext from '../store/CardsContext'

function App() {
  const [state, dispatch] = useReducer(
    reducerCards,
    initialState,
  )

  return (
    <Fragment>
      <CardsContext.Provider value={[state, dispatch]}>
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
