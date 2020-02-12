const express = require('express');
const cors = require('cors');
const makeDir = require('make-dir');
const xlsx = require('xlsx');
const Excel = require('exceljs');

const path = require("path")
const fs = require("fs")

const app = new express();

const port = 8080;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


let hdfcCases = [], royalCases = [], assignHdfc = [];

//Post Form Data for HDFC
app.post('/hdfcSubmit', function (req, res) {
    const newCase = {
        File: req.body.file,
        Claim: req.body.claim,
        State: req.body.place,
        Case_Title: req.body.title,
        Date: req.body.date,
        Remarks: req.body.remarks,
        Investigator_Name: req.body.investigator,
        Status: req.body.status,
        Report_Status: req.body.reportStatus,
        Payment_Remarks: req.body.payment
    };

    hdfcCases.push(newCase);

    console.log(hdfcCases);
    //Create particular folder for file no
    (async () => {
        const path = await makeDir(`/home/vecturum/hdfc/server/HDFC-CASES/${newCase.File}`);
    })();


    //Json to Xlsx
    function jsonToXlx(val) {
        //Create empty sheetnames and sheets
        var newWB = xlsx.utils.book_new()

        //Push json data to sheets
        var newWS = xlsx.utils.json_to_sheet(hdfcCases)

        xlsx.utils.book_append_sheet(newWB, newWS, "name")//workbook name as param

        xlsx.writeFile(newWB, "hdfc-master.xlsx")//file name as param
    }

    jsonToXlx(hdfcCases);
});


//Post Form Data from royal 
app.post('/royalSubmit', function (req, res) {
    const newCase = {
        File: req.body.file,
        Claim: req.body.claim,
        State: req.body.place,
        Case_Title: req.body.title,
        Date: req.body.date,
        Remarks: req.body.remarks,
        Investigator_Name: req.body.investigator,
        Status: req.body.status,
        Report_Status: req.body.reportStatus,
        Payment_Remarks: req.body.payment
    };

    royalCases.push(newCase);

    //Create particular folder for file no
    (async () => {
        const path = await makeDir(`/home/vecturum/hdfc/server/ROYAL-CASES/${newCase.File}`);
    })();


    //Json to Xlsx
    function jsonToXlx(royalCases) {
        var files = []
        for (each in royalCases) {
            files.push(royalCases[each])
        }
        var obj = files.map((e) => {
            return e
        })


        var newWB = xlsx.utils.book_new()

        var newWS = xlsx.utils.json_to_sheet(obj)

        xlsx.utils.book_append_sheet(newWB, newWS, "name")//workbook name as param

        xlsx.writeFile(newWB, "royal-master.xlsx")//file name as param
    }

    jsonToXlx(royalCases);
});



//Assign cases to particluar investogator hdfc
app.post('/assignHdfc', (req, res) => {
    const assignNew = {
        File: req.body.caseNo,
        Investigator_Name: req.body.investigator,
        Status: req.body.status,
        Report_Status: req.body.reportStatus,
        Payment_Remarks: req.body.payment
    };


    var workbook = xlsx.readFile('./hdfc-master.xlsx');// ./assets is where your relative path directory where excel file is, if your excuting js file and excel file in same directory just igore that part
    var sheet_name_list = workbook.SheetNames; // SheetNames is an ordered list of the sheets in the workbook
    data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]); //if you have multiple sheets
    // console.log(data[1].File);
    let fileData = 0;
    data.forEach((file) => {
        fileData = file.File;
        if (assignNew.File === fileData) {
            console.log("Matched");
            UpdateXlsx();
        } else {
            console.log("not matched");
        }
    })
    assignHdfc.push(assignNew);
    console.log(assignHdfc);


})





app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})