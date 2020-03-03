import React, { Component, Fragment } from 'react';
import Assign from './Assign';

import { Modal, ModalHeader } from 'reactstrap';

class AssignRoyalCase extends Component {
    render() {
        const { caseNo, investigator, open,
            caseValue, investigatorValue, openModal, assignHdfc } = this.props;
        return (
            <div>
                <Fragment>
                    <h4>Assign cases to particular investigator for royal case:</h4>
                    <form onSubmit={assignHdfc}>
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
                            <label htmlFor="inv name">Investigator Name</label>
                            <input type="text"
                                value={investigator}
                                className="form-control"
                                aria-describedby="investigator name"
                                onChange={investigatorValue}
                                placeholder="Vijayan"
                            />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary" onClick={openModal}>Submit Assigned Case</button>
                    </form>
                    <Modal isOpen={open} toggle={openModal} className='modal-lg modal-dialog-centered'>
                        <ModalHeader toggle={openModal}>Case Details:</ModalHeader>
                        <div className="m-5 p-5">
                            <div className="text-center justify-content-center align-items-center">
                                <h3>You have succesfully assigned <span style={{ color: "red" }}>{caseNo}</span> file no. to
                                investigator: <span style={{ color: "red" }}>{investigator}</span></h3>
                            </div>
                        </div>
                    </Modal>
                </Fragment>
            </div>
        );
    }
}

export default Assign(AssignRoyalCase);