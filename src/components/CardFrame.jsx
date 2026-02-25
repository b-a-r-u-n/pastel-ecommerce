import React, { useEffect } from 'react'
import Card from './Card'
import {useSelector} from 'react-redux'

const CardFrame = () => {

  const products = useSelector(state => state.home.products);

  return (
    <div
        className=' flex flex-wrap md:justify-evenly gap-y-8 py-10'
    >
      {
        products?.map((product) => (
          <Card key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default CardFrame
