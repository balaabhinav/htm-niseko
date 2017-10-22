import React from 'react';

const PropSearch = (props) => (
    <div className="container search-box">
        <input type="search" className="form-control" onChange={ (evt) =>  props.filter(evt.target.value) } value={ props.search } placeholder="Search properties"/>
    </div>
)

export default PropSearch;