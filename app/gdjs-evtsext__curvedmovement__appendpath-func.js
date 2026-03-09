
if (typeof gdjs.evtsExt__CurvedMovement__AppendPath !== "undefined") {
  gdjs.evtsExt__CurvedMovement__AppendPath.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CurvedMovement__AppendPath = {};
gdjs.evtsExt__CurvedMovement__AppendPath.idToCallbackMap = new Map();


gdjs.evtsExt__CurvedMovement__AppendPath.userFunc0x120eaa0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const modifiedPathName = eventsFunctionContext.getArgument("ModifiedPathName");
const addedPathName = eventsFunctionContext.getArgument("AddedPathName");
/** @type {Map<string, gdjs.__curvedMovementExtension.CurvedPath>} */
const curvedPaths = runtimeScene.__curvedMovementExtension.curvedPaths;

let addedPath = curvedPaths.get(addedPathName);
if (addedPath) {
    let modifiedPath = curvedPaths.get(modifiedPathName);
    if (!modifiedPath) {
        modifiedPath = new gdjs.__curvedMovementExtension.CurvedPath();
        curvedPaths.set(modifiedPathName, modifiedPath);
    }
    modifiedPath.append(addedPath);
}
};
gdjs.evtsExt__CurvedMovement__AppendPath.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CurvedMovement__AppendPath.userFunc0x120eaa0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__CurvedMovement__AppendPath.func = function(runtimeScene, ModifiedPathName, AddedPathName, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CurvedMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CurvedMovement"),
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
if (argName === "ModifiedPathName") return ModifiedPathName;
if (argName === "AddedPathName") return AddedPathName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CurvedMovement__AppendPath.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CurvedMovement__AppendPath.registeredGdjsCallbacks = [];