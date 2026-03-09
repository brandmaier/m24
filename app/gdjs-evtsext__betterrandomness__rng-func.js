
if (typeof gdjs.evtsExt__BetterRandomness__RNG !== "undefined") {
  gdjs.evtsExt__BetterRandomness__RNG.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BetterRandomness__RNG = {};
gdjs.evtsExt__BetterRandomness__RNG.idToCallbackMap = new Map();


gdjs.evtsExt__BetterRandomness__RNG.userFunc0xa26248 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
 let u = 0;
 let v = 0;
  while(u == 0) u = Math.random(); // exclude 0
  while(v == 0) v = Math.random(); // exclude 0
  let number = Math.sqrt( -2.0 * Math.log(u) ) * Math.cos( 2.0 * Math.PI * v );
 
 // number = number 0; //eventsFunctionContext.getArgument("sd")  + eventsFunctionContext.getArgument("mean");

 let mod = eventsFunctionContext.getArgument("mod") ;
 // number = number + ((mod+3000)/6000)*50;

  if (number < 0) number = 0;
  if (number > 100) number = 100;
  
  //runtimeScene.getVariables().get("x").setNumber(number)
  runtimeScene.getVariablesForExtension("BetterRandomness").get("x").setNumber(number)
 console.log("Set number!");

};
gdjs.evtsExt__BetterRandomness__RNG.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__BetterRandomness__RNG.userFunc0xa26248(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__BetterRandomness__RNG.func = function(runtimeScene, mean, sd, mod, parentEventsFunctionContext) {
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
if (argName === "mod") return mod;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BetterRandomness__RNG.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__BetterRandomness__RNG.registeredGdjsCallbacks = [];