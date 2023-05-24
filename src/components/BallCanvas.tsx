/* eslint-disable react/no-unknown-property */
'use client'

import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { StaticImageData } from 'next/image'
import { Suspense } from 'react'

import { CanvasLoader } from './CanvasLoader'

interface BallProps {
  imgUrl: string
}

interface BallCanvasProps {
  icon: StaticImageData
}

function Ball({ imgUrl }: BallProps) {
  const [decal] = useTexture([imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

export function BallCanvas({ icon }: BallCanvasProps) {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon.src} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
