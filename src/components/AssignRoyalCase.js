import React, { Component, Fragment } from 'react';
// import axios from 'axios';


class AssignHdfcCase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caseNo: "",
            investigator: "",
            status: "",
            reportStatus: "",
            payment: ""
        }
    }
        caseValue = (e) => {
            this.setState({
                caseNo: e.target.value
            })
        }

        investigatorValue = (e) => {
            this.setState({
                investigator: e.target.value
            })
        }

        statusValue = (e) => {
            this.setState({
                status: e.target.value
            })
        }

        reportStatusValue = (e) => {
            this.setState({
                reportStatus: e.target.value
            })
        }

        paymentValue = (e) => {
            this.setState({
                payment: e.target.value
            })
        }


    render() {
        const {caseNo, investigator, status, reportStatus, payment} = this.state;
        return (
            <div>
                <Fragment>
                    <h1>Assign cases to particular investigator for royal case:</h1>
                    <form onSubmit={this.submitCase}>
                        <div className="form-group">
                            <label htmlFor="file no">File No.</label>
                            <input type="text"
                                value={caseNo}
                                className="form-control"
                                aria-describedby="file no"
                                onChange={this.caseValue}
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
                                onChange={this.investigatorValue}
                                placeholder="Vijayan"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <input type="text"
                                value={status}
                                className="form-control"
                                aria-describedby="status"
                                onChange={this.statusValue}
                                placeholder="Completed or not completed"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reportStatus">Report Status</label>
                            <input type="text"
                                value={reportStatus}
                                className="form-control"
                                aria-describedby="reportStatus"
                                onChange={this.reportStatusValue}
                                placeholder="reportStatus"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="paymentRemarks">Payment Remarks</label>
                            <input type="text"
                                value={payment}
                                className="form-control"
                                aria-describedby="payment"
                                onChange={this.paymentValue}
                                placeholder="Remarks"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">View Case</button>
                        <br />
                        <br />
                        <br />
                        {/* <div className="container">
                            <div className="row">
                                <div className="col-sm">

                                </div>
                            </div>
                        </div> */}
                    </form>
                </Fragment>
            </div>
        );
    }
}

export default AssignHdfcCase;