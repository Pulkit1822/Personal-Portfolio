import { makeUseVisualState, animations, createMotionComponent } from 'framer-motion';
import { useRender } from './use-render.mjs';
import { createRenderState, createVisualElement } from './create-visual-element.mjs';
import { scrapeMotionValuesFromProps } from './utils/scrape-motion-value.mjs';

const useVisualState = makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState,
});
const preloadedFeatures = Object.assign({}, animations);
function custom(Component) {
    return createMotionComponent({
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

export { motion };
