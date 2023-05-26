import { Html, useProgress } from '@react-three/drei'
import RingLoader from 'react-spinners/RingLoader'

export function CanvasLoader() {
  const { progress } = useProgress()

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <RingLoader color="#fff" size={70} />
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 18,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}
