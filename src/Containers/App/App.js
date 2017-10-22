import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../../Components/Header/Header';
import Listing from '../Listing/Listing';
import PropSearch from '../../Components/PropSearch/PropSearch';

import * as actions from './appActions';

import { connect } from 'react-redux';

class App extends Component {

    constructor(props){

        // Pass the props to the parent class
        super(props);
        console.log("app porps =>", props);

    }

    // Render function to render and re-render based on the changes in state variable
    render() {

        let data = this.props.properties;

        return (
            <div className="App">
                <Header title="Stay. Play. Experience. Find your holiday in the heart of Niseko." />
                <PropSearch { ...this.props } />
                {
                    data.length===0?
                        (
                            <div className="no-data">
                                No Listings available!
                            </div>
                        ) :
                        (
                            <div className="container">
                                {
                                    data.map( (d,i) => (
                                        <Listing listing={ d } key={ i } id={ i } />
                                    ))
                                }
                            </div>
                        )
                }
            </div>
        );
    }

}

/**
 * @desc Function to pass down state variables required by the component as props
 * @param state
 * @returns {{properties: (Array), search: (string)}}
 */
const mapStateToProps = state => {
    return {
        properties : state.appReducer.properties,
        search : state.appReducer.search
    }
}

/**
 * @desc Function to pass down dispatch actions required by component as props
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
    filter : searchStr => {
        dispatch(actions.filter(searchStr))
    }
})

// connect prop variables & prop actions component using redux's connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
