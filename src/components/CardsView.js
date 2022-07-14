import React, { Fragment, useContext } from 'react'
import {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';

import '../assets/css/main.css'
import CardsContext from '../store/CardsContext'
import { Card } from './Card'
import { chunkArray } from '../utils/Chunker'

export function CardsView() {
  const [state] = useContext(CardsContext)
  const { cardsData } = state
  const filterCardsImg = cardsData.filter(card => card.imageUrl)

  let cards = chunkArray(filterCardsImg, 8)
  console.log(cards)
  return (
    <Fragment>
      <div className='cardsviewer'>
        <Swiper
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{clickable:true}}>
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
    </Fragment>
  )
}
