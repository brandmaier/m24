
if (typeof gdjs.evtsExt__BetterRandomness__AddRow !== "undefined") {
  gdjs.evtsExt__BetterRandomness__AddRow.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BetterRandomness__AddRow = {};
gdjs.evtsExt__BetterRandomness__AddRow.idToCallbackMap = new Map();


gdjs.evtsExt__BetterRandomness__AddRow.userFunc0xd229b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);

let playerObject = runtimeScene.getObjects("Player")[0]; // Get the first instance of Player

let dataTable = playerObject.getVariables().get("DataTable"); // Get the data table variable

// Create a new structure (row)
let newRow = new gdjs.Variable();
newRow.getChild("ID").setNumber(1);
newRow.getChild("Name").setString(eventsFunctionContext.getArgument("Name") );
newRow.getChild("Score").setNumber( eventsFunctionContext.getArgument("score") );
newRow.getChild("Handedness").setNumber( eventsFunctionContext.getArgument("Handedness") );
newRow.getChild("Age").setNumber( eventsFunctionContext.getArgument("Age") );

// Append to the data table (array)
dataTable.pushVariableCopy(newRow);
};
gdjs.evtsExt__BetterRandomness__AddRow.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__BetterRandomness__AddRow.userFunc0xd229b0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__BetterRandomness__AddRow.func = function(runtimeScene, score, Name, Handedness, Age, parentEventsFunctionContext) {
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
if (argName === "score") return score;
if (argName === "Name") return Name;
if (argName === "Handedness") return Handedness;
if (argName === "Age") return Age;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BetterRandomness__AddRow.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__BetterRandomness__AddRow.registeredGdjsCallbacks = [];