const express = require('express');
const cors = require('cors');
const makeDir = require("make-dir");
const xlsx = require('xlsx');
const Excel = require('exceljs');
const _ = require('lodash');

const app = new express();

const port = 8080;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


let hdfcCases = [], royalCases = [];
let assignHdfc = [], assignRoyal = [];
let updateAssignHdfc = [], updateAssignRoyal = [];
let reportValue = [];


/*---------------------------------------Hdfc Entry------------------------------------------*/
//Post Form Data for HDFC
app.post('/hdfcSubmit', function (req, res) {
    const newCase = {
        File: req.body.file,
        Claim: req.body.claim,
        State: req.body.place,
        Case_Title: req.body.title,
        Date: req.body.date,
        Remarks: req.body.remarks
    };

    hdfcCases.push(newCase);

    //Create particular folder for file no
    (async () => {
        const path = await makeDir(`/usr/src/app/HDFC-CASES/${newCase.File}`);
        console.log(path);
    })();


    // //Json to Xlsx
    function writeJsonToXlx(hdfcCases) {
        //Create empty sheetnames and sheets
        var newWB = xlsx.utils.book_new()

        //Push json data to sheets
        var newWS = xlsx.utils.json_to_sheet(hdfcCases)
        // hdfcCases.forEach(checkDup => {})

        xlsx.utils.book_append_sheet(newWB, newWS, "name")//workbook name as param

        xlsx.writeFile(newWB, "hdfc-master.xlsx")//file name as param
    }

    writeJsonToXlx(hdfcCases);



});

//To be tested
// app.get('/checkDups', (req, res) => {
//     var workbook = xlsx.readFile('./hdfc-master.xlsx');
//     var sheet_name_list = workbook.SheetNames;
//     data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

//     data.forEach(data => {
//         hdfcCases.forEach(file => {
//             _.isEqual(data.File.sort(), file.File.sort()); 
//         })
//     })
// })








/*---------------------------------------Royal Entry------------------------------------------*/
// Post Form Data from royal 
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
        const path = await makeDir(`/usr/src/app/ROYAL-CASES/${newCase.File}`);
        console.log(path);
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








/*---------------------------------------Assign Data for Hdfc Case----------------------------------------------- */
//Assign cases to particluar investogator hdfc
app.post('/assignHdfc', (req, res) => {
    const assignNew = {
        File: req.body.caseNo,
        Investigator_Name: req.body.investigator,
    };

    assignHdfc.push(assignNew);


    //Read masyer xls file
    var workbook = xlsx.readFile('./hdfc-master.xlsx');
    var sheet_name_list = workbook.SheetNames;
    data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);


    //Overwrite if input file matches the existing file 
    function doTest() {
        var options = {
            filename: "./hdfc-master.xlsx", // existing filepath
            useStyles: true, // Default
            useSharedStrings: true // Default
        };

        var workbook = new Excel.stream.xlsx.WorkbookWriter(options);
        var sheet = workbook.addWorksheet("Sheet1");
        var worksheet = workbook.getWorksheet("Sheet1");

        worksheet.columns = [
            { header: "Investigator_Name", key: "investigator", width: 12 }
        ];



        worksheet.addRow({ case_no: `${assignNew.investigator}` });

        worksheet.commit(); // Need to commit the changes to the worksheet

        workbook.commit(); // Finish the workbook

    };

    data.forEach(elem => {
        if (elem.File === assignNew.File) {
            doTest();
        }
        else{
            console.log('File not found');
        }
    });


});








/*---------------------------------------Assign Data for Royal Case----------------------------------------------- */
//Assign cases to particluar investogator hdfc
app.post('/assignRoyal', (req, res) => {
    const assignNew = {
        File: req.body.caseNo,
        Investigator_Name: req.body.investigator,
        Status: req.body.status,
        Report_Status: req.body.reportStatus,
        Payment_Remarks: req.body.payment
    };

    assignRoyal.push(assignNew);

    //Create empty sheetnames and sheets
    var newWB = xlsx.utils.book_new()

    //Push json data to sheets
    var newWS = xlsx.utils.json_to_sheet(assignRoyal)

    xlsx.utils.book_append_sheet(newWB, newWS, "name")//workbook name as param

    xlsx.writeFile(newWB, "assign-hdfc-master.xlsx")//file name as param

});





//To be tested
// app.post('/postCase', (req, res) => {
//     const viewData = {
//         fileNo: req.body.checkFile,

//     }
// })

// app.get('/getCase', (req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.send(reportValue);
// })




app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})