import { Fragment } from "react";

import '../assets/css/main.css'
import { Layout } from '../components/Layout'
import { CardsView } from '../components/CardsView'
import { Deck } from '../components/Deck'


function App() {
  return (
    <Fragment>
      <Layout>
        <div className="main">
          <CardsView />
          <Deck />
        </div>
      </Layout>
    </Fragment>
  );
}

export default App;
