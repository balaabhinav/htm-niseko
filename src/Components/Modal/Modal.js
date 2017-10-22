import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const HtmModal = (props) => (
        <div>
            <Modal isOpen={ props.modal } >
                <ModalHeader>{ props.modalType==='enquiry'? "Enquiry Form" : "Book Property" }</ModalHeader>
                <ModalBody>
                    {
                        props.modalType==='book'?
                            (
                                <h5>Would you like to book <i>{ props.listing.name }</i> ?</h5>
                            ) :
                            (
                                <textarea className="form-control" type="textarea" rows="6" placeholder="Please type your enquiry here">

                                </textarea>
                            )
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={ props.closeModal }>{ props.modalType==='book'? "Book now" : "Send" }</Button>{' '}
                    <Button color="secondary" onClick={ props.closeModal }>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )

export default HtmModal;