/**
 * constant to denote the type of action
 * @type {string}
 */
export const FILTER = "FILTER";

/**
 * @desc Action Creator for filtering the list of properties
 * @param filterStr
 * @returns {{type: string, payload: *}}
 */
export function filter (filterStr) {
    return {
        type : FILTER,
        payload : filterStr
    }
}