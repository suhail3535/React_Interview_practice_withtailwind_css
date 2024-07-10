
import React from 'react'
import CaroselMain from './pages/CaroselSlider/CarouselMain'
import MainCard from './pages/LazyLoading/MainCard'
import UseMemo from './pages/Usememo/UseMemo'
import Lazy from './pages/lazy/Lazy'
let arr=[1,2,3]
let arr1 = [11, 12, 13]

const App = () => {
  return (
    <div>
      {/* <CaroselMain /> */}
      {/* <MainCard /> */}
      {/* <UseMemo data={arr1 } /> */}
      <Lazy/>

    </div>
  )
}

export default App
