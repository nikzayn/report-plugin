var Excel = require("exceljs");

function doTest() {
    var options = {
        filename: "./test.xls", // existing filepath
        useStyles: true, // Default
        useSharedStrings: true // Default
    };

    var workbook = new Excel.stream.xlsx.WorkbookWriter(options);
    var sheet = workbook.addWorksheet("Sheet1");
    var worksheet = workbook.getWorksheet("Sheet1");

    worksheet.columns = [
        { header: "Id", key: "id", width: 10 },
        { header: "Name", key: "name", width: 32 },
        { header: "D.O.B", key: "value", width: 10 }
    ];


    worksheet.addRow({ id: 1, name: "John Doe", value: '1997' });
    worksheet.addRow({ id: 2, name: "Jane Doe", value: '2001' });
    worksheet.commit(); // Need to commit the changes to the worksheet

    workbook.commit(); // Finish the workbook


};

doTest();