/// <reference types="react" />
import * as React$1 from 'react';
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import * as framer_motion from 'framer-motion';
import { AnimationLifecycles, AnimationProps, TapHandlers, HoverHandlers, MotionValue } from 'framer-motion';
import { MeshProps, Vector3, Euler, Color, Props as Props$2 } from '@react-three/fiber';

interface ThreeMotionProps extends AnimationLifecycles, AnimationProps, TapHandlers, HoverHandlers {
    onInstanceUpdate?: MeshProps["onUpdate"];
}
/**
 * @public
 */
declare type ForwardRefComponent<T, P> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
declare type MotionValueOrNumber = number | MotionValue<number>;
declare type MotionValueVector3 = [
    MotionValueOrNumber,
    MotionValueOrNumber,
    MotionValueOrNumber
];
declare type AcceptMotionValues<T> = Omit<T, "position" | "scale" | "rotation" | "color"> & {
    position?: Vector3 | MotionValueVector3 | MotionValueOrNumber;
    scale?: Vector3 | MotionValueVector3 | MotionValueOrNumber;
    rotation?: Euler | MotionValueVector3 | MotionValueOrNumber;
    color?: Color | MotionValue<string>;
};
/**
 * Motion-optimised versions of React's HTML components.
 *
 * @public
 */
declare type ThreeMotionComponents = {
    [K in keyof JSX.IntrinsicElements]: ForwardRefComponent<JSX.IntrinsicElements[K], ThreeMotionProps & Omit<AcceptMotionValues<JSX.IntrinsicElements[K]>, "onUpdate" | "transition">>;
};

declare function custom<Props>(Component: string): React$1.ForwardRefExoticComponent<React$1.PropsWithoutRef<Props & framer_motion.MotionProps> & React$1.RefAttributes<any>>;
declare const motion: typeof custom & ThreeMotionComponents;

interface MotionCanvasProps extends Omit<Props$2, "resize"> {
}
declare const MotionCanvas: React$1.ForwardRefExoticComponent<MotionCanvasProps & React$1.RefAttributes<HTMLCanvasElement>>;

interface LayoutCameraProps {
    makeDefault?: boolean;
    manual?: boolean;
    children?: React.ReactNode;
}

declare type Props$1 = JSX.IntrinsicElements["perspectiveCamera"] & LayoutCameraProps & ThreeMotionProps;
/**
 * Adapted from https://github.com/pmndrs/drei/blob/master/src/core/PerspectiveCamera.tsx
 */
declare const LayoutCamera: React$1.ForwardRefExoticComponent<Pick<Props$1, "onInstanceUpdate" | "onUpdate" | "onAnimationStart" | "onAnimationComplete" | "initial" | "animate" | "exit" | "variants" | "transition" | "onTap" | "onTapStart" | "onTapCancel" | "whileTap" | "attach" | "args" | "children" | "key" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "raycast" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "visible" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "view" | "matrixWorldInverse" | "projectionMatrix" | "projectionMatrixInverse" | "isCamera" | "isPerspectiveCamera" | "zoom" | "fov" | "aspect" | "near" | "far" | "focus" | "filmGauge" | "filmOffset" | "setFocalLength" | "getFocalLength" | "getEffectiveFOV" | "getFilmWidth" | "getFilmHeight" | "setViewOffset" | "clearViewOffset" | "updateProjectionMatrix" | "setLens" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerMissed" | "onPointerCancel" | "onWheel" | "whileHover" | "onHoverStart" | "onHoverEnd" | "manual" | "makeDefault"> & React$1.RefAttributes<unknown>>;

declare type Props = JSX.IntrinsicElements["orthographicCamera"] & LayoutCameraProps & ThreeMotionProps;
declare const LayoutOrthographicCamera: React$1.ForwardRefExoticComponent<Pick<Props, "onInstanceUpdate" | "onUpdate" | "onAnimationStart" | "onAnimationComplete" | "initial" | "animate" | "exit" | "variants" | "transition" | "onTap" | "onTapStart" | "onTapCancel" | "whileTap" | "attach" | "args" | "children" | "key" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "raycast" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "visible" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "view" | "matrixWorldInverse" | "projectionMatrix" | "projectionMatrixInverse" | "isCamera" | "zoom" | "near" | "far" | "setViewOffset" | "clearViewOffset" | "updateProjectionMatrix" | "isOrthographicCamera" | "left" | "right" | "top" | "bottom" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerMissed" | "onPointerCancel" | "onWheel" | "whileHover" | "onHoverStart" | "onHoverEnd" | "manual" | "makeDefault"> & React$1.RefAttributes<unknown>>;

declare function useTime(): framer_motion.MotionValue<number>;

export { LayoutCamera, LayoutOrthographicCamera, MotionCanvas, MotionCanvasProps, motion, useTime };
