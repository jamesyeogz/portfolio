import React, { useEffect, useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import styled from "styled-components";

export function getTextWidth(text: string, font: string) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  context.font = font;
  return context.measureText(text).width;
}


const Box = styled.div<any>`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height:${props => props.height};
`;

const StartTransition = (props:any) => {

  // const font = props.font ? props.font : "Sans-serif";
  // const width = getTextWidth(props.title, font) + 150;
  return (
    <div
      // style={{
      //   width: `${width}px`,
      //   fontFamily: `${props.font}`
      // }}
    >
      <Box height = {props.height}>
        <motion.span
          initial={{
          width: '0%',
          left: '0%'
        }}
          style={{
            width: "100%",
            height: "inherit",
            background: props.color ? props.color:'white',
            position: "absolute",
            zIndex: 1,
          }}
          whileInView={{
            width: ["0%", "100%", "0%"],
            left: ["0%", "0%", "100%"],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.8 }}
        ></motion.span>
        <motion.h1
          initial={{
            opacity:0
                  }}
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.1,
            delay: 0.6,
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          {props.children}
        </motion.h1>
      </Box>
    </div>
  );
};

export default StartTransition;
