
gdjs.evtsExt__BarplotExtension__Clipboard = gdjs.evtsExt__BarplotExtension__Clipboard || {};

/**
 * Object generated from Clipboard
 */
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard = class Clipboard extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
}

// Methods:
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext = {};
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.idToCallbackMap = new Map();
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDObjectObjects1= [];
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDObjectObjects2= [];
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDNewSpriteObjects1= [];
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDNewSpriteObjects2= [];
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDTitleObjects1= [];
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDTitleObjects2= [];
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDNewBBTextObjects1= [];
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDNewBBTextObjects2= [];
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDDataTextObjects1= [];
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDDataTextObjects2= [];


gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("DataText"), gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDDataTextObjects1);
{for(var i = 0, len = gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDDataTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDDataTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("NeuerText"));
}
}
}

}


};

gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.Function = function(NeuerText, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNewSpriteObjectsList = [...runtimeScene.getObjects("NewSprite")];
var GDNewSpriteObjects = Hashtable.newFrom({"NewSprite": thisGDNewSpriteObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDNewBBTextObjectsList = [...runtimeScene.getObjects("NewBBText")];
var GDNewBBTextObjects = Hashtable.newFrom({"NewBBText": thisGDNewBBTextObjectsList});
var thisGDDataTextObjectsList = [...runtimeScene.getObjects("DataText")];
var GDDataTextObjects = Hashtable.newFrom({"DataText": thisGDDataTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NewSprite": GDNewSpriteObjects
, "Title": GDTitleObjects
, "NewBBText": GDNewBBTextObjects
, "DataText": GDDataTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NewSprite": thisGDNewSpriteObjectsList
, "Title": thisGDTitleObjectsList
, "NewBBText": thisGDNewBBTextObjectsList
, "DataText": thisGDDataTextObjectsList
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
if (argName === "NeuerText") return NeuerText;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDNewSpriteObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDNewSpriteObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDNewBBTextObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDNewBBTextObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDDataTextObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDDataTextObjects2.length = 0;

gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDNewSpriteObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDNewSpriteObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDNewBBTextObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDNewBBTextObjects2.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDDataTextObjects1.length = 0;
gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.FunctionContext.GDDataTextObjects2.length = 0;


return;
}

gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("BarplotExtension::Clipboard", gdjs.evtsExt__BarplotExtension__Clipboard.Clipboard);
