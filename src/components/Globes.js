import './Globes.css'
import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls, useTexture} from '@react-three/drei'
import star from '../assets/star.mp4'

function Scene() {
  const colorMap = useLoader(TextureLoader, 'earth-blue-marble.jpg')
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        <sphereBufferGeometry args={[2, 100, 100]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  )
}

export default function Globe() {
  return (
    <div className="earth">
      <video autoPlay loop muted>
        <source src={star} type='video/mp4' />
        </video>
    <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls autoRotate autoRotateSpeed={0.7} />
        </Suspense>
      </Canvas>
      </div>
      
      
  )
}




