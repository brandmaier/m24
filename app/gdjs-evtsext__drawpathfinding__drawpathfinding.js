
gdjs.evtsExt__DrawPathfinding__DrawPathfinding = gdjs.evtsExt__DrawPathfinding__DrawPathfinding || {};

/**
 * Behavior generated from Pathfinding painter
 */
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding = class DrawPathfinding extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.LoopIndex = Number("0") || 0;
    this._behaviorData.CorrectionX = Number("") || 0;
    this._behaviorData.CorrectionY = Number("") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.LoopIndex !== undefined)
      this._behaviorData.LoopIndex = behaviorOverriding.LoopIndex;
    if (behaviorOverriding.CorrectionX !== undefined)
      this._behaviorData.CorrectionX = behaviorOverriding.CorrectionX;
    if (behaviorOverriding.CorrectionY !== undefined)
      this._behaviorData.CorrectionY = behaviorOverriding.CorrectionY;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    LoopIndex: this._behaviorData.LoopIndex,
    CorrectionX: this._behaviorData.CorrectionX,
    CorrectionY: this._behaviorData.CorrectionY,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.LoopIndex !== undefined)
      this._behaviorData.LoopIndex = networkSyncData.props.LoopIndex;
    if (networkSyncData.props.CorrectionX !== undefined)
      this._behaviorData.CorrectionX = networkSyncData.props.CorrectionX;
    if (networkSyncData.props.CorrectionY !== undefined)
      this._behaviorData.CorrectionY = networkSyncData.props.CorrectionY;
  }

  // Properties:
  
  _getLoopIndex() {
    return this._behaviorData.LoopIndex !== undefined ? this._behaviorData.LoopIndex : Number("0") || 0;
  }
  _setLoopIndex(newValue) {
    this._behaviorData.LoopIndex = newValue;
  }
  _getCorrectionX() {
    return this._behaviorData.CorrectionX !== undefined ? this._behaviorData.CorrectionX : Number("") || 0;
  }
  _setCorrectionX(newValue) {
    this._behaviorData.CorrectionX = newValue;
  }
  _getCorrectionY() {
    return this._behaviorData.CorrectionY !== undefined ? this._behaviorData.CorrectionY : Number("") || 0;
  }
  _setCorrectionY(newValue) {
    this._behaviorData.CorrectionY = newValue;
  }
}

/**
 * Shared data generated from Pathfinding painter
 */
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.SharedData = class DrawPathfindingSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._DrawPathfinding_DrawPathfindingSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._DrawPathfinding_DrawPathfindingSharedData = new gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.SharedData(
      initialData
    );
  }
  return instanceContainer._DrawPathfinding_DrawPathfindingSharedData;
}

// Methods:
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext = {};
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.idToCallbackMap = new Map();
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects2= [];
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3= [];
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects4= [];
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1= [];
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects2= [];
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects3= [];
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects4= [];


gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.mapOfGDgdjs_9546evtsExt_9595_9595DrawPathfinding_9595_9595DrawPathfinding_9546DrawPathfinding_9546prototype_9546DrawPathfindingContext_9546GDShapePainterObjectObjects1Objects = Hashtable.newFrom({"ShapePainterObject": gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1});
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.mapOfGDgdjs_9546evtsExt_9595_9595DrawPathfinding_9595_9595DrawPathfinding_9546DrawPathfinding_9546prototype_9546DrawPathfindingContext_9546GDShapePainterObjectObjects1Objects = Hashtable.newFrom({"ShapePainterObject": gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1});
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1, gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopIndex() <= (gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeCount()) - 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[k] = gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3 */
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainterObject"), gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects3[i].drawCircle((( gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeX(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopIndex())), (( gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeY(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopIndex())), 3);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1, gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopIndex() < (gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeCount()) - 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[k] = gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3 */
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainterObject"), gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects3[i].drawLineV2((( gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeX(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopIndex())), (( gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeY(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopIndex())), (( gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeX(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopIndex() + 1)), (( gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeY(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopIndex() + 1)), 3);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1, gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLoopIndex(gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopIndex() + (1));
}
}
}

}


};gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainterObject"), gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickedObjectsCount(gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.mapOfGDgdjs_9546evtsExt_9595_9595DrawPathfinding_9595_9595DrawPathfinding_9546DrawPathfinding_9546prototype_9546DrawPathfindingContext_9546GDShapePainterObjectObjects1Objects) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1);
/* Reuse gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1 */
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.mapOfGDgdjs_9546evtsExt_9595_9595DrawPathfinding_9595_9595DrawPathfinding_9546DrawPathfinding_9546prototype_9546DrawPathfindingContext_9546GDShapePainterObjectObjects1Objects, 0, 0, (( gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1[i].setZOrder((( gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1[0].getZOrder()) - 1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainterObject"), gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1[i].areCoordinatesRelative() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1[k] = gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1[i].setCoordinatesRelative(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLoopIndex(0);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1);

const repeatCount2 = (( gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeCount());
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfinding = function(PathfindingBehavior, ShapePainterObject, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ShapePainterObject": ShapePainterObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "ShapePainterObject": gdjs.objectsListsToArray(ShapePainterObject)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PathfindingBehavior": PathfindingBehavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawPathfinding"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1.length = 0;
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects2.length = 0;
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects3.length = 0;
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects4.length = 0;

gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects1.length = 0;
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects2.length = 0;
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects3.length = 0;
gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.DrawPathfindingContext.GDShapePainterObjectObjects4.length = 0;


return;
}

gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("DrawPathfinding::DrawPathfinding", gdjs.evtsExt__DrawPathfinding__DrawPathfinding.DrawPathfinding);
