import React, { Component } from 'react';
import HtmModal from '../../Components/Modal/Modal';
import MoreToolTip from '../../Components/MoreToolTip/MoreToolTip';
import * as actions from './listingActions';
import { connect } from 'react-redux';

// Stateful Component to add some interactivity
class Listing extends Component {

    constructor(props){

        super(props);
    }

    render(){
        return (
            <div className="listing-container">
                <div className="row">
                    <div className="col col-md-4 col-sm-12">
                        <img className="listing-img" alt={ this.props.listing.name } src={ this.props.listing.propertyImage } />
                    </div>
                    <div className="col col-md-5 col-sm-12">
                        <p className="prop-title">{ this.props.listing.name }</p>
                        <div className="row listing-info">
                            <div className="col col-6">
                                <p>{ this.props.listing.gradeSort } Rooms</p>
                            </div>
                            <div className="col col-6">
                                <p>{ this.props.listing.standardPax } Beds</p>
                            </div>
                            <div className="col col-6">
                                <p>{ this.props.listing.bathrooms } Bathrooms</p>
                            </div>
                            <div className="col col-6 ">
                                <p>{ this.props.listing.kitchenId } Kitchens</p>
                            </div>
                        </div>
                        <div className="row listing-info listing-meta">
                            <div className="col col-6">
                                <p>Floor size <b>{ this.props.listing.floorArea }m</b></p>
                            </div>
                            <div className="col col-6">
                                <p>Lifts within <b>{ this.props.listing.liftDistanceId }m</b></p>
                            </div>
                            <div className="col col-12">
                                <p>Village centre within <b>{ this.props.listing.villageCentreDistanceId }m</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-3 col-sm-12 btn-container">
                        <div className="btn-holder">
                            <button onClick={ () => this.props.openModal({type : "book", id : this.props.listing.id}) } className="btn btn-primary htm-custom-btn">Book Now</button>
                            <button onClick={ () => this.props.openModal({type : "enquiry", id : this.props.listing.id}) } className="btn btn-light htm-custom-btn">Send Enquiry</button>
                        </div>
                    </div>
                </div>
                {
                    this.props.tooltipOpen? (
                        <MoreToolTip { ...this.props } />
                    ) : ''
                }
                <div onClick={ () => this.props.toggleMoreButton(this.props.listing.id) } id={"more"+this.props.listing.id.toString()} className="btn-more">
                    {
                        !this.props.toggleMore.show || this.props.listing.id!==this.props.toggleMore.id?
                            (<i className="fa fa-ellipsis-h"></i>)
                            :
                            (<i className="fa fa-times"></i>)
                    }
                </div>
                {
                    this.props.modal && this.props.showModalId===this.props.listing.id?
                        (
                            <div>
                                <HtmModal { ...this.props } />
                            </div>
                        ) : ''
                }
                {
                    this.props.toggleMore.show && this.props.toggleMore.id === this.props.listing.id?
                        (
                            <div className="more-details">
                                <h5>" { this.props.listing.description } "</h5>
                            </div>
                        ) : ""
                }
            </div>
        )
    }
}

/**
 * @desc Map the state variables to be passed down to the component as props
 * @param state
 */

const mapPropsToState = state => ({
    tooltipOpen : state.listReducer.tooltipOpen,
    toggleMore : state.listReducer.toggleMore,
    modal : state.listReducer.modal,
    modalType : state.listReducer.modalType,
    showModalId : state.listReducer.showModalId
})

/**
 * @desc Pass down actions as props to component
 * @param dispatch
 */

const mapDispatchToProps = dispatch => ({
    openModal : (data) => dispatch(actions.openModal(data)),
    closeModal : () => dispatch(actions.closeModal()),
    toggleMoreButton : (id) => dispatch(actions.toggleMoreButton(id)),
    toggleTooltip : () => dispatch(actions.toggleTooltip())
})

// connect prop variables & prop actions component using redux's connect
export default connect(mapPropsToState, mapDispatchToProps)(Listing);