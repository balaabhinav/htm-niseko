import * as actions from './appActions';

describe('action', () => {
    it('should return action creator for filtering properties', () => {
        const text = 'Chalet'
        const expectedAction = {
            type: actions.FILTER,
            payload : text
        }
        expect(actions.filter(text)).toEqual(expectedAction)
    })
})