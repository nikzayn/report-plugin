import React, { Component } from 'react';
import axios from 'axios';

const GettingInput = (WrappedComponent) => {
    class InputLogic extends Component {
        constructor(props) {
            super(props);
            this.state = {
                file: "",
                claim: "",
                place: "",
                title: "",
                date: "",
                remarks: "",
                investigator: "",
                status: "",
                reportStatus: "",
                payment: "",
                open: false
            }
        }


        fileValue = (e) => {
            this.setState({
                file: e.target.value
            })
        }

        claimValue = (e) => {
            this.setState({
                claim: e.target.value
            })
        }

        placeValue = (e) => {
            this.setState({
                place: e.target.value
            })
        }

        titleValue = (e) => {
            this.setState({
                title: e.target.value
            })
        }

        dateValue = (e) => {
            this.setState({
                date: e.target.value
            })
        }

        remarksValue = (e) => {
            this.setState({
                remarks: e.target.value
            })
        }

        inestigatorValue = (e) => {
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


        //Hdfc handle function
        hdfcHandleSubmit = (e) => {
            e.preventDefault();

            const { file, claim, place, title, date, remarks, investigator, status, reportStatus, payment } = this.state;
            const hdfcCase = {
                file, claim, place, title, date, remarks, investigator, status, reportStatus, payment
            }

            axios.post('http://localhost:8080/hdfcSubmit', hdfcCase)
                .then(() => console.log('Case Created'))
                .catch(err => {
                    console.error(err);
                });

        }

        //royal handle function
        royalHandleSubmit = (e) => {
            e.preventDefault();

            const { file, claim, place, title, date, remarks, investigator, status, reportStatus, payment } = this.state;
            const royalCase = {
                file, claim, place, title, date, remarks, investigator, status, reportStatus, payment
            }

            axios.post('http://localhost:8080/royalSubmit', royalCase)
                .then(() => console.log('Case Created'))
                .catch(err => {
                    console.error(err);
                });

        }

        openModal = () => {
            this.setState({
                open: !this.state.open
            })
        }

        render() {
            return <WrappedComponent
                file={this.state.file}
                claim={this.state.claim}
                place={this.state.place}
                title={this.state.title}
                date={this.state.date}
                remarks={this.state.remarks}
                investigator={this.state.investigator}
                status={this.state.status}
                reportStatus={this.state.reportStatus}
                payment={this.state.payment}
                open={this.state.open}

                fileValue={this.fileValue}
                claimValue={this.claimValue}
                placeValue={this.placeValue}
                titleValue={this.titleValue}
                dateValue={this.dateValue}
                remarksValue={this.remarksValue}
                investigatorValue={this.inestigatorValue}
                statusValue={this.statusValue}
                reportStatusValue={this.reportStatusValue}
                paymentValue={this.paymentValue}

                hdfcValue={this.hdfcHandleSubmit}
                royalValue={this.royalHandleSubmit}

                openModal={this.openModal}
            />
        }
    }
    return InputLogic;
}

export default GettingInput;

