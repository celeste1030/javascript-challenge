// from data.js
var tableData = data;

// YOUR CODE HERE!
// append data to html table

var button = d3.select("#filter-btn");
var form = d3.select("#form-control");
var tbody = d3.select("tbody");

function fillTable(aliens) {
    tbody.html("");
    aliens.forEach(function (sighting) {
        //console.log(sighting);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function ([key, value]) {
            //console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};



fillTable(tableData);


button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    // Get the value property of the input element


    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);

    var filteredData = tableData

    if (inputDate) {

        filteredData = filteredData.filter(sighting => sighting.datetime === inputDate);
    }

    if (inputCity) {

        filteredData = filteredData.filter(sighting => sighting.city === inputCity);
    }

    if (inputState) {

        filteredData = filteredData.filter(sighting => sighting.state === inputState);
    }

    if (inputCountry) {

        filteredData = filteredData.filter(sighting => sighting.country === inputCountry);
    }

    if (inputShape) {

        filteredData = filteredData.filter(sighting => sighting.shape === inputShape);
    }


    fillTable(filteredData);

    console.log(filteredData);

}