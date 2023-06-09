/* eslint-disable react/no-unknown-property */
'use client'

import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'

import { CanvasLoader } from './CanvasLoader'

interface ComputerProps {
  isMobile: boolean
}

function Computer({ isMobile }: ComputerProps) {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -2.6, -2.2] : [0, -2.6, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

export function ComputerCanvas() {
  const [isMobile, setIsMobile] = useState(false)

  function handleMediaQueryChange(event: MediaQueryListEvent) {
    setIsMobile(event.matches)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className=" cursor-grab"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
