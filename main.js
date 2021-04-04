inti();
// Connect and fetch from the Covid API Site
function inti() {
  fetch("https://corona.lmao.ninja/v2/countries/Egypt")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //Show All the Data that you received in the console using inspect element
      console.log(data);
      // Put the data that you want on your page
      document.getElementById("flag").src = data.countryInfo.flag;
      document.getElementById("data").innerHTML =
        "<td>" +
        data.active +
        "</td>" +
        "<td>" +
        data.cases +
        "</td>" +
        "<td>" +
        data.critical +
        "</td>";
    });
}

function refreshData() {
  clearData();
}
function clearData() {
  $("#data").empty();
  inti();
}
