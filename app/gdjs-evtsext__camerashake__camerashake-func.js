
if (typeof gdjs.evtsExt__CameraShake__CameraShake !== "undefined") {
  gdjs.evtsExt__CameraShake__CameraShake.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__CameraShake = {};
gdjs.evtsExt__CameraShake__CameraShake.idToCallbackMap = new Map();


gdjs.evtsExt__CameraShake__CameraShake.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("ShakePeriod") != 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setNumber(1 / eventsFunctionContext.getArgument("ShakePeriod"));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("ShakePeriod") == 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setNumber(1 / 0.08);
}
}

}


};gdjs.evtsExt__CameraShake__CameraShake.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.variableClearChildren(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6));
}
{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, true, eventsFunctionContext.getArgument("Layer"), eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).setNumber(0);
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).setString(eventsFunctionContext.getArgument("Layer"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).setNumber(eventsFunctionContext.getArgument("Duration"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(10).setNumber(0);
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).setNumber(eventsFunctionContext.getArgument("Duration"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).setNumber(Math.abs(eventsFunctionContext.getArgument("AmplitudeX")));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).setNumber(Math.abs(eventsFunctionContext.getArgument("AmplitudeY")));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).setNumber(eventsFunctionContext.getArgument("AmplitudeAngle"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).setNumber(1 + eventsFunctionContext.getArgument("AmplitudeZoom") / 100);
}

{ //Subevents
gdjs.evtsExt__CameraShake__CameraShake.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !!eventsFunctionContext.getArgument("ShakeForever");
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).setNumber(1234567890);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Duration") == 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).setNumber(0.5);
}
}

}


};gdjs.evtsExt__CameraShake__CameraShake.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__CameraShake.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__CameraShake__CameraShake.func = function(runtimeScene, AmplitudeX, AmplitudeY, Layer, Camera, Duration, AmplitudeAngle, AmplitudeZoom, ShakePeriod, ShakeForever, parentEventsFunctionContext) {
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
if (argName === "AmplitudeX") return AmplitudeX;
if (argName === "AmplitudeY") return AmplitudeY;
if (argName === "Layer") return Layer;
if (argName === "Camera") return Camera;
if (argName === "Duration") return Duration;
if (argName === "AmplitudeAngle") return AmplitudeAngle;
if (argName === "AmplitudeZoom") return AmplitudeZoom;
if (argName === "ShakePeriod") return ShakePeriod;
if (argName === "ShakeForever") return ShakeForever;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__CameraShake.eventsList2(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraShake__CameraShake.registeredGdjsCallbacks = [];