export const OPEN_MODAL = "OPEN_MODAL";
export const TOGGLE_MORE = "TOGGLE_MORE";
export const TOGGLE_TOOLTIP = "TOGGLE_TOOLTIP";
export const CLOSE_MODAL = "CLOSE_MODAL";

/**
 * @desc Action creator to toggle the modal
 * @param data
 * @returns {{type: string, payload: *}}
 */
export function openModal(data){
    return {
        type : OPEN_MODAL,
        payload : data
    }
}

/**
 * @desc Action creator to close the modal
 * @returns {{type: string}}
 */
export function closeModal(){
    return {
        type : CLOSE_MODAL
    }
}

/**
 * @desc Action creator to toggle the more button to display the property details
 * @param id
 * @returns {{type: string, payload: *}}
 */
export function toggleMoreButton(id){
    return {
        type : TOGGLE_MORE,
        payload : id
    }
}

/**
 * @desc Action creator to toggle the tooltip for more button
 * @returns {{type: string}}
 */
export function toggleTooltip(){
    return {
        type : TOGGLE_TOOLTIP
    }
}