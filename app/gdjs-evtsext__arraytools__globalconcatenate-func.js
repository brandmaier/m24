
if (typeof gdjs.evtsExt__ArrayTools__GlobalConcatenate !== "undefined") {
  gdjs.evtsExt__ArrayTools__GlobalConcatenate.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__GlobalConcatenate = {};
gdjs.evtsExt__ArrayTools__GlobalConcatenate.idToCallbackMap = new Map();


gdjs.evtsExt__ArrayTools__GlobalConcatenate.userFunc0x17cddb8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
const array = eventsFunctionContext.getArgument("Array");
/** @type {gdjs.Variable} */
const otherArray = eventsFunctionContext.getArgument("OtherArray");
/** @type {gdjs.Variable} */
const target = eventsFunctionContext.getArgument("Target");

// Ensure the target is a clean new array
target.castTo("array");
target.clearChildren();

// Copy both arrays inside the new one
for (const variable of array.getAllChildrenArray())
    target.pushVariableCopy(variable);

for (const variable of otherArray.getAllChildrenArray())
    target.pushVariableCopy(variable);

};
gdjs.evtsExt__ArrayTools__GlobalConcatenate.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__GlobalConcatenate.userFunc0x17cddb8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ArrayTools__GlobalConcatenate.func = function(runtimeScene, Array, OtherArray, Target, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ArrayTools"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ArrayTools"),
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
if (argName === "Array") return Array;
if (argName === "OtherArray") return OtherArray;
if (argName === "Target") return Target;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__GlobalConcatenate.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ArrayTools__GlobalConcatenate.registeredGdjsCallbacks = [];