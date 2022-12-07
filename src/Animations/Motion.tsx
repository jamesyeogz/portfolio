import { Icon } from '@iconify/react'
import React from 'react'
import { motion } from 'framer-motion'
import { MotionBox } from '../styles/General'
export const TransitioningMotion = (props:any) =>{
    return(
    <MotionBox
    initial={{opacity:0}}
    whileInView={{opacity:[0,1]}}
    transition={{
        duration: 0.5,
        ease: 'anticipate'
    }}
    viewport={{once: false, amount:0.2 }}
    >
        {props.children}
    </MotionBox>)
}

export const MovingToptoBottom =(props:any) =>{
        return(
        <MotionBox
        initial={{y:-100, opacity:0}}
        whileInView={{y:[-100,0],opacity:[0,1]}}
        transition={{
            duration: 0.8,
            ease: 'anticipate'
        }}
        viewport={{once: false, amount:0.8 }}
        >
            {props.children}
        </MotionBox>)
    }

export const MovingCircles = (props:any) =>{
    const container = {
        initial: {},
        show: {
          transition: {
            staggerChildren: 0.3,
          }
        },

      }
      
      const item = {
        initial: { y:0},
        show: { y:[0,-20,0,0,0,0,0,0,0,0,0,0,0] , transition:{
            duration:3, ease:'linear',repeat: Infinity,type:'spring',bounce: 0.25
        }}
      }
    return(
        <MotionBox
        initial={{ opacity:0}}
        whileInView={{opacity:[0,1]}}
        transition={{
            duration: 1,
            ease: 'easeIn'
        }}
        viewport={{once: false, amount:0.8 }}>
            <motion.div style={{display:'flex',flexDirection:'row'}}    variants={container}
    initial="intial"
    animate="show">
                <motion.div variants={item} style={{margin:'10px'}}>
                <Icon icon="akar-icons:circle-fill" />
                </motion.div>
                <motion.div variants={item} style={{margin:'10px'}}>
                <Icon icon="akar-icons:circle-fill" />
                </motion.div>
                <motion.div variants={item} style={{margin:'10px'}}>
                <Icon icon="akar-icons:circle-fill" />
                </motion.div>
            {/* <motion.div animate={{y:[0,-25,-40,-50,-40,-25,0,10,0]}} transition={{duration:1,ease:'linear',delay:1}}>
            <Icon icon="akar-icons:circle-fill" />
            </motion.div> */}
            </motion.div>
       
        </MotionBox>
    )
}