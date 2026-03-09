
if (typeof gdjs.evtsExt__BetterRandomness__DownloadFile !== "undefined") {
  gdjs.evtsExt__BetterRandomness__DownloadFile.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BetterRandomness__DownloadFile = {};
gdjs.evtsExt__BetterRandomness__DownloadFile.idToCallbackMap = new Map();


gdjs.evtsExt__BetterRandomness__DownloadFile.userFunc0x984aa8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/*
// Create a Blob object with the numberTable content
let playerObject = runtimeScene.getObjects("Player")[0]; // Get the first instance of Player

let werteVar = playerObject.getVariables().get("gesammelte_werte"); // Get the "werte" array variable

// Convert the structure variable to a JavaScript array of numbers
let arraySize = werteVar.getChildrenCount(); // Get the number of elements
let numberArray = [];

for (let i = 0; i < arraySize; i++) {
    let item = werteVar.getChild(i); // Access the indexed child
    numberArray.push(item.getAsNumber()); // Convert to number and store
}

// Convert the array to a CSV string
let csvContent = numberArray.join(","); // Create CSV format (comma-separated)

// Convert CSV string to a Blob
let blob = new Blob([csvContent], { type: "text/csv" });
*/
//const blob = new Blob("1", {tye: 'text/plain'});

let playerObject = runtimeScene.getObjects("Player")[0]; // Get the first instance of Player

let dataTable = playerObject.getVariables().get("DataTable");
let rowCount = dataTable.getChildrenCount();
let csvContent = "ID,Name,Score,Handedness,Age\n";

for (let i = 0; i < rowCount; i++) {
    let row = dataTable.getChild(i);
    let id = i+1; //row.getChild("ID").getAsNumber();
    let name = row.getChild("Name").getAsString();
    let score = row.getChild("Score").getAsNumber();
    let handedness = row.getChild("Handedness").getAsNumber();
    let age = row.getChild("Age").getAsNumber();

    csvContent += `${id},${name},${score},${handedness},${age}\n`;
}

// Convert CSV string to a Blob
let blob = new Blob([csvContent], { type: "text/csv" });

// -------- DOWNLOAD LINK ------

// Create an invisible download link
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'numbers.txt'; // File name for the downloaded file
link.click(); // Simulate a click to start the download
};
gdjs.evtsExt__BetterRandomness__DownloadFile.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__BetterRandomness__DownloadFile.userFunc0x984aa8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__BetterRandomness__DownloadFile.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BetterRandomness"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BetterRandomness"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BetterRandomness__DownloadFile.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__BetterRandomness__DownloadFile.registeredGdjsCallbacks = [];