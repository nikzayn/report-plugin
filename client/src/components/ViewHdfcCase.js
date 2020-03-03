import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Assign from './Assign';

import { Modal, ModalHeader } from 'reactstrap';

class ViewHdfcCase extends Component {

    getCaseDetails = () => {
        axios.get('http://localhost:8080/getCase')
        .then(result => console.log(result.data))
        .catch(err => console.log(err))
    }

    render() {
        const { checkFile, open, status, reportStatus, openModal, viewHdfcSubmit, checkFileValue} = this.props;
        // console.log(this.statusResult);
        return (
            <div>
                <Fragment>
                <form className="form-inline" onSubmit={viewHdfcSubmit}>
                    <h3>Check status of file</h3>
                    <div className="form-group ">
                        <label htmlFor="fileno" className="sr-only">Check case status and report status.</label>
                        <input type="text"
                            value={checkFile}
                            className="form-control"
                            aria-describedby="file no"
                            onChange={checkFileValue}
                            placeholder="Type file no to check"
                            required />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() => {openModal(); this.getCaseDetails();}}>Submit</button>
                </form>
                </Fragment>
                <Modal isOpen={open} toggle={openModal} className='modal-lg modal-dialog-centered'>
                    <ModalHeader toggle={openModal}>Case Details:</ModalHeader>
                    <div className="m-5 p-5">
                        <div className="text-center justify-content-center align-items-center">
                            <h3>Status : <span style={{ color: "red" }}>{status}</span></h3>
                            <h3>Report Status : <span style={{ color: "red" }}>{reportStatus}</span></h3>
                        </div>
                    </div>
                </Modal>
                <br />
                <br />
            </div>
        );
    }
}

export default Assign(ViewHdfcCase);