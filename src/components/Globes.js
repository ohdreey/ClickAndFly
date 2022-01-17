// import Globe from 'react-globe.gl';
// import { useState, useEffect } from "react"; 





// const World = () => {
//   const [places, setPlaces] = useState([]);


//   useEffect(() => {
//     // load data
//     fetch('./datasets/carte_projet2.geojson').then(res => res.json())
//       .then(({ features }) => setPlaces(features));
//   }, []);


//     return <Globe
//       globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//       backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

//       labelsData={places}
//       labelLat={d => console.log(d)||d.properties.latitude}
//       labelLng={d => d.properties.longitude}
//       labelText={d => d.properties.name}
//       labelSize={d => Math.sqrt(d.properties.pop_max) * 4e-4}
//       labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
//       labelColor={() => 'rgba(255, 165, 0, 0.75)'}
//       labelResolution={2}
//     />;
//   }
// export default World

// import './Globes.css'
// import { Suspense } from 'react'
// import { Canvas, useLoader } from '@react-three/fiber'
// import { TextureLoader } from 'three/src/loaders/TextureLoader'
// import { OrbitControls, useTexture} from '@react-three/drei'
// import { FaMapMarkerAlt } from 'react-icons/fa'
// import { useGLTF, Html } from '@react-three/drei'
// import { useState } from 'react'


// function Marker({ children, ...props }) {
//   // This holds the visible state
//   const [hidden, set] = useState()
//   return (
//     <Html
//       transform
//       occlude
      
//       onOcclude={set}
      
//       style={{ transition: 'all 0.2s', opacity: hidden ? 0 : 1, transform: `scale(${hidden ? 0.25 : 1})` }}
//       {...props}>
//       {children}
//     </Html>
//   )
// }

// function Scene() {
//   const colorMap = useLoader(TextureLoader, 'earth-blue-marble.jpg')
//   return (
//     <>
//       <ambientLight intensity={0.2} />
//       <directionalLight />
//       <mesh>
//         <sphereBufferGeometry args={[2, 100, 100]} />
//         <meshStandardMaterial map={colorMap} />
//       </mesh>
//     </>
//   )
// }

// export default function Globe() {
//   return (
//     <div className="earth">
//     <Canvas>
//         <Suspense fallback={null}>
//           <Scene />
//           <OrbitControls autoRotate autoRotateSpeed={1} />
//         </Suspense>
//       </Canvas>
//       </div>
//   )
// }


