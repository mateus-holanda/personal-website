/* eslint-disable react/no-unknown-property */
'use client'

import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import { CanvasLoader } from './CanvasLoader'

function Earth() {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  )
}

export function EarthCanvas() {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  )
}
