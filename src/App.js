import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Listing from './Components/Listing';
import * as properties from './properties.json';
import * as _ from 'lodash';

class App extends Component {

    constructor(props){

        // Pass the props to the parent class
        super(props);

        // Initialise the state with empty data which will get populated from the fetched data
        this.state = {
            search : ''
        }

        this.setSearch = this.setSearch.bind(this);

    }

    // Render function to render and re-render based on the changes in state variable
    render() {

        let data = properties;
        data = data.filter( p => {
            console.log("in filter => ", p.name.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1 || p.description.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1);
            return (p.name.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1 || p.description.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1)? true : false
        })

        console.log("rerender => ", data);

        return (
            <div className="App">
                <Header title="Stay. Play. Experience. Find your holiday in the heart of Niseko." />
                <div className="container search-box">
                    <input type="search" className="form-control" onChange={evt => this.setSearch(evt.target.value)} value={ this.state.search } placeholder="Search properties"/>
                </div>
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

    /**
     * @name : setSearch
     * @desc : Sets the search value on the state
     * @param searchText
     */
    setSearch(searchText) {

        this.setState({
            search : searchText
        })

    }
}

export default App;
