import React, { useEffect, useState } from "react";
import dividerDesktop from './images/pattern-divider-desktop.svg'
import dividerMobile from './images/pattern-divider-mobile.svg'
import dice from './images/icon-dice.svg'
import axios from "axios"

export const AdviceCard = () => {
    const [advice, setAdvice] = useState("")

    const getAdvice = async() => {
        const response = await axios.get("https://api.adviceslip.com/advice")
        const advice = await response.data.slip;
        setAdvice(advice)
        console.log(response)
    }

    useEffect(() =>{
        getAdvice()
    }, [])

    return (
        <div className="bg-DarkBlue h-dvh w-dvw flex justify-center items-center p-4">
            <div className='flex mx-auto flex-col items-center content-center bg-DarkGrayishBlue rounded-lg py-5 relative '>
                <p className='m-4 text-NeonGreen text-center tracking-[3.5px] font-bold text-[12px]'>ADVICE #{advice.id}</p>
                <h2 className='mb-10 mx-8 text-lg text-LightCyan font-bold text-[28px]'>"{advice.advice}"</h2>
                <img src={dividerDesktop} className="mb-10 mx-4 hidden md:block" alt="divider" />
                <img src={dividerMobile} className="mb-10 mx-4 block md:hidden" alt="divider" />
                <div className='justify-center flex flex-col items-center bg-NeonGreen p-4 rounded-full cursor-pointer absolute bottom-[-2rem] hover:shadow-[0_0_40px_0_rgba(82,255,169,1)] ease-in duration-200' onClick={getAdvice}>
                    <img src={dice} alt="dice" />
                </div>
            </div>
        </div>
    )
  }
   