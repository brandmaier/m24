
if (typeof gdjs.evtsExt__BetterRandomness__Function !== "undefined") {
  gdjs.evtsExt__BetterRandomness__Function.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BetterRandomness__Function = {};
gdjs.evtsExt__BetterRandomness__Function.idToCallbackMap = new Map();


gdjs.evtsExt__BetterRandomness__Function.userFunc0xd6f8b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
let mean =  eventsFunctionContext.getArgument("mean");
let mean0 = eventsFunctionContext.getArgument("mean0");
let sd =  eventsFunctionContext.getArgument("sd");
let n =  eventsFunctionContext.getArgument("n")

let t = (mean-mean0)/Math.sqrt(sd/n)

eventsFunctionContext.returnValue = t;

};
gdjs.evtsExt__BetterRandomness__Function.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__BetterRandomness__Function.userFunc0xd6f8b0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__BetterRandomness__Function.func = function(runtimeScene, mean, mean0, sd, n, parentEventsFunctionContext) {
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
if (argName === "mean") return mean;
if (argName === "mean0") return mean0;
if (argName === "sd") return sd;
if (argName === "n") return n;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BetterRandomness__Function.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__BetterRandomness__Function.registeredGdjsCallbacks = [];