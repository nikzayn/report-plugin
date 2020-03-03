import React, { Component } from 'react';
import axios from 'axios';

const Assign = (WrappedComponent) => {
    class AssignCase extends Component {
        constructor(props) {
            super(props);
            this.state = {
                caseNo: "",
                investigator: "",
                status: "",
                reportStatus: "",
                payment: "",
                open: false,
                checkFile: "",

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

        openModal = () => {
            this.setState({
                open: !this.state.open
            })
        }

        checkFileValue = (e) => {
            this.setState({
                checkFile: e.target.value
            })
        }

        //assign hdfc case
        assignSubmitHdfc = (e) => {
            e.preventDefault();
            const { caseNo, investigator, status, reportStatus, payment } = this.state;
            const assignHdfc = { caseNo, investigator, status, reportStatus, payment };

            axios.post('http://localhost:8080/assignHdfc', assignHdfc)
                .then(() => console.log('Assigned Successfully'))
                .catch(err => {
                    console.error(err);
                });
        }

        //assign royal case
        assignSubmitRoyal = (e) => {
            e.preventDefault();
            const { caseNo, investigator, status, reportStatus, payment } = this.state;
            const assignRoyal = { caseNo, investigator, status, reportStatus, payment };

            axios.post('http://localhost:8080/assignRoyal', assignRoyal)
                .then(() => console.log('Assigned Successfully'))
                .catch(err => {
                    console.error(err);
                });
        }


        //view hdfc submit
        viewHdfcSubmit = (e) => {
            e.preventDefault();

            const { checkFile } = this.state;
            const viewHdfc = { checkFile };

            axios.post('http://localhost:8080/postCase', viewHdfc)
                .then(() => console.log('Assigned Successfully'))
                .catch(err => {
                    console.error(err);
                });
        }

        //submitHdfcStatus
        submitHdfcStatus = (e) => {
            e.preventDefault();

            const {status, reportStatus, payment} = this.state;
            const submitHdfcStatus = {status, reportStatus, payment};

            axios.post('http://localhost:8080/submitHdfc', submitHdfcStatus)
            .then(() => console.log('submit Hdfc case successfully'))
            .catch(err => console.log(err));
        }


        render() {
            return (
                <WrappedComponent
                    caseNo={this.state.caseNo}
                    investigator={this.state.investigator}
                    status={this.state.status}
                    reportStatus={this.state.reportStatus}
                    payment={this.state.payment}
                    open={this.state.open}
                    checkFile={this.state.checkFile}

                    caseValue={this.caseValue}
                    investigatorValue={this.investigatorValue}
                    statusValue={this.statusValue}
                    reportStatusValue={this.reportStatusValue}
                    paymentValue={this.paymentValue}
                    openModal={this.openModal}

                    assignHdfc={this.assignSubmitHdfc}
                    assignRoyal={this.assignSubmitRoyal}

                    viewHdfcSubmit={this.viewHdfcSubmit}
                    checkFileValue={this.checkFileValue}

                    submitHdfcStatus={this.submitHdfcStatus}
                />
            );
        }
    }
    return AssignCase;
}

export default Assign;