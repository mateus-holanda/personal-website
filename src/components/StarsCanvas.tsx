/* eslint-disable react/no-unknown-property */
'use client'

import { PointMaterial, Points, Preload } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as random from 'maath/random/dist/maath-random.esm'
import { Suspense, useRef } from 'react'
import { Mesh } from 'three'

function Stars() {
  const meshRef = useRef<Mesh>(null!)

  const sphere = random.inSphere(new Float32Array(90000), { radius: 5 })

  useFrame((state, delta) => {
    meshRef.current.rotation.x -= delta / 40
    meshRef.current.rotation.y -= delta / 60
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <mesh ref={meshRef}>
        <Points positions={sphere} stride={3} frustumCulled>
          <PointMaterial
            transparent
            color="#f272c8"
            size={0.002}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </mesh>
    </group>
  )
}

export function StarsCanvas() {
  return (
    <div className="absolute inset-0 z-[-1] h-auto w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}
