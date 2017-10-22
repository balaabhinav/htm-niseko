import * as actions from './listingActions';

describe('action', () => {
    it('should return action creator for Open modal with the modal payload', () => {
        const data = {};
        const expectedAction = {
            type: actions.OPEN_MODAL,
            payload : data
        }
        expect(actions.openModal(data)).toEqual(expectedAction)
    })

    it('should return action creator for close modal', () => {

        const expectedAction = {
            type: actions.CLOSE_MODAL
        }
        expect(actions.closeModal()).toEqual(expectedAction)
    })

    it('should return action creator for toggling the more button', () => {
        const id = 0;
        const expectedAction = {
            type: actions.TOGGLE_MORE,
            payload : id
        }
        expect(actions.toggleMoreButton(id)).toEqual(expectedAction)
    })

    it('should return action creator for Toggling Tooltip', () => {

        const expectedAction = {
            type: actions.TOGGLE_TOOLTIP
        }

        expect(actions.toggleTooltip()).toEqual(expectedAction)
    })
})