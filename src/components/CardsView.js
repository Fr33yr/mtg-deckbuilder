import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';

import '../assets/css/main.css'
import CardsContext from '../context/CardsContext'
import { Card } from './Card'
import { chunkArray } from '../utils/Chunker'
import { useWindowDimensions } from '../hooks/useWindowDimensions'


export function CardsView(props) {
  let { toggle, setToggle } = props
  const { searchResults, setSearchResults } = useContext(CardsContext)
  const filterCardsImg = searchResults.filter(card => card.imageUrl)
  let filteredCardsName = filterCardsImg.filter((value, index, self) => (
    index === self.findIndex((t) => (
      t.name === value.name
    ))
  ))
  const { height, width } = useWindowDimensions()
  const [chunkSize, setChunkSize] = useState(8)


  useEffect(() => {
    if (width <= 480) {
      setChunkSize(1)
    }
    else if (width <= 580) {
      setChunkSize(4)
    }
    else if (width <= 800) {
      setChunkSize(6)
    }
    else {
      setChunkSize(8)
    }
  }, [width])

  let cards = chunkArray(filteredCardsName, chunkSize)

  const handleToggle = () => {
    setToggle(true)
  }

  return (
    <Fragment>
      <div className='cardsviewer'>
        <button className="toggle-btn__cardsview" onClick={handleToggle}>
          Deck
        </button>
        <div className="swiper-container" style={toggle ? { display: "none" } : { display: "" }}>
          <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            
          >
            <div className="cards-slide">
              {
                cards.map((item, index) => (
                  <SwiperSlide key={index}>
                    {item.map((c) => (<Card {...c} key={c.id}></Card>))}
                  </SwiperSlide>
                ))
              }
            </div>
          </Swiper>
        </div>
      </div>
    </Fragment>
  )
}
