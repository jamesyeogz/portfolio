import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import StartTransition from './StartTransition'
const TypingAnimation = (props:any) => {
  return (
    <TypeAnimation sequence={["Design,",2000,"","Develop,",2000,"","Deploy",2000,""]} repeat={Infinity} style={{fontFamily:'Playfair Display'}}/>
  )
}

export default TypingAnimation