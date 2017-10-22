import appReducer from './appReducer';
import * as actions from './appActions';

describe('reducer', () => {

    it('should return filtered properties', () => {

        const text = 'Chalet'

        // Creating the filter action
        let action = actions.filter(text);

        // Mocked the properties array to keep things short for testing
        let initialState = {
            search : '',
            properties : [
                {
                    name : "Chalet",
                    description : "Chalet property"
                },
                {
                    name : "Deep Tracks",
                    description : "Deep tracks property"
                }
            ]
        };

        let expectedState = {
            search : 'Chalet',
            properties : [
                {
                    name : "Chalet",
                    description : "Chalet property"
                }
            ]
        };

        // calling the reducer with mock initial state and filter action with above payload
        expect(appReducer(initialState, action)).toEqual(expectedState);
    })
})