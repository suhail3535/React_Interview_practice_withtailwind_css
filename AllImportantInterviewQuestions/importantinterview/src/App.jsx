
import React from 'react'
import CaroselMain from './pages/CaroselSlider/CarouselMain'
import MainCard from './pages/LazyLoading/MainCard'
import UseMemo from './pages/Usememo/UseMemo'
let arr=[1,2,3]
let arr1 = [11, 12, 13]

const App = () => {
  return (
    <div>
      {/* <CaroselMain /> */}
      {/* <MainCard /> */}
      <UseMemo data={arr1 } />
    </div>
  )
}

export default App
