'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var framerMotion = require('framer-motion');
var React = require('react');
var tslib = require('tslib');
var three = require('three');
var reactMergeRefs = require('react-merge-refs');
var fiber = require('@react-three/fiber');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function useHover(isStatic, { whileHover, onHoverStart, onHoverEnd, onPointerOver, onPointerOut, }, visualElement) {
    const isHoverEnabled = whileHover || onHoverStart || onHoverEnd;
    if (isStatic || !visualElement || !isHoverEnabled)
        return {};
    return {
        onPointerOver: (event) => {
            var _a;
            (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive("whileHover", true);
            onPointerOver && onPointerOver(event);
        },
        onPointerOut: (event) => {
            var _a;
            (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive("whileHover", false);
            onPointerOut && onPointerOut(event);
        },
    };
}

function useTap(isStatic, { whileTap, onTapStart, onTap, onTapCancel, onPointerDown, }, visualElement) {
    const isTapEnabled = onTap || onTapStart || onTapCancel || whileTap;
    const isPressing = React.useRef(false);
    const cancelPointerEndListeners = React.useRef(null);
    if (isStatic || !visualElement || !isTapEnabled)
        return {};
    function removePointerEndListener() {
        var _a;
        (_a = cancelPointerEndListeners.current) === null || _a === void 0 ? void 0 : _a.call(cancelPointerEndListeners);
        cancelPointerEndListeners.current = null;
    }
    function checkPointerEnd() {
        var _a;
        removePointerEndListener();
        isPressing.current = false;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive("whileTap", false);
        return !framerMotion.isDragActive();
    }
    function onPointerUp(event, info) {
        if (!checkPointerEnd())
            return;
        /**
         * We only count this as a tap gesture if the event.target is the same
         * as, or a child of, this component's element
         */
        onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
    }
    function onPointerCancel(event, info) {
        if (!checkPointerEnd())
            return;
        onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
    }
    return {
        onPointerDown: framerMotion.addPointerInfo((event, info) => {
            var _a;
            removePointerEndListener();
            if (isPressing.current)
                return;
            isPressing.current = true;
            /**
             * Only set listener to passive if there are no external listeners.
             */
            const options = {
                passive: !(onTapStart || onTap || onTapCancel || onPointerDown),
            };
            cancelPointerEndListeners.current = framerMotion.pipe(framerMotion.addPointerEvent(window, "pointerup", onPointerUp, options), framerMotion.addPointerEvent(window, "pointercancel", onPointerCancel, options));
            (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive("whileTap", true);
            onPointerDown === null || onPointerDown === void 0 ? void 0 : onPointerDown(event);
            onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
        }),
    };
}

const useRender = (Component, props, ref, _state, isStatic, visualElement) => {
    const visualProps = useVisualProps(props);
    /**
     * If isStatic, render motion values as props
     * If !isStatic, render motion values as props on initial render
     */
    return React.createElement(Component, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ ref }, framerMotion.filterProps(props, false, false)), visualProps), { onUpdate: props.onInstanceUpdate }), useHover(isStatic, props, visualElement)), useTap(isStatic, props, visualElement)));
};
function useVisualProps(props) {
    return React.useMemo(() => {
        const visualProps = {};
        for (const key in props) {
            const prop = props[key];
            if (framerMotion.isMotionValue(prop)) {
                visualProps[key] = prop.get();
            }
            else if (Array.isArray(prop) && prop.includes(framerMotion.isMotionValue)) {
                visualProps[key] = prop.map(framerMotion.resolveMotionValue);
            }
        }
        return visualProps;
    }, []);
}

const setVector = (name, defaultValue) => (i) => (instance, value) => {
    if (instance[name] === undefined) {
        instance[name] = new three.Vector3(defaultValue);
    }
    const vector = instance[name];
    vector.setComponent(i, value);
};
const setEuler = (name, defaultValue) => (axis) => (instance, value) => {
    if (instance[name] === undefined) {
        instance[name] = new three.Euler(defaultValue);
    }
    const euler = instance[name];
    euler[axis] = value;
};
const setColor = (name) => (instance, value) => {
    if (instance[name] === undefined) {
        instance[name] = new three.Color(value);
    }
    instance[name].set(value);
};
const setScale = setVector("scale", 1);
const setPosition = setVector("position", 0);
const setRotation = setEuler("rotation", 0);
const setters = {
    x: setPosition(0),
    y: setPosition(1),
    z: setPosition(2),
    scale: (instance, value) => {
        if (instance.scale === undefined) {
            instance.scale = new three.Vector3(1);
        }
        const scale = instance.scale;
        scale.set(value, value, value);
    },
    scaleX: setScale(0),
    scaleY: setScale(1),
    scaleZ: setScale(2),
    rotateX: setRotation("x"),
    rotateY: setRotation("y"),
    rotateZ: setRotation("z"),
    color: setColor("color"),
    specular: setColor("specular"),
};
function setThreeValue(instance, key, values) {
    if (setters[key]) {
        setters[key](instance, values[key]);
    }
    else {
        if (key === "opacity" && !instance.transparent) {
            instance.transparent = true;
        }
        instance[key] = values[key];
    }
}

const readVector = (name, defaultValue) => (axis) => (instance) => {
    const value = instance[name];
    return value ? value[axis] : defaultValue;
};
const readPosition = readVector("position", 0);
const readScale = readVector("scale", 1);
const readRotation = readVector("rotation", 0);
const readers = {
    x: readPosition("x"),
    y: readPosition("y"),
    z: readPosition("z"),
    scale: readScale("x"),
    scaleX: readScale("x"),
    scaleY: readScale("y"),
    scaleZ: readScale("z"),
    rotateX: readRotation("x"),
    rotateY: readRotation("y"),
    rotateZ: readRotation("z"),
};
function readAnimatableValue(value) {
    if (value === undefined) {
        return;
    }
    else if (value instanceof three.Color) {
        return value.getStyle();
    }
    else {
        return value;
    }
}
function readThreeValue(instance, name) {
    return readers[name]
        ? readers[name](instance)
        : readAnimatableValue(instance[name]) || 0;
}

const axes = ["x", "y", "z"];
const valueMap = {
    "position-x": "x",
    "position-y": "y",
    "position-z": "z",
    "rotation-x": "rotateX",
    "rotation-y": "rotateY",
    "rotation-z": "rotateZ",
    "scale-x": "scaleX",
    "scale-y": "scaleY",
    "scale-z": "scaleZ",
};
const scrapeMotionValuesFromProps = (props, prevProps) => {
    const motionValues = {};
    for (const key in props) {
        const prop = props[key];
        if (framerMotion.isMotionValue(prop) || framerMotion.isMotionValue(prevProps[key])) {
            motionValues[valueMap[key] || key] = prop;
        }
        else if (Array.isArray(prop)) {
            for (let i = 0; i < prop.length; i++) {
                const value = prop[i];
                if (framerMotion.isMotionValue(value) ||
                    (Array.isArray(prevProps[key]) &&
                        framerMotion.isMotionValue(prevProps[key][i]))) {
                    const name = valueMap[key + "-" + axes[i]];
                    motionValues[name] = value;
                }
            }
        }
    }
    return motionValues;
};

const createRenderState = () => ({});
class ThreeVisualElement extends framerMotion.VisualElement {
    constructor() {
        super(...arguments);
        this.type = "three";
    }
    readValueFromInstance(instance, key) {
        return readThreeValue(instance, key);
    }
    getBaseTargetFromProps() {
        return undefined;
    }
    sortInstanceNodePosition(a, b) {
        return a.id - b.id;
    }
    makeTargetAnimatableFromInstance(_a) {
        var { transition, transitionEnd } = _a, target = tslib.__rest(_a, ["transition", "transitionEnd"]);
        framerMotion.checkTargetForNewValues(this, target, {});
        return Object.assign(Object.assign({}, target), { transition, transitionEnd });
    }
    removeValueFromRenderState() { }
    measureInstanceViewportBox() {
        return framerMotion.createBox();
    }
    scrapeMotionValuesFromProps(props, prevProps) {
        return scrapeMotionValuesFromProps(props, prevProps);
    }
    build(state, latestValues) {
        for (const key in latestValues) {
            state[key] = latestValues[key];
        }
    }
    renderInstance(instance, renderState) {
        for (const key in renderState) {
            setThreeValue(instance, key, renderState);
        }
    }
}
const createVisualElement = (_, options) => new ThreeVisualElement(options, {});

const useVisualState = framerMotion.makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState,
});
const preloadedFeatures = Object.assign({}, framerMotion.animations);
function custom(Component) {
    return framerMotion.createMotionComponent({
        Component,
        preloadedFeatures,
        useRender,
        useVisualState,
        createVisualElement,
    });
}
const componentCache = new Map();
const motion = new Proxy(custom, {
    get: (_, key) => {
        !componentCache.has(key) && componentCache.set(key, custom(key));
        return componentCache.get(key);
    },
});

const MotionCanvasContext = React.createContext(undefined);

const devicePixelRatio = typeof window !== "undefined" ? window.devicePixelRatio : 1;
const calculateDpr = (dpr) => Array.isArray(dpr)
    ? framerMotion.clamp(dpr[0], dpr[1], devicePixelRatio)
    : dpr || devicePixelRatio;
/**
 * This file contains a version of R3F's Canvas component that uses our projection
 * system for layout measurements instead of use-react-measure so we can keep the
 * projection and cameras in frame.
 *
 * https://github.com/pmndrs/react-three-fiber/blob/master/packages/fiber/src/web/Canvas.tsx
 */
function Block({ set }) {
    framerMotion.useIsomorphicLayoutEffect(() => {
        set(new Promise(() => null));
        return () => set(false);
    }, []);
    return null;
}
class ErrorBoundary extends React__namespace.Component {
    constructor() {
        super(...arguments);
        this.state = { error: false };
    }
    componentDidCatch(error) {
        this.props.set(error);
    }
    render() {
        return this.state.error ? null : this.props.children;
    }
}
ErrorBoundary.getDerivedStateFromError = () => ({ error: true });
function CanvasComponent(_a, forwardedRef) {
    var { children, fallback, tabIndex, id, style, className, events } = _a, props = tslib.__rest(_a, ["children", "fallback", "tabIndex", "id", "style", "className", "events"]);
    /**
     * Import existing contexts to pass through variants and MotionConfig from
     * the DOM to the 3D tree. Shared variants aren't officially supported yet
     * because the parent DOM tree fires effects before the 3D tree, whereas
     * variants are expected to run from bottom-up in useEffect.
     */
    const motionContext = React.useContext(framerMotion.MotionContext);
    const configContext = React.useContext(framerMotion.MotionConfigContext);
    const [forceRender] = framerMotion.useForceUpdate();
    const layoutCamera = React.useRef(null);
    const dimensions = React.useRef({
        size: { width: 0, height: 0 },
    });
    const { size, dpr } = dimensions.current;
    const containerRef = React.useRef(null);
    const handleResize = () => {
        const container = containerRef.current;
        dimensions.current = {
            size: {
                width: container.offsetWidth,
                height: container.offsetHeight,
            },
        };
        forceRender();
    };
    // Set canvas size on mount
    React.useLayoutEffect(handleResize, []);
    const canvasRef = React__namespace.useRef(null);
    const [block, setBlock] = React__namespace.useState(false);
    const [error, setError] = React__namespace.useState(false);
    // Suspend this component if block is a promise (2nd run)
    if (block)
        throw block;
    // Throw exception outwards if anything within canvas throws
    if (error)
        throw error;
    const root = React.useRef();
    if (size.width > 0 && size.height > 0) {
        if (!root.current) {
            root.current = fiber.createRoot(canvasRef.current);
        }
        root.current.configure(Object.assign(Object.assign({}, props), { dpr: dpr || props.dpr, size: Object.assign(Object.assign({}, size), { top: 0, left: 0 }), events: events || fiber.events })).render(React__namespace.createElement(ErrorBoundary, { set: setError },
            React__namespace.createElement(React__namespace.Suspense, { fallback: React__namespace.createElement(Block, { set: setBlock }) },
                React__namespace.createElement(MotionCanvasContext.Provider, { value: {
                        dimensions,
                        layoutCamera,
                        requestedDpr: calculateDpr(props.dpr),
                    } },
                    React__namespace.createElement(framerMotion.MotionConfigContext.Provider, { value: configContext },
                        React__namespace.createElement(framerMotion.MotionContext.Provider, { value: motionContext }, children))))));
    }
    framerMotion.useIsomorphicLayoutEffect(() => {
        const container = canvasRef.current;
        return () => fiber.unmountComponentAtNode(container);
    }, []);
    return (React__namespace.createElement("div", { ref: containerRef, id: id, className: className, tabIndex: tabIndex, style: Object.assign({ position: "relative", width: "100%", height: "100%", overflow: "hidden" }, style) },
        React__namespace.createElement("canvas", { ref: reactMergeRefs.mergeRefs([canvasRef, forwardedRef]), style: { display: "block" } }, fallback)));
}
const MotionCanvas = React.forwardRef(CanvasComponent);

const calcBoxSize = ({ x, y }) => ({
    width: framerMotion.calcLength(x),
    height: framerMotion.calcLength(y),
    top: 0,
    left: 0,
});
function useLayoutCamera({ makeDefault = true }, updateCamera) {
    const context = React.useContext(MotionCanvasContext);
    framerMotion.invariant(Boolean(context), "No MotionCanvas detected. Replace Canvas from @react-three/fiber with MotionCanvas from framer-motion.");
    const { dimensions, layoutCamera, requestedDpr } = context;
    const advance = fiber.useThree((three) => three.advance);
    const set = fiber.useThree((three) => three.set);
    const camera = fiber.useThree((three) => three.camera);
    const size = fiber.useThree((three) => three.size);
    const gl = fiber.useThree((three) => three.gl);
    const { visualElement: parentVisualElement } = React.useContext(framerMotion.MotionContext);
    const measuredLayoutSize = React.useRef();
    React.useLayoutEffect(() => {
        measuredLayoutSize.current = size;
        updateCamera(size);
        advance(performance.now());
        const projection = parentVisualElement === null || parentVisualElement === void 0 ? void 0 : parentVisualElement.projection;
        if (!projection)
            return;
        /**
         * When the projection of an element changes we want to update the camera
         * with the projected dimensions.
         */
        const removeProjectionUpdateListener = projection.addEventListener("projectionUpdate", (newProjection) => updateCamera(calcBoxSize(newProjection)));
        /**
         * When the layout of an element changes we want to update the renderer
         * output to match the layout dimensions.
         */
        const removeLayoutMeasureListener = projection.addEventListener("measure", (newLayout) => {
            const newSize = calcBoxSize(newLayout);
            let dpr = requestedDpr;
            const { width, height } = dimensions.current.size;
            const xScale = width / newSize.width;
            const yScale = height / newSize.height;
            const maxScale = Math.max(xScale, yScale);
            dpr = framerMotion.clamp(0.75, 4, maxScale);
            dimensions.current = {
                size: { width: newSize.width, height: newSize.height },
                dpr,
            };
            gl.setSize(newSize.width, newSize.height);
            gl.setPixelRatio(dpr);
        });
        /**
         * When a projection animation completes we want to update the camera to
         * match the recorded layout of the element.
         */
        const removeAnimationCompleteListener = projection.addEventListener("animationComplete", () => {
            const { layoutBox } = projection.layout || {};
            if (layoutBox) {
                setTimeout(() => {
                    const newSize = calcBoxSize(layoutBox);
                    updateCamera(newSize);
                    dimensions.current = { size: newSize };
                    gl.setSize(newSize.width, newSize.height);
                    gl.setPixelRatio(requestedDpr);
                }, 50);
            }
        });
        return () => {
            removeProjectionUpdateListener();
            removeLayoutMeasureListener();
            removeAnimationCompleteListener();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useLayoutEffect(() => {
        const { current: cam } = layoutCamera;
        if (makeDefault && cam) {
            const oldCam = camera;
            set(() => ({ camera: cam }));
            return () => set(() => ({ camera: oldCam }));
        }
    }, [camera, layoutCamera, makeDefault, set]);
    return { size, camera, cameraRef: layoutCamera };
}

fiber.extend({ PerspectiveCamera: three.PerspectiveCamera });
/**
 * Adapted from https://github.com/pmndrs/drei/blob/master/src/core/PerspectiveCamera.tsx
 */
const LayoutCamera = React__namespace.forwardRef((props, ref) => {
    const { cameraRef } = useLayoutCamera(props, (size) => {
        const { current: cam } = cameraRef;
        if (cam && !props.manual) {
            cam.aspect = size.width / size.height;
            cam.updateProjectionMatrix();
        }
    });
    return (React__namespace.createElement(motion.perspectiveCamera, Object.assign({ ref: reactMergeRefs.mergeRefs([cameraRef, ref]) }, props)));
});

fiber.extend({ OrthographicCamera: three.OrthographicCamera });
const LayoutOrthographicCamera = React__namespace.forwardRef((props, ref) => {
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
    return (React__namespace.createElement(motion.orthographicCamera, Object.assign({ left: size.width / -2, right: size.width / 2, top: size.height / 2, bottom: size.height / -2, ref: reactMergeRefs.mergeRefs([cameraRef, ref]) }, props)));
});

function useTime() {
    const time = framerMotion.useMotionValue(0);
    const { isStatic } = React.useContext(framerMotion.MotionConfigContext);
    !isStatic && fiber.useFrame((state) => time.set(state.clock.getElapsedTime()));
    return time;
}

exports.LayoutCamera = LayoutCamera;
exports.LayoutOrthographicCamera = LayoutOrthographicCamera;
exports.MotionCanvas = MotionCanvas;
exports.motion = motion;
exports.useTime = useTime;
