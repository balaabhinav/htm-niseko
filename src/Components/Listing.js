import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';
import HtmModal from './Modal';

// Stateful Component to add some interactivity
export default class Listing extends Component {

    constructor(props){

        super(props);

        this.state = {
            listing : props.listing,
            tooltipOpen: false,
            toggleMore : false,
            modal : false,
            modalType : ""
        }

        this.toggle = this.toggle.bind(this);
        this.toggleMore = this.toggleMore.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentWillReceiveProps(nextProps) {

        // Reset state on new props
        this.setState({
            listing : nextProps.listing,
            tooltipOpen: false,
            toggleMore : false,
            modal : false,
            modalType : ""
        })
    }

    render(){
        return (
            <div className="listing-container">
                <div className="row">
                    <div className="col col-md-4 col-sm-12">
                        <img className="listing-img" alt={ this.state.listing.name } src={ this.state.listing.propertyImage } />
                    </div>
                    <div className="col col-md-5 col-sm-12">
                        <p className="prop-title">{ this.state.listing.name }</p>
                        <div className="row listing-info">
                            <div className="col col-6">
                                <p>{ this.state.listing.gradeSort } Rooms</p>
                            </div>
                            <div className="col col-6">
                                <p>{ this.state.listing.standardPax } Beds</p>
                            </div>
                            <div className="col col-6">
                                <p>{ this.state.listing.bathrooms } Bathrooms</p>
                            </div>
                            <div className="col col-6 ">
                                <p>{ this.state.listing.kitchenId } Kitchens</p>
                            </div>
                        </div>
                        <div className="row listing-info listing-meta">
                            <div className="col col-6">
                                <p>Floor size <b>{ this.state.listing.floorArea }m</b></p>
                            </div>
                            <div className="col col-6">
                                <p>Lifts within <b>{ this.state.listing.liftDistanceId }m</b></p>
                            </div>
                            <div className="col col-12">
                                <p>Village centre within <b>{ this.state.listing.villageCentreDistanceId }m</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-3 col-sm-12 btn-container">
                        <div className="btn-holder">
                            <button onClick={ () => this.toggleModal("book") } className="btn btn-primary htm-custom-btn">Book Now</button>
                            <button onClick={ () => this.toggleModal("enquiry") } className="btn btn-light htm-custom-btn">Send Enquiry</button>
                        </div>
                    </div>
                </div>
                <Tooltip placement="top" isOpen={this.state.tooltipOpen} target={"more"+this.props.id.toString()} toggle={this.toggle}>
                    {
                        !this.state.toggleMore? "More" : "Hide"
                    }
                </Tooltip>
                <div onClick={ () => this.toggleMore() } id={"more"+this.props.id.toString()} className="btn-more">
                    {
                        !this.state.toggleMore ?
                            (<i className="fa fa-ellipsis-h"></i>)
                            :
                            (<i className="fa fa-times"></i>)
                    }
                </div>
                {
                    this.state.modal?
                        (
                            <div>
                                <HtmModal name={ this.state.listing.name } modal={ this.state.modal } type={ this.state.modalType } toggleModal={ this.toggleModal } />
                            </div>
                        ) : ''
                }
                {
                    this.state.toggleMore?
                        (
                            <div className="more-details">
                                <h5>" { this.state.listing.description } "</h5>
                            </div>
                        ) : ""
                }
            </div>
        )
    }

    /**
     * @name : toggleModal
     * @desc : Toggles the state of the modal to display the enquiry form
     */
    toggleModal(type) {
        this.setState({
            modal : !this.state.modal,
            modalType : type
        })
    }

    /**
     * @name : toggleMore
     * @desc : Toggles the state of the view more to show more details of the property listing
     */
    toggleMore(){
        this.setState({
            toggleMore : !this.state.toggleMore
        })
    }

    /**
     * @name : toggle
     * @desc : Toggles the state of the tooltips
     */
    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    /**
     * @name : viewDetail
     * @Desc : Modifies the viewDetail attribute of the state which inturn renders the details
     * view of the property listing
     */
    viewDetail(){

        // Toggle the viewDetail state attribute
        this.setState({
            viewDetail : !this.state.viewDetail
        })
    }
}