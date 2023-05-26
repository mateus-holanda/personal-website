/* eslint-disable react/no-unknown-property */
'use client'

import { Decal, Float, OrbitControls, Preload } from '@react-three/drei'
import { Canvas, Vector3 } from '@react-three/fiber'
import { StaticImageData } from 'next/image'
import { Suspense, useMemo, useState } from 'react'
import * as THREE from 'three'

import { CanvasLoader } from './CanvasLoader'

interface BallProps {
  icon: StaticImageData
  position: Vector3
  onHover: () => void
}

interface BallCanvasProps {
  technologies: Array<{
    name: string
    icon: StaticImageData
  }>
}

function Ball({ icon, position, onHover }: BallProps) {
  const decal = useMemo(() => new THREE.TextureLoader().load(icon.src), [icon])

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={0.5}
      floatingRange={[-0.005, 0.005]}
    >
      <ambientLight intensity={0.03} />
      <directionalLight position={[10, 5, -5]} />
      <mesh
        onPointerOver={() => onHover()}
        onPointerLeave={() => onHover()}
        castShadow
        receiveShadow
        scale={1.3}
        position={position}
      >
        <icosahedronGeometry args={[1, 10]} />
        <meshStandardMaterial color="#fff8eb" flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.2}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  )
}

export function BallCanvas({ technologies }: BallCanvasProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [techName, setTechName] = useState('')

  return (
    <>
      <div className="text-white absolute right-0 m-20 flex h-8 items-center justify-end rounded-md bg-[#1d1836] font-bold">
        {isOpen && techName && <div className="p-3">{techName}</div>}
      </div>
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 1]}
        draggable="false"
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableRotate={false} enableZoom={false} />
          <group>
            {technologies.map((technology, index) => {
              const row = Math.floor(index / 3)
              const col = index % 4
              return (
                <Ball
                  key={`tech-${technology.name}`}
                  icon={technology.icon}
                  onHover={() => {
                    setIsOpen(!isOpen)
                    setTechName(technology.name)
                  }}
                  position={[col * 6 - 9, row * 3 - 9, -7]}
                />
              )
            })}
          </group>
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  )
}
