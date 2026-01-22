import React from 'react'
import {HeroBanner,IntroHero,ActionButtons} from './index'

const Home = () => {
  return (
   <>
    <div className="px-10 bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden">
        <HeroBanner />
    </div>
    <IntroHero/>
    <ActionButtons/>
    </>
  )
}

export default Home