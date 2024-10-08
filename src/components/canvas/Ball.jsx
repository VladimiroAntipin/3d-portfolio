import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const BallCanvas = ({ icon }) => {
  return (
    <div>
      <img src={icon} alt='icon' />
    </div>
  );
};

export default BallCanvas;