function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// D1-1. Create the buildCharts function.
function buildCharts(sample) {
  // D1-2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    //D1-3. Create a variable that holds the samples array. 
    var samples = data.samples;
    //D1-4. Create a variable that filters the samples for the object with the desired sample number.
    var sampleArray = samples.filter(sampleObj => sampleObj.id == sample);
    // D1-5. Create a variable that holds the first sample in the array.
    var firstSample = sampleArray[0];

    //D1- 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuId = firstSample.otu_ids;
    var otuLabel = firstSample.otu_labels;
    var otuValue = firstSample.sample_values;

    // D1-7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
    var yticks = otuId.map(otuId => "OTU " + otuId).slice(0,10).reverse();

    //D1-8. Create the trace for the bar chart. 
    var barData = [
        {
          x: otuValue.slice(0,10).reverse(),
          y: yticks,
          type: "bar",
          orientation: "h",
          // color: "purple",
          text: otuLabel.slice(0,10).reverse()
        }];

    //D1-9. Create the layout for the bar chart. 
    var barLayout = {
     title: "Top 10 Belly Button Bacteria",
    };
   
    //D1-10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout)  
  

  //D2-1. Create the trace for the bubble chart.
    var bubbleData = [
        {
          y: otuValue,
          x: otuId,
          // type: "bubble",
          text: otuLabel,
          mode: "markers",
          marker: {
            color: otuId,
            colorscale: 'Viridis',
            size: otuValue,
          }
        }];

  //D2-2. Create the layout for the bubble chart.
    var bubbleLayout = {
        title: "Bacteria by Sample",
        xaxis: {title: "OTU ID"}, 
        hoverlabel: otuLabel,
        hovermode: "closest",
        };

  // D2-3. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 


       console.log(data);

// D3-1. Create a variable that holds the washing frequency.
  
    var gauge = data.metadata;
      // Filter the data for the object with the desired sample number
    var gaugeArray = gauge.filter(sampleObj => sampleObj.id == sample);
    var gaugeResult = gaugeArray[0]
    var wFreq= parseFloat(gaugeResult.wfreq);

  //D3-2. Create the trace for the gauge chart.
     var gaugeData = [
      {
        value: wFreq,
        type: "indicator",
        title: {text: "<b> Belly Button Washing Frequency </b> <br> Scrubs Per Week </br>"},
        mode: "gauge+number",
        gauge: {
          axis: {range: [null, 10]},
          bar: {color: "black"},
          steps: [
            {range: [0, 2], color: "royalblue"}, 
            {range: [2, 4], color: "palegreen"},
            {range: [4, 6], color: "gold"},
            {range: [6, 8], color: "deeppink"},
            {range: [8, 10], color: "darkmagenta"}
          ],
       }}];

//D3-3. Create the layout for the guage chart.
    var gaugeLayout = { 
        width: 600, 
        height: 450, 
        margin: { t: 0, b: 0 } 
      };

// // D2-3. Use Plotly to plot the data with the layout. 
  Plotly.newPlot("gauge", gaugeData, gaugeLayout); 


  });
}

