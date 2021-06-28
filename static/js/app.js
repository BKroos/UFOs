// import the data from file
const tableData = data;
// refer the html table using d3
var tbody = d3.select('tbody');
function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow)=> {
        let row = tbody.append('tr');
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text
        });
    });
}