var EhKey = [169157,53896,143065];
// For drawing the lines
var fire = [0.146310733,0.566383726,0.647062];
var waste = [282,350,411,502,635,809,947,1402,3700,5267];
var police = [168,170,178,190,203,276,408,547,675,734];
var recreation = [40,20,10,16,24,38,74,167,508,784];
var etc = [6,3,2,2,7,26,82,172,312,433];


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: EhKey,
    datasets: [
      {
  data: fire,
  label: "fire",
  borderColor: "#3e95cd",
  fill: false
},
{
  data: waste,
  label: "waste",
  borderColor: "#3e95cd",
  fill: false
},
{
  data: police,
  label: "police",
  borderColor: "#3e95cd",
  fill: false
},
{
  data: recreation,
  label: "recreation",
  borderColor: "#3e95cd",
  fill: false
},
{
  data: etc,
  label: "etc",
  borderColor: "#3e95cd",
  fill: false
}
    ]
  }
});


var ctx = document.getElementById("myChart");

var dataset = "/Users/akshaynagar/Desktop/00-Starting point/data_4_21_2.json";
var featureGroup;


$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {

    }).addTo(map);

    // quite similar to _.each
    featureGroup.eachLayer(eachFeatureFunction);
  });
});
