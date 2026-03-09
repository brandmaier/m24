
gdjs.evtsExt__BarplotExtension__barplot = gdjs.evtsExt__BarplotExtension__barplot || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__BarplotExtension__barplot.barplot = class barplot extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.Property = objectData.content.Property !== undefined ? objectData.content.Property : Number("") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Property !== newObjectData.content.Property)
      this._objectData.Property = newObjectData.content.Property;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getProperty() {
    return this._objectData.Property !== undefined ? this._objectData.Property : Number("") || 0;
  }
  _setProperty(newValue) {
    this._objectData.Property = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDBarPainterObjects1= [];
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDBarPainterObjects2= [];
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDNewTextObjects1= [];
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDNewTextObjects2= [];


gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

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


};

gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDBarPainterObjectsList = [...runtimeScene.getObjects("BarPainter")];
var GDBarPainterObjects = Hashtable.newFrom({"BarPainter": thisGDBarPainterObjectsList});
var thisGDNewTextObjectsList = [...runtimeScene.getObjects("NewText")];
var GDNewTextObjects = Hashtable.newFrom({"NewText": thisGDNewTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "BarPainter": GDBarPainterObjects
, "NewText": GDNewTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "BarPainter": thisGDBarPainterObjectsList
, "NewText": thisGDNewTextObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BarplotExtension"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BarplotExtension"),
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

gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDBarPainterObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDBarPainterObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDNewTextObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDNewTextObjects2.length = 0;

gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDBarPainterObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDBarPainterObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDNewTextObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPostEventsContext.GDNewTextObjects2.length = 0;


return;
}
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext = {};
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1= [];
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects2= [];
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDNewTextObjects1= [];
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDNewTextObjects2= [];


gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BarPainter"), gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1[i].setFillColor("189;16;224");
}
}
{for(var i = 0, len = gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1[i].setOutlineColor("248;231;28");
}
}
{for(var i = 0, len = gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1[i].drawRectangle(0, 0, 400, 400);
}
}
{for(var i = 0, len = gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1[i].drawStar(200, 200, 5, 30, 2, 0);
}
}
{for(var i = 0, len = gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1[i].drawRectangle(0, 0, 40, 40);
}
}
{for(var i = 0, len = gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1[i].setFillColor("126;211;33");
}
}
{for(var i = 0, len = gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1[i].drawRectangle(80, 0, 800, 20);
}
}
}

}


};

gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDBarPainterObjectsList = [...runtimeScene.getObjects("BarPainter")];
var GDBarPainterObjects = Hashtable.newFrom({"BarPainter": thisGDBarPainterObjectsList});
var thisGDNewTextObjectsList = [...runtimeScene.getObjects("NewText")];
var GDNewTextObjects = Hashtable.newFrom({"NewText": thisGDNewTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "BarPainter": GDBarPainterObjects
, "NewText": GDNewTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "BarPainter": thisGDBarPainterObjectsList
, "NewText": thisGDNewTextObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BarplotExtension"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BarplotExtension"),
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

gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDNewTextObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDNewTextObjects2.length = 0;

gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDBarPainterObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDNewTextObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.onCreatedContext.GDNewTextObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}

gdjs.evtsExt__BarplotExtension__barplot.barplot.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("BarplotExtension::barplot", gdjs.evtsExt__BarplotExtension__barplot.barplot);
