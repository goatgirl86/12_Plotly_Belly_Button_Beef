// Line Graph
Plotly.newPlot("plotArea", [{x: [5,8,6,9,18,11], y: [1,6,9,5,13,4]}]);

// Bar Graph 
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", [trace], layout);


// Pie Graph

   var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);


// Scatter Plot

   var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 6, 3, 6, 1],
  
    mode: 'markers',
    type: 'scatter',
  
    name: 'Team A',
    text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
    marker: { size: 12 }
  
  };
  
  
  var trace2 = {
  
    x: [1.5, 2.5, 3.5, 4.5, 5.5],
    y: [4, 1, 7, 1, 4],
  
    mode: 'markers',
    type: 'scatter',
    name: 'Team B',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    marker: { size: 12 }
  
  };
  
  
  var data = [ trace1, trace2 ];
  
  var layout = {
      xaxis: {
      range: [ 0.75, 5.25 ]
    },
  
    yaxis: {
      range: [0, 8]
    },
  
    title:'Data Labels Hover'
  };
  
  Plotly.newPlot("plotArea", data, layout);
  
  var numbers = [0,2,4,6,8];
  var plus5 = numbers.map(function(num){
    return num+5
  });
  console.log(plus5)

  var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPop = cities.map(function(pop){
    return pop.population;
});
console.log(cityPop);


var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);


var familyAge = [2,3,39,37,9];
 
var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});

console.log(familyAge)

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var Speciess = words.filter(function(ssp){
   return ssp.startsWith("s")
});

console.log(Speciess)

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1)

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );