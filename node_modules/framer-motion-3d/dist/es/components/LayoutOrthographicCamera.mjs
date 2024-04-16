import * as React from 'react';
import { OrthographicCamera } from 'three';
import { mergeRefs } from 'react-merge-refs';
import { motion } from '../render/motion.mjs';
import { useLayoutCamera } from './use-layout-camera.mjs';
import { extend } from '@react-three/fiber';

extend({ OrthographicCamera: OrthographicCamera });
const LayoutOrthographicCamera = React.forwardRef((props, ref) => {
    const { size, cameraRef } = useLayoutCamera(props, (newSize) => {
        const { current: cam } = cameraRef;
        if (cam) {
            cam.left = newSize.width / -2;
            cam.right = newSize.width / 2;
            cam.top = newSize.height / 2;
            cam.bottom = newSize.height / -2;
            cam.updateProjectionMatrix();
        }
    });
    return (React.createElement(motion.orthographicCamera, Object.assign({ left: size.width / -2, right: size.width / 2, top: size.height / 2, bottom: size.height / -2, ref: mergeRefs([cameraRef, ref]) }, props)));
});

export { LayoutOrthographicCamera };
