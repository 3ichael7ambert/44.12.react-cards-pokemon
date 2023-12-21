import { useState } from 'react';

// Custom hook for handling flip state
function useFlip() {
  const [isFacingUp, setIsFacingUp] = useState(true);

  // Function to toggle the flip state
  function useFlip(initialFlipState = true) {
    const [isFlipped, setFlipped] = useState(initialFlipState);
  
    const flip = () => {
      setFlipped(isUp => !isUp);
    };
  
    return [isFlipped, flip];
  }
}

export default useFlip;
