import React from 'react'
// function Line({ start, end }) {
//     console.log(start,end)
//     const ref = useRef()
//     useLayoutEffect(() => {
//       ref.current.geometry.setFromPoints([start, end].map((point) => new THREE.Vector3(...point)))
//     }, [start, end])
//     return (
//       <line ref={ref}>
//         <bufferGeometry />
//         <lineBasicMaterial color="green" linewidth={10}/>
//       </line>
//     )
//   }

  // const ManyBoxes = ({ count }) => {
  //   var array_num = [[0,0,0]];
  //   var box_position = []
  //   for(var i = 0;i< count; i++){
  //     let number =Math.floor((Math.random() * 6) + 1)
  //     if(array_num){
  //       box_position = array_num[i]
  //       if(array_num[0] > 3 || array_num[1] > -6 || array_num[2] > 6 ){
  //         number = Math.floor((Math.random() * 6) + 3)
  //       }
  //       if(array_num[0] < 3 || array_num[1] < -6 || array_num[2] < 3 ){
  //         number = Math.floor((Math.random() * 3) + 1)
  //       }
  //       if(number%6 == 0){
  //         array_num.push([array_num[i][0]+3,array_num[i][1],array_num[i][2]])
  //       }
  //       else if(number%6 == 1 ){
  //         array_num.push([array_num[i][0],array_num[i][1]+3,array_num[i][2]])
  //       }
  //       else if(number%6 == 2 ){
  //         array_num.push([array_num[i][0],array_num[i][1],array_num[i][2]+3])
  //       }
  //       else if(number%6 == 3){
  //         array_num.push([array_num[i][0]-3,array_num[i][1],array_num[i][2]])
  //       }
  //       else if(number%6 == 4 ){
  //         array_num.push([array_num[i][0],array_num[i][1]-3,array_num[i][2]])
  //       }
  //       else if(number%6 == 5 ){
  //         array_num.push([array_num[i][0],array_num[i][1],array_num[i][2]-3])
  //       }
  //     }
      
  //   }
  
  //   return (
  //     <>
  //       {array_num.map((box,index) => 
  //       (
  //         <>
  //           <mesh>
              
  //             {index != 0 ? <Line start={box} end={array_num[index-1] }/> : null}
  //             <Box position={box} key={index}/>
  //           </mesh>
            
  //         </>
  //       ))}
  //     </>
  //   );
  // };
  
  // const Box = (props) => {
  //   const mesh = useRef(null);
  //   // useFrame(() => (mesh.current!.rotation.x= mesh.current!.rotation.y += 0.01))
  //   return (
  //     <mesh ref={mesh} {...props}>
  //       <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
  //       <meshStandardMaterial attach="material" color="#606060"  emissive={[0.05, 0.05, 0.05]} />
  //     </mesh>
  //   );
  // };
const Boxprops = () => {
  return (
    <div>Boxprops</div>
  )
}

export default Boxprops