import * as React from 'react';
import { PerspectiveCamera } from 'three';
import { mergeRefs } from 'react-merge-refs';
import { motion } from '../render/motion.mjs';
import { useLayoutCamera } from './use-layout-camera.mjs';
import { extend } from '@react-three/fiber';

extend({ PerspectiveCamera: PerspectiveCamera });
/**
 * Adapted from https://github.com/pmndrs/drei/blob/master/src/core/PerspectiveCamera.tsx
 */
const LayoutCamera = React.forwardRef((props, ref) => {
    const { cameraRef } = useLayoutCamera(props, (size) => {
        const { current: cam } = cameraRef;
        if (cam && !props.manual) {
            cam.aspect = size.width / size.height;
            cam.updateProjectionMatrix();
        }
    });
    return (React.createElement(motion.perspectiveCamera, Object.assign({ ref: mergeRefs([cameraRef, ref]) }, props)));
});

export { LayoutCamera };
