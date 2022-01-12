import './Globes.css'
import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls, useTexture} from '@react-three/drei'

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
    <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
      </div>
  )
}


