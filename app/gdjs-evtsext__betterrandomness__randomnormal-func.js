
if (typeof gdjs.evtsExt__BetterRandomness__RandomNormal !== "undefined") {
  gdjs.evtsExt__BetterRandomness__RandomNormal.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BetterRandomness__RandomNormal = {};
gdjs.evtsExt__BetterRandomness__RandomNormal.idToCallbackMap = new Map();


gdjs.evtsExt__BetterRandomness__RandomNormal.userFunc0xbc9910 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
  //console.log("Hallo!");
 let u = 0;
 let v = 0;
  while(u == 0) u = Math.random(); // exclude 0
  while(v == 0) v = Math.random(); // exclude 0
  let number = Math.sqrt( -2.0 * Math.log(u) ) * Math.cos( 2.0 * Math.PI * v );
  // console.log("Hallo 2");
  //number = number / 10.0 + ; 
  //if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
 // console.log("Hallo: "+number);
  number = number * eventsFunctionContext.getArgument("sd")  + eventsFunctionContext.getArgument("mean");
  
  //runtimeScene.getVariables().get("x").setNumber(number)
  runtimeScene.getVariablesForExtension("BetterRandomness").get("x").setNumber(number)
 console.log("Set number!");
};
gdjs.evtsExt__BetterRandomness__RandomNormal.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__BetterRandomness__RandomNormal.userFunc0xbc9910(runtimeScene, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getAsNumber();}
}

}


};

gdjs.evtsExt__BetterRandomness__RandomNormal.func = function(runtimeScene, mean, sd, parentEventsFunctionContext) {
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
if (argName === "sd") return sd;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BetterRandomness__RandomNormal.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__BetterRandomness__RandomNormal.registeredGdjsCallbacks = [];