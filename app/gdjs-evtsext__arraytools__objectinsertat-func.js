
if (typeof gdjs.evtsExt__ArrayTools__ObjectInsertAt !== "undefined") {
  gdjs.evtsExt__ArrayTools__ObjectInsertAt.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__ObjectInsertAt = {};
gdjs.evtsExt__ArrayTools__ObjectInsertAt.idToCallbackMap = new Map();
gdjs.evtsExt__ArrayTools__ObjectInsertAt.GDObjectObjects1= [];


gdjs.evtsExt__ArrayTools__ObjectInsertAt.userFunc0x1890258 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
const array = eventsFunctionContext.getArgument("Array");
/** @type {gdjs.Variable} */
const target = eventsFunctionContext.getArgument("Target");

// Cast to array to ensure getAllChildrenArray returns the real array
array.castTo("array");

array
    .getAllChildrenArray()
    .splice(eventsFunctionContext.getArgument("Index"), 0, target.clone());

};
gdjs.evtsExt__ArrayTools__ObjectInsertAt.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__ObjectInsertAt.userFunc0x1890258(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ArrayTools__ObjectInsertAt.func = function(runtimeScene, Object, Array, Index, Object, Target, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "Object": gdjs.objectsListsToArray(Object)
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
if (argName === "Index") return Index;
if (argName === "Target") return Target;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ArrayTools__ObjectInsertAt.GDObjectObjects1.length = 0;

gdjs.evtsExt__ArrayTools__ObjectInsertAt.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ArrayTools__ObjectInsertAt.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__ArrayTools__ObjectInsertAt.registeredGdjsCallbacks = [];