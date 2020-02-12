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


        render() {
            return (
                <WrappedComponent 
                    caseNo={this.state.caseNo}
                    investigator={this.state.investigator}
                    status={this.state.status}
                    reportStatus={this.state.reportStatus}
                    payment={this.state.payment}

                    caseValue={this.caseValue}
                    investigatorValue={this.investigatorValue}
                    statusValue={this.statusValue}
                    reportStatusValue={this.reportStatusValue}
                    paymentValue={this.paymentValue}

                    assignHdfc={this.assignSubmitHdfc}
                    assignRoyal={this.assignSubmitRoyal}
                />
            );
        }
    }
    return AssignCase;
}

export default Assign;