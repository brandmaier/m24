
if (typeof gdjs.evtsExt__BetterRandomness__critT !== "undefined") {
  gdjs.evtsExt__BetterRandomness__critT.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BetterRandomness__critT = {};
gdjs.evtsExt__BetterRandomness__critT.idToCallbackMap = new Map();
gdjs.evtsExt__BetterRandomness__critT.GDdfObjects1= [];
gdjs.evtsExt__BetterRandomness__critT.GDdfObjects2= [];


gdjs.evtsExt__BetterRandomness__critT.userFunc0xcfade0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
let crit = [12.7065, 4.3026, 3.1824, 2.7764, 2.5706, 2.4469, 2.3646, 2.306, 2.2621, 2.2282,
2.201, 2.1788, 2.1604, 2.1448, 2.1314, 2.1199, 2.1098, 2.1009, 2.093, 2.086]

let df = eventsFunctionContext.getArgument("df") 

if ((df-1) <= 20) {
    return crit[df-1];
} else if ((df-1) > 100) {
    // bad approximation
    return (1.96);
} else {
    // bad linear approximation
    2.086 - (2.086-1.96)/80*(df-20)
}
};
gdjs.evtsExt__BetterRandomness__critT.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__BetterRandomness__critT.userFunc0xcfade0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__BetterRandomness__critT.func = function(runtimeScene, df, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"df": df
},
  _objectArraysMap: {
"df": gdjs.objectsListsToArray(df)
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

gdjs.evtsExt__BetterRandomness__critT.GDdfObjects1.length = 0;
gdjs.evtsExt__BetterRandomness__critT.GDdfObjects2.length = 0;

gdjs.evtsExt__BetterRandomness__critT.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__BetterRandomness__critT.GDdfObjects1.length = 0;
gdjs.evtsExt__BetterRandomness__critT.GDdfObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__BetterRandomness__critT.registeredGdjsCallbacks = [];