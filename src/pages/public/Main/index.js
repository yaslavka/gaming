import React from "react";
import NukeWorld from '../../../assets/gamepic/fennec_stand.png'
import starguardians from '../../../assets/gamepic/StarGuardians_Commando1.png'
import starguardian from '../../../assets/gamepic/character_mouse_with_map.png'
import SimpleBar from 'simplebar-react'
const material = [
  {
    label: 'Nuke World',
    text: '',
    text1: 'В нашей самой взрывной эпопее мы представляем вам Nuke World, постапокалиптическую историю, которая обязательно заставит биться чаще!',
    img: NukeWorld
  },
  {
    label: 'Star Guardians',
    text: '',
    text1: 'Star Guardians — Они откликнулись на призыв к бою. Вы готовы присоединиться к ним?',
    img: starguardians
  },
  {
    label: 'tree-of-light',
    text: '',
    text1: 'Tree of Light - По пути Люпин и Мино ищут волшебный свиток с древними узорами. Узор дает им дополнительную силу!',
    img: starguardian
  },
]

function Main(){
  return(
    <>
      <div className="lg:mb-32 md:mb-20 mb-15">
        <div className="container">
          <div className="text-center lg:mb-15 md:mb-12 mb-8">
            <h2 className="text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
              <font style={{verticalAlign: 'inherit'}}>
                <font style={{verticalAlign: 'inherit'}}>
                  Добро пожаловать в игровой мир.
                </font>
              </font>
            </h2>
          </div>
        </div>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            material.map(({label,img,text, text1})=>(
              <div className="mapings text-white text-center align-cener bg-no-repeat bg-scroll bg-center bg-cover md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 h-460" key={label}>
                <div className="mb-12 text-center align-center">
                  <img src={img} className="h-37 w-36" alt={img} style={{width: '70%', height: '70%', marginTop: '-30%', marginRight: '50%'}}/>
                </div>

                  <div className="block">
                    <h3 className="text-white font-exo text-xl md:text-2xl font-bold uppercase mb-4">
                        <div style={{verticalAlign: 'inherit'}}>
                          <div style={{verticalAlign: 'inherit'}}>
                            {label}
                          </div>
                        </div>
                      </h3>
                      <p><SimpleBar style={{ height: '50%', width: '100%' }}><div style={{height: 150}}>{text1}</div></SimpleBar></p>
                  </div>

              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
export default Main
