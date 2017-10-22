
// Initial State of Listing
export const initialState = {
    tooltipOpen: false,
    toggleMore : {
        show : false,
        id : 0
    },
    modal : false,
    modalType : "",
    showModalId : 0
}

// Listing Reducer
const listReducer = (state = initialState, action) => {
    switch(action.type){
        case "OPEN_MODAL" :
            // Toggles the state of modal
            return Object.assign({}, state, {
                modal : !state.modal,
                modalType : action.payload.type,
                showModalId : action.payload.id
            });

        case "TOGGLE_MORE" :

            // Toggles the state of more to view the description
            return Object.assign({}, state, {
                toggleMore : {
                    show : !state.toggleMore.show,
                    id : action.payload
                }
            })

        case "TOGGLE_TOOLTIP" :

            return Object.assign({}, state, {
                tooltipOpen : !state.tooltipOpen
            })

        case "CLOSE_MODAL" :

            return Object.assign({}, state, {
                modal : false
            })

        default :
            return state;
    }
};

export default listReducer;