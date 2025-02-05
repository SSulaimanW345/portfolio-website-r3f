import React from 'react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { HackerRoom } from './HackerRoom.jsx';
import CanvasLoader from '../../ui/other/Loading.jsx';
import HeroCamera from './HeroCamera.jsx';
import { ComputerChair } from './ComputerChair.jsx';
import Person from './Person.jsx';
import { Leva, useControls } from 'leva';
import { calculateSizes } from '../../../constants/index.js';
import { useTexture } from '@react-three/drei';
import { Cubicle } from './Cubicle.jsx';

export const HeroCanvas = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const [animationName, setAnimationName] = useState('idle');
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <>
      <Canvas className="w-full h-full mb-2">
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 50, 100]} fov={sizes.deskFov} />
          <Cubicle position={[0, -0.5, 0]} rotation={[0, 0, 0]} radius={sizes.cubicleRadius} />
          <HeroCamera isMobile={isMobile}>
            <HackerRoom
              // scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]}
              scale={[0.07, 0.07, 0.07]}
              position={[0, 0, 0]}
              rotation={[0.3, -1, 0]}
            />
            <ComputerChair
              // scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]}
              scale={[6, 6, 6]}
              position={[-4, -0.5, -2]}
              rotation={[-1.5, 0, 2]}
            />
            <Person
              scale={[6, 6, 6]}
              position={[0, 0, -2]}
              rotation={[-1.3, 0, -1.5]}
              // scale={[x.scale, x.scale, x.scale]}
              // position={[x.positionX, x.positionY, x.positionZ]}
              // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
              animationName={animationName}
            />
          </HeroCamera>

          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
      </Canvas>
    </>
  );
};
