import React, { Component, Fragment } from 'react';
import Assign from './Assign';

import { Modal, ModalHeader } from 'reactstrap';

class SubmitHdfc extends Component {
    render() {
        const { caseNo, status, reportStatus, payment, open,
            caseValue, statusValue, reportStatusValue, paymentValue, openModal, submitHdfcStatus } = this.props;
        return (
            <div>
                <Fragment>
                    <h4>Submit Hdfc Case:</h4>
                    <form onSubmit={submitHdfcStatus}>
                        <div className="form-group">
                            <label htmlFor="file no">File No.</label>
                            <input type="text"
                                value={caseNo}
                                className="form-control"
                                aria-describedby="file no"
                                onChange={caseValue}
                                placeholder="NCR 3510"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <input type="text"
                                value={status}
                                className="form-control"
                                aria-describedby="status"
                                onChange={statusValue}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reportStatus">Report Status</label>
                            <input type="text"
                                value={reportStatus}
                                className="form-control"
                                aria-describedby="reportStatus"
                                onChange={reportStatusValue}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="paymentRemarks">Payment Remarks</label>
                            <input type="text"
                                value={payment}
                                className="form-control"
                                aria-describedby="payment"
                                onChange={paymentValue}
                                placeholder="Remarks"
                                required
                            />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary" onClick={openModal}>Submit Hdfc Case</button>
                    </form>
                </Fragment>
                <Modal isOpen={open} toggle={openModal} className='modal-lg modal-dialog-centered'>
                    <ModalHeader toggle={openModal}>Case Details:</ModalHeader>
                    <div className="m-5 p-5">
                        <div className="text-center justify-content-center align-items-center">
                            <h3>File No. : <span style={{ color: "red" }}>{caseNo}</span></h3>
                            <h3>Status : <span style={{ color: "red" }}>{status}</span></h3>
                            <h3>Report Status : <span style={{ color: "red" }}>{reportStatus}</span></h3>
                            <h3>Payment Remarks : <span style={{ color: "red" }}>{payment}</span></h3>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Assign(SubmitHdfc);