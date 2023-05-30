/* eslint-disable react/no-unknown-property */
'use client'

import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import { CanvasLoader } from './CanvasLoader'

function Earth() {
  const earth = useGLTF('./earth/scene.gltf')

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 1, 0.5]} />
      <primitive
        object={earth.scene}
        scale={1}
        position-y={-1.3}
        rotation-y={0}
        rotation-x={0}
      />
    </>
  )
}

export function EarthCanvas() {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [0, 2, -3] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={10}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  )
}
