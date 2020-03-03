import React, { Component, Fragment } from 'react';
import GettingInput from './GettingInput';

import { Modal, ModalHeader } from 'reactstrap';

class HdfcData extends Component {
    render() {
        const { file, claim, place, title, date, remarks, open,
            fileValue, claimValue, placeValue, titleValue, dateValue, remarksValue,
            hdfcValue, openModal
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
                        <br />
                        <button type="submit" className="btn btn-primary" onClick={openModal}>Submit</button>
                    </form>
                    <Modal isOpen={open} toggle={openModal} className='modal-lg modal-dialog-centered'>
                        <ModalHeader toggle={openModal}>Case Details:</ModalHeader>
                        <div className="m-5 p-5">
                            <div className="text-center justify-content-center align-items-center">
                                <h3>File No. : <span style={{color: "red"}}>{file}</span></h3>
                                <h3>Claim No. : <span style={{color: "red"}}>{claim}</span></h3>
                                <h3>State : <span style={{color: "red"}}>{place}</span></h3>
                                <h3>Case Title : <span style={{color: "red"}}>{title}</span></h3>
                                <h3>Date : <span style={{color: "red"}}>{date}</span></h3>    
                                <h3>Remarks : <span style={{color: "red"}}>{remarks}</span></h3>
                            </div>
                        </div>
                    </Modal>
                </Fragment>
            </div>
        );
    }
}

export default GettingInput(HdfcData);