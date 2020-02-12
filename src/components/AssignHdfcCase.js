import React, { Component, Fragment } from 'react';
import Assign from './Assign';

class AssignHdfcCase extends Component {
    render() {
        const { caseNo, investigator, status, reportStatus, payment, caseValue, investigatorValue, statusValue, reportStatusValue, paymentValue, assignHdfc } = this.props;
        return (
            <div>
                <Fragment>
                    <h1>Assign cases to particular investigator for hdfc case:</h1>
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
                        <button type="submit" className="btn btn-primary">View Case</button>
                    </form>
                </Fragment>
            </div>
        );
    }
}

export default Assign(AssignHdfcCase);