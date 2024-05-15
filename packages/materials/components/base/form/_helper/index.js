import {pickBy} from "lodash-es";

/**
 * @description onChange event handler
 * @param state
 * @param value
 */
export const onChange = ({state, value}) => {
    const props = state?.events?.onChange?.link?.props;
    if (props) {
        state?.form?.setFieldValue(props, value);
    }
};

/**
 * @description remove empty values from object
 * @param obj
 * @returns {*}
 */
export const removeEmpty = (obj) => {
    return pickBy(obj, (value) => value !== null && value !== undefined && value !== '');
};
