
import React from 'react';
import Lottie from 'lottie-react';

interface LottiePlayerProps {
  animationData: any;
  className?: string;
}

export const LottiePlayer = ({ animationData, className }: LottiePlayerProps) => {
  return (
    <Lottie 
      animationData={animationData} 
      className={className}
      loop={true}
    />
  );
};

