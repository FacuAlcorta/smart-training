import React, { useState, useEffect } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'


const ButtonTop = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{

            if(window.scrollY > 300){
                setShowBtn(true)
            }else{
                setShowBtn(false)
            }
        })
    }, [])

  return (
    <>
       { showBtn && <BsFillArrowUpCircleFill smooth onClick={()=> window.scrollTo({top: 0, behavior: 'smooth'})} 
      className='bottom-8 right-8 text-7xl fixed bg-amber-500 rounded-full border-4 border-amber-500 z-20
      cursor-pointer
      ' />
        }
    </>
  )
}

export default ButtonTop