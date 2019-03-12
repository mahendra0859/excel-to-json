const excelToJson = require('convert-excel-to-json');
//  Simple conversion
const result = excelToJson({
    sourceFile: 'Untitled spreadsheet.xlsx',
    // columnToKey: {
    //     A: 'name',
    //     B: 'email',
    //     C: 'sectionId'
    // }
    columnToKey: {
        '*': '{{columnHeader}}'
    }
});
console.log("Simple conversion result", result);

// Converting an xlsx that you have as a Buffer
// const fs = require('fs')
// const result1 = excelToJson({
//     source: fs.readFileSync('Untitled spreadsheet.xlsx'),
//     columnToKey: {
//         A: 'name',
//         B: 'email',
//         C: 'sectionId'
//     }
// });
// console.log("Buffer conversion result", result1);
