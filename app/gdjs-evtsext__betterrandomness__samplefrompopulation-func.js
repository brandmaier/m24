
if (typeof gdjs.evtsExt__BetterRandomness__sampleFromPopulation !== "undefined") {
  gdjs.evtsExt__BetterRandomness__sampleFromPopulation.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BetterRandomness__sampleFromPopulation = {};
gdjs.evtsExt__BetterRandomness__sampleFromPopulation.idToCallbackMap = new Map();
gdjs.evtsExt__BetterRandomness__sampleFromPopulation.GDNPCObjects1= [];
gdjs.evtsExt__BetterRandomness__sampleFromPopulation.GDNPCObjects2= [];


gdjs.evtsExt__BetterRandomness__sampleFromPopulation.userFunc0xa0d3a0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {gdjs.RuntimeObject} */
let npc = eventsFunctionContext.getArgument("NPC");

npc.getVariables().get("age").setValue(100);


};
gdjs.evtsExt__BetterRandomness__sampleFromPopulation.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("NPC"), gdjs.evtsExt__BetterRandomness__sampleFromPopulation.GDNPCObjects1);

const objects = gdjs.evtsExt__BetterRandomness__sampleFromPopulation.GDNPCObjects1;
gdjs.evtsExt__BetterRandomness__sampleFromPopulation.userFunc0xa0d3a0(runtimeScene, objects, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__BetterRandomness__sampleFromPopulation.func = function(runtimeScene, NPC, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"NPC": NPC
},
  _objectArraysMap: {
"NPC": gdjs.objectsListsToArray(NPC)
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

gdjs.evtsExt__BetterRandomness__sampleFromPopulation.GDNPCObjects1.length = 0;
gdjs.evtsExt__BetterRandomness__sampleFromPopulation.GDNPCObjects2.length = 0;

gdjs.evtsExt__BetterRandomness__sampleFromPopulation.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__BetterRandomness__sampleFromPopulation.GDNPCObjects1.length = 0;
gdjs.evtsExt__BetterRandomness__sampleFromPopulation.GDNPCObjects2.length = 0;


return;
}

gdjs.evtsExt__BetterRandomness__sampleFromPopulation.registeredGdjsCallbacks = [];