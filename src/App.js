import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Listing from './Components/Listing';
import * as properties from './properties.json';

class App extends Component {

    constructor(props){

        // Pass the props to the parent class
        super(props);

        // Initialise the state with empty data which will get populated from the fetched data
        this.state = {
            data : []
        }

    }

    // Life-cycle hook which gets triggered once
    componentWillMount() {

        // call the setData function to populate the state's data variable with the data from properties.json
        this.setData();

    }

    // Render function to render and re-render based on the changes in state variable
    render() {
        return (
            <div className="App">
                <Header title="Stay. Play. Experience. Find your holiday in the heart of Niseko." />
                {
                    this.state.data.length===0?
                        (
                            <div className="no-data">
                                No Listings available!
                            </div>
                        ) :
                        (
                            <div className="container">
                                {
                                    this.state.data.map( (d,i) => (
                                        <Listing listing={ d } key={ i } id={ i } />
                                    ))
                                }
                            </div>
                        )
                }
            </div>
        );
    }

    /**
     * @name : fetchData
     * @desc : Fetches the properties list from the properties.json
     * file and populates the state object's data
     */
    setData() {

        // Populate the state with the properties list
        this.setState({
            data : properties
        });
    }
}

export default App;
