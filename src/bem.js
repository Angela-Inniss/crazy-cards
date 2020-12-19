// @flow
/**
 * Creates a classname string from an object of modifiers. Class names take the
 * form of `${baseClass}--${modifier}`.
 *
 * For boolean values, the key will be used as the modifier if the value is truthy.
 * For string values, the value will always be used as the modifier.
 * @param {string} baseClass
 * @param {Object} modifiers
 *
 * @returns {string}
 */
const buildClassNames = (
    baseClass: string,
    modifiers: { [modifier: string]: boolean | string } = {}
): string => {
    const arr = Object.keys(modifiers)
        .map(modifier => {
            if (typeof modifiers[modifier] === "boolean" && modifiers[modifier]) {
                return `${baseClass}--${modifier}`;
            }
            if (typeof modifiers[modifier] === "string") {
                return `${baseClass}--${modifiers[modifier]}`;
            }
            return null;
        })
        .filter(className => !!className);
    return [baseClass, ...arr].join(" ");
};

/**
 * Creates BEM class names with optional modifiers. Class names take the form of
 * `${block}__${element}--${modifier}`.
 *
 * For modifiers, if the value is a boolean then the key will be used as the
 * modifier if the value is truthy. If the value is a string then the value will
 * always be used as the modifier.
 * If you specify modifiers, the class `${block}__${element}` will still always
 * be returned.
 * If no element is given, the class names will be `${block}--${modifier}`
 */
export default function bem(
    block: string,
    element?: string | null | void,
    modifiers?: { [modifier: string]: boolean | string }
): string {
    return buildClassNames(element ? `${block}__${element}` : block, modifiers);
}
