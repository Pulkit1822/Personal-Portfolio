import { useFrame } from '@react-three/fiber';
import { useMotionValue, MotionConfigContext } from 'framer-motion';
import { useContext } from 'react';

function useTime() {
    const time = useMotionValue(0);
    const { isStatic } = useContext(MotionConfigContext);
    !isStatic && useFrame((state) => time.set(state.clock.getElapsedTime()));
    return time;
}

export { useTime };
