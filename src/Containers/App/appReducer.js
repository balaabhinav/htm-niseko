import * as properties from '../../properties.json';

/**
 * @desc Initialise state with the filter variable and properties list
 * @type {{search: string, properties}}
 */

export const initialState = {
    search : '',
    properties : properties
}

/**
 * @desc App components reducer function which created new state based on actions
 * @param state
 * @param action
 * @returns {*}
 */

const appReducer = (state = initialState, action) => {
    switch(action.type){

        case "FILTER" :
            return Object.assign({}, state, {
                properties : filterProperties(action.payload),
                search : action.payload
            })

        default : return state
    }
}

/**
 * @name filterProperties
 * @desc Filters the properties array based on the name or description using the search string as argument
 * @param searchStr
 * @returns {*}
 */
const filterProperties = (searchStr) => {

    return properties.filter( p => {

        return (p.name.toLowerCase().indexOf(searchStr.toLowerCase())!==-1 || p.description.toLowerCase().indexOf(searchStr.toLowerCase())!==-1)? true : false

    })

}

export default appReducer;