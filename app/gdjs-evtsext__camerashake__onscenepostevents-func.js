
if (typeof gdjs.evtsExt__CameraShake__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__onScenePostEvents = {};
gdjs.evtsExt__CameraShake__onScenePostEvents.idToCallbackMap = new Map();


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7), "Frequency");
if (isConditionTrue_0) {
{gdjs.evtsExt__CameraShake__SetFrequency.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getChild("Frequency").getAsNumber(), "", eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7), "AmplitudeX");
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getChild("AmplitudeX").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7), "AmplitudeY");
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getChild("AmplitudeY").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7), "AmplitudeAngle");
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(2).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getChild("AmplitudeAngle").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7), "AmplitudeZoom");
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(3).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getChild("AmplitudeZoom").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString()).getChild("CameraDeltaX").setNumber(gdjs.evtsExt__CameraShake__Noise2d.func(runtimeScene, "", gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 1000, eventsFunctionContext) * eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() * eventsFunctionContext.localVariables[0].getFromIndex(4).getAsNumber());
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(5).getAsString(), 0) + (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString()).getChild("CameraDeltaX").getAsNumber()), eventsFunctionContext.localVariables[0].getFromIndex(5).getAsString(), 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString()).getChild("CameraDeltaY").setNumber(gdjs.evtsExt__CameraShake__Noise2d.func(runtimeScene, "", gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 2000, eventsFunctionContext) * eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() * eventsFunctionContext.localVariables[0].getFromIndex(4).getAsNumber());
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(5).getAsString(), 0) + (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString()).getChild("CameraDeltaY").getAsNumber()), eventsFunctionContext.localVariables[0].getFromIndex(5).getAsString(), 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString()).getChild("CameraDeltaAngle").setNumber(gdjs.evtsExt__CameraShake__Noise2d.func(runtimeScene, "", gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 3000, eventsFunctionContext) * eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber() * eventsFunctionContext.localVariables[0].getFromIndex(4).getAsNumber());
}
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.camera.getCameraRotation(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(5).getAsString(), 0) + (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString()).getChild("CameraDeltaAngle").getAsNumber()), eventsFunctionContext.localVariables[0].getFromIndex(5).getAsString(), 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber() != 1);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString()).getChild("CameraDeltaZoom").setNumber(Math.pow(eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber(), gdjs.evtsExt__CameraShake__Noise2d.func(runtimeScene, "", gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 4000, eventsFunctionContext) * eventsFunctionContext.localVariables[0].getFromIndex(4).getAsNumber()));
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.camera.getCameraZoom(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(5).getAsString(), 0) * eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString()).getChild("CameraDeltaZoom").getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(5).getAsString(), 0);
}
}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(5).setString(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString() == "__BaseLayer");
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(5).setString("");
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__CameraShake__SetFrequency.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), "", eventsFunctionContext);
}
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getAsNumber());
}
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsNumber());
}
{eventsFunctionContext.localVariables[0].getFromIndex(2).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber());
}
{eventsFunctionContext.localVariables[0].getFromIndex(3).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber());
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString()).getChild("CameraDeltaX").setNumber(0);
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString()).getChild("CameraDeltaY").setNumber(0);
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString()).getChild("CameraDeltaAngle").setNumber(0);
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString()).getChild("CameraDeltaZoom").setNumber(0);
}

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).getAsNumber() < eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).getAsNumber() > eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber() - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsNumber());
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(4).setNumber(gdjs.evtTools.common.clamp(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).getAsNumber() / eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).getAsNumber(), 0, 1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).getAsNumber() > eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber() - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsNumber());
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(4).setNumber(gdjs.evtTools.common.clamp((eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber() - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).getAsNumber()) / eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsNumber(), 0, 1));
}
}

}


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

{ //Subevents: 
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AmplitudeX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AmplitudeY", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AmplitudeAngle", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AmplitudeZoom", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(1);
variables._declare("EaseFactor", variable);
}
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("ActualLayerName", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CameraShake__IsShaking.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CameraShake__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList4(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__CameraShake__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
