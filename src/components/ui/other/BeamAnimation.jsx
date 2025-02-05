'use client';
import React, { useRef } from 'react';
import { AnimatedBeam, Circle } from './AnimatedBeam';
export const BeamAnimation = () => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);
  return (
    <div
      className="relative flex w-4/5 md:w-full max-w-[500px] mx-auto items-center justify-center overflow-hidden rounded-lg  bg-background lg:p-10 md:shadow-xl"
      ref={containerRef}>
      <div className="flex h-4/5 w-full flex-col items-stretch justify-between gap-8">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <img src="assets/figma.svg" />
          </Circle>
          <Circle ref={div5Ref} className="p-1">
            <img src="assets/tailwindcss.png" />{' '}
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} className="p-1">
            <img src="assets/react.svg" />
          </Circle>
          <Circle ref={div4Ref} className="h-16 w-16 p-3">
            <img src="assets/typecript.png" />
          </Circle>
          <Circle ref={div6Ref} className="p-1">
            <img src="assets/angular.png" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} className="p-1">
            <img src="assets/NETCore.png" />
          </Circle>
          <Circle ref={div7Ref} className="p-1">
            <img src="assets/pythonsvg.png" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        dotted
        gradientStartColor="#00ac47"
        gradientStopColor="#ffba00"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        dotted
        gradientStartColor="#d948ae"
        gradientStopColor="#5b60ff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        dotted
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
        gradientStartColor="#48b0d9"
        gradientStopColor="#67aeff"
        dotted
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
        dotted
        gradientStartColor="#00ac47"
        gradientStopColor="#4fcc5d"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
        dotted
        gradientStartColor="#48b0d9"
        gradientStopColor="#67aeff"
      />
    </div>
  );
};
