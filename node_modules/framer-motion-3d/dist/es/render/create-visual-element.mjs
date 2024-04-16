import { __rest } from 'tslib';
import { VisualElement, checkTargetForNewValues, createBox } from 'framer-motion';
import { setThreeValue } from './utils/set-value.mjs';
import { readThreeValue } from './utils/read-value.mjs';
import { scrapeMotionValuesFromProps } from './utils/scrape-motion-value.mjs';

const createRenderState = () => ({});
class ThreeVisualElement extends VisualElement {
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
        var { transition, transitionEnd } = _a, target = __rest(_a, ["transition", "transitionEnd"]);
        checkTargetForNewValues(this, target, {});
        return Object.assign(Object.assign({}, target), { transition, transitionEnd });
    }
    removeValueFromRenderState() { }
    measureInstanceViewportBox() {
        return createBox();
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

export { ThreeVisualElement, createRenderState, createVisualElement };
