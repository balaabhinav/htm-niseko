import listReducer from './listReducer';
import * as actions from './listingActions';
import { initialState } from './listReducer';

describe('List reducer', () => {

    it('should toggle state of modal', () => {

        const payload = {
            type : 'SOME_TYPE',
            id : 1
        }

        const expectedState = {
            tooltipOpen: false,
            toggleMore : {
                show : false,
                id : 0
            },
            modal : true,
            modalType : "SOME_TYPE",
            showModalId : 1
        }

        // Creating the open modal action
        let action = actions.openModal(payload);

        expect(listReducer(initialState, action)).toEqual(expectedState);
    })

    it('should toggle show attribute', () => {

        const payload = 1

        const expectedState = {
            tooltipOpen: false,
            toggleMore : {
                show : true,
                id : 1
            },
            modal : false,
            modalType : "",
            showModalId : 0
        }

        // Creating the toggle more action
        let action = actions.toggleMoreButton(payload);

        expect(listReducer(initialState, action)).toEqual(expectedState);
    })

    it('should toggle state of tooltipOpen state attribute', () => {

        const expectedState = {
            tooltipOpen: true,
            toggleMore : {
                show : false,
                id : 0
            },
            modal : false,
            modalType : "",
            showModalId : 0
        }

        // Creating the toggle tooltip action
        let action = actions.toggleTooltip();

        expect(listReducer(initialState, action)).toEqual(expectedState);
    })

    it('should set the state of modal to false', () => {

        const expectedState = {
            tooltipOpen: false,
            toggleMore : {
                show : false,
                id : 0
            },
            modal : false,
            modalType : "",
            showModalId : 0
        }
        // Creating the filter action
        let action = actions.closeModal();

        expect(listReducer(initialState, action)).toEqual(expectedState);
    })


})