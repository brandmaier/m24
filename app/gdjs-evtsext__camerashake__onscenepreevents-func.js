
if (typeof gdjs.evtsExt__CameraShake__onScenePreEvents !== "undefined") {
  gdjs.evtsExt__CameraShake__onScenePreEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__onScenePreEvents = {};
gdjs.evtsExt__CameraShake__onScenePreEvents.idToCallbackMap = new Map();


gdjs.evtsExt__CameraShake__onScenePreEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString() == "__BaseLayer");
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), 0) - (eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber()), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), 0) - (eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber()), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.camera.getCameraRotation(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), 0) - (eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber()), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(4).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.camera.getCameraZoom(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), 0) / eventsFunctionContext.localVariables[0].getFromIndex(4).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), 0);
}
}

}


};gdjs.evtsExt__CameraShake__onScenePreEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const keyIteratorReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8);
const valueIteratorReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7);
const iterableReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6);
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getChild("Shakable").getAsBoolean();
}
if (isConditionTrue_0)
{
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getChild("CameraDeltaX").getAsNumber());
}
{eventsFunctionContext.localVariables[0].getFromIndex(2).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getChild("CameraDeltaY").getAsNumber());
}
{eventsFunctionContext.localVariables[0].getFromIndex(3).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getChild("CameraDeltaAngle").getAsNumber());
}
{eventsFunctionContext.localVariables[0].getFromIndex(4).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getChild("CameraDeltaZoom").getAsNumber());
}
{eventsFunctionContext.localVariables[0].getFromIndex(0).setString(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString());
}

{ //Subevents: 
gdjs.evtsExt__CameraShake__onScenePreEvents.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


};gdjs.evtsExt__CameraShake__onScenePreEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("ActualLayerName", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("CameraDeltaX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("CameraDeltaY", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("CameraDeltaAngle", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("CameraDeltaZoom", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePreEvents.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__CameraShake__onScenePreEvents.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CameraShake__IsShaking.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePreEvents.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CameraShake__onScenePreEvents.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CameraShake"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CameraShake"),
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


gdjs.evtsExt__CameraShake__onScenePreEvents.eventsList3(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraShake__onScenePreEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__CameraShake__onScenePreEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__CameraShake__onScenePreEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePreEventsCallback(gdjs.evtsExt__CameraShake__onScenePreEvents.registeredGdjsCallbacks[gdjs.evtsExt__CameraShake__onScenePreEvents.registeredGdjsCallbacks.length - 1]);
