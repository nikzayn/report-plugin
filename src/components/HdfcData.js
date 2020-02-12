import React, { Component, Fragment } from 'react';
import GettingInput from './GettingInput';

import { Modal, ModalHeader } from 'reactstrap';

class HdfcData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    openModal = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        const { file, claim, place, title, date, remarks, investigator, status, reportStatus, payment,
            fileValue, claimValue, placeValue, titleValue, dateValue, remarksValue, investigatorValue, statusValue, reportStatusValue, paymentValue,
            hdfcValue
        } = this.props;

        return (
            <div>
                <h1>HDFC Entry</h1>
                <br />
                <Fragment>
                    <form onSubmit={hdfcValue}>
                        <div className="form-group">
                            <label htmlFor="file no">File No.</label>
                            <input type="text"
                                value={file}
                                className="form-control"
                                aria-describedby="file no"
                                onChange={fileValue}
                                placeholder="NCR 3510"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="claim no">Claim No.</label>
                            <input type="text"
                                value={claim}
                                className="form-control"
                                aria-describedby="claim no"
                                onChange={claimValue}
                                placeholder="C230013125953"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="approved">State</label>
                            <input type="text"
                                value={place}
                                className="form-control"
                                aria-describedby="state"
                                onChange={placeValue}
                                placeholder="NCR"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="case title">Case Title</label>
                            <input type="text"
                                value={title}
                                className="form-control"
                                aria-describedby="case title"
                                onChange={titleValue}
                                placeholder="Shafik Ahmed Vs Gaurav Kr."
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input type="date"
                                value={date}
                                className="form-control"
                                aria-describedby="date"
                                onChange={dateValue}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="remarks">Remarks</label>
                            <textarea
                                value={remarks}
                                className="form-control"
                                aria-describedby="remarks"
                                onChange={remarksValue}
                                placeholder="Insured Part Investigation"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inv name">Investigator Name</label>
                            <input type="text"
                                value={investigator}
                                className="form-control"
                                aria-describedby="investigator name"
                                onChange={investigatorValue}
                                placeholder="Vijayan"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <input type="text"
                                value={status}
                                className="form-control"
                                aria-describedby="status"
                                onChange={statusValue}
                                placeholder="Completed or not completed"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reportStatus">Report Status</label>
                            <input type="text"
                                value={reportStatus}
                                className="form-control"
                                aria-describedby="reportStatus"
                                onChange={reportStatusValue}
                                placeholder="reportStatus"
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
                            />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary" onClick={this.openModal}>Submit</button>
                    </form>
                    <Modal isOpen={this.state.open} toggle={this.openModal} className='modal-lg modal-dialog-centered'>
                        <ModalHeader toggle={this.openModal}>Case Details:</ModalHeader>
                        <div className="m-5 p-5">
                            <div className="text-center justify-content-center align-items-center">
                                <h3>File No. : {file}</h3>
                                <h3>Claim No. : {claim}</h3>
                                <h3>State : {place}</h3>
                                <h3>Case Title : {title}</h3>
                                <h3>Date : {date}</h3>
                                <h3>Remarks : {remarks}</h3>
                            </div>
                        </div>
                    </Modal>
                </Fragment>
            </div>
        );
    }
}

export default GettingInput(HdfcData);