gdjs.QuizCode = {};
gdjs.QuizCode.localVariables = [];
gdjs.QuizCode.idToCallbackMap = new Map();
gdjs.QuizCode.GDButtonAObjects1_1final = [];

gdjs.QuizCode.GDButtonBObjects1_1final = [];

gdjs.QuizCode.GDButtonCObjects1_1final = [];

gdjs.QuizCode.GDButtonDObjects1_1final = [];

gdjs.QuizCode.GDNewSpriteObjects1= [];
gdjs.QuizCode.GDNewSpriteObjects2= [];
gdjs.QuizCode.GDNewSpriteObjects3= [];
gdjs.QuizCode.GDButtonAObjects1= [];
gdjs.QuizCode.GDButtonAObjects2= [];
gdjs.QuizCode.GDButtonAObjects3= [];
gdjs.QuizCode.GDAngabeObjects1= [];
gdjs.QuizCode.GDAngabeObjects2= [];
gdjs.QuizCode.GDAngabeObjects3= [];
gdjs.QuizCode.GDButtonBObjects1= [];
gdjs.QuizCode.GDButtonBObjects2= [];
gdjs.QuizCode.GDButtonBObjects3= [];
gdjs.QuizCode.GDButtonCObjects1= [];
gdjs.QuizCode.GDButtonCObjects2= [];
gdjs.QuizCode.GDButtonCObjects3= [];
gdjs.QuizCode.GDButtonDObjects1= [];
gdjs.QuizCode.GDButtonDObjects2= [];
gdjs.QuizCode.GDButtonDObjects3= [];
gdjs.QuizCode.GDTextAObjects1= [];
gdjs.QuizCode.GDTextAObjects2= [];
gdjs.QuizCode.GDTextAObjects3= [];
gdjs.QuizCode.GDTextBObjects1= [];
gdjs.QuizCode.GDTextBObjects2= [];
gdjs.QuizCode.GDTextBObjects3= [];
gdjs.QuizCode.GDTextCObjects1= [];
gdjs.QuizCode.GDTextCObjects2= [];
gdjs.QuizCode.GDTextCObjects3= [];
gdjs.QuizCode.GDFeedbackTextObjects1= [];
gdjs.QuizCode.GDFeedbackTextObjects2= [];
gdjs.QuizCode.GDFeedbackTextObjects3= [];
gdjs.QuizCode.GDBlueExplosionObjects1= [];
gdjs.QuizCode.GDBlueExplosionObjects2= [];
gdjs.QuizCode.GDBlueExplosionObjects3= [];
gdjs.QuizCode.GDTextDObjects1= [];
gdjs.QuizCode.GDTextDObjects2= [];
gdjs.QuizCode.GDTextDObjects3= [];
gdjs.QuizCode.GDTransitionObjects1= [];
gdjs.QuizCode.GDTransitionObjects2= [];
gdjs.QuizCode.GDTransitionObjects3= [];
gdjs.QuizCode.GDTextBorderObjects1= [];
gdjs.QuizCode.GDTextBorderObjects2= [];
gdjs.QuizCode.GDTextBorderObjects3= [];


gdjs.QuizCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


};gdjs.QuizCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild(5).getAsNumber() == 4);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


};gdjs.QuizCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild(5).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


};gdjs.QuizCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild(5).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


};gdjs.QuizCode.asyncCallback24862924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.QuizCode.localVariables);
gdjs.QuizCode.localVariables.length = 0;
}
gdjs.QuizCode.idToCallbackMap.set(24862924, gdjs.QuizCode.asyncCallback24862924);
gdjs.QuizCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.QuizCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.QuizCode.asyncCallback24862924(runtimeScene, asyncObjectsList)), 24862924, asyncObjectsList);
}
}

}


};gdjs.QuizCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FeedbackText"), gdjs.QuizCode.GDFeedbackTextObjects2);
{for(var i = 0, len = gdjs.QuizCode.GDFeedbackTextObjects2.length ;i < len;++i) {
    gdjs.QuizCode.GDFeedbackTextObjects2[i].getBehavior("Text").setText("Falsch!");
}
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Feedback");
}

{ //Subevents
gdjs.QuizCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.QuizCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Angabe"), gdjs.QuizCode.GDAngabeObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextA"), gdjs.QuizCode.GDTextAObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextB"), gdjs.QuizCode.GDTextBObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextC"), gdjs.QuizCode.GDTextCObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextD"), gdjs.QuizCode.GDTextDObjects1);
{gdjs.evtsExt__ArrayTools__Shuffle.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0), null);
}
{for(var i = 0, len = gdjs.QuizCode.GDAngabeObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDAngabeObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild(0).getAsString());
}
}
{for(var i = 0, len = gdjs.QuizCode.GDTextAObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDTextAObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild(1).getAsString());
}
}
{for(var i = 0, len = gdjs.QuizCode.GDTextBObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDTextBObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild(2).getAsString());
}
}
{for(var i = 0, len = gdjs.QuizCode.GDTextCObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDTextCObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild(3).getAsString());
}
}
{for(var i = 0, len = gdjs.QuizCode.GDTextDObjects1.length ;i < len;++i) {
    gdjs.QuizCode.GDTextDObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild(4).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.QuizCode.GDButtonAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QuizCode.GDButtonAObjects1.length;i<l;++i) {
    if ( gdjs.QuizCode.GDButtonAObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.QuizCode.GDButtonAObjects1[k] = gdjs.QuizCode.GDButtonAObjects1[i];
        ++k;
    }
}
gdjs.QuizCode.GDButtonAObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.QuizCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonD"), gdjs.QuizCode.GDButtonDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QuizCode.GDButtonDObjects1.length;i<l;++i) {
    if ( gdjs.QuizCode.GDButtonDObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.QuizCode.GDButtonDObjects1[k] = gdjs.QuizCode.GDButtonDObjects1[i];
        ++k;
    }
}
gdjs.QuizCode.GDButtonDObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.QuizCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.QuizCode.GDButtonCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QuizCode.GDButtonCObjects1.length;i<l;++i) {
    if ( gdjs.QuizCode.GDButtonCObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.QuizCode.GDButtonCObjects1[k] = gdjs.QuizCode.GDButtonCObjects1[i];
        ++k;
    }
}
gdjs.QuizCode.GDButtonCObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.QuizCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.QuizCode.GDButtonBObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QuizCode.GDButtonBObjects1.length;i<l;++i) {
    if ( gdjs.QuizCode.GDButtonBObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.QuizCode.GDButtonBObjects1[k] = gdjs.QuizCode.GDButtonBObjects1[i];
        ++k;
    }
}
gdjs.QuizCode.GDButtonBObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.QuizCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.QuizCode.GDButtonAObjects1.length = 0;

gdjs.QuizCode.GDButtonBObjects1.length = 0;

gdjs.QuizCode.GDButtonCObjects1.length = 0;

gdjs.QuizCode.GDButtonDObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.QuizCode.GDButtonAObjects1_1final.length = 0;
gdjs.QuizCode.GDButtonBObjects1_1final.length = 0;
gdjs.QuizCode.GDButtonCObjects1_1final.length = 0;
gdjs.QuizCode.GDButtonDObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ButtonA"), gdjs.QuizCode.GDButtonAObjects2);
for (var i = 0, k = 0, l = gdjs.QuizCode.GDButtonAObjects2.length;i<l;++i) {
    if ( gdjs.QuizCode.GDButtonAObjects2[i].IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.QuizCode.GDButtonAObjects2[k] = gdjs.QuizCode.GDButtonAObjects2[i];
        ++k;
    }
}
gdjs.QuizCode.GDButtonAObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.QuizCode.GDButtonAObjects2.length; j < jLen ; ++j) {
        if ( gdjs.QuizCode.GDButtonAObjects1_1final.indexOf(gdjs.QuizCode.GDButtonAObjects2[j]) === -1 )
            gdjs.QuizCode.GDButtonAObjects1_1final.push(gdjs.QuizCode.GDButtonAObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ButtonB"), gdjs.QuizCode.GDButtonBObjects2);
for (var i = 0, k = 0, l = gdjs.QuizCode.GDButtonBObjects2.length;i<l;++i) {
    if ( gdjs.QuizCode.GDButtonBObjects2[i].IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.QuizCode.GDButtonBObjects2[k] = gdjs.QuizCode.GDButtonBObjects2[i];
        ++k;
    }
}
gdjs.QuizCode.GDButtonBObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.QuizCode.GDButtonBObjects2.length; j < jLen ; ++j) {
        if ( gdjs.QuizCode.GDButtonBObjects1_1final.indexOf(gdjs.QuizCode.GDButtonBObjects2[j]) === -1 )
            gdjs.QuizCode.GDButtonBObjects1_1final.push(gdjs.QuizCode.GDButtonBObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ButtonC"), gdjs.QuizCode.GDButtonCObjects2);
for (var i = 0, k = 0, l = gdjs.QuizCode.GDButtonCObjects2.length;i<l;++i) {
    if ( gdjs.QuizCode.GDButtonCObjects2[i].IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.QuizCode.GDButtonCObjects2[k] = gdjs.QuizCode.GDButtonCObjects2[i];
        ++k;
    }
}
gdjs.QuizCode.GDButtonCObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.QuizCode.GDButtonCObjects2.length; j < jLen ; ++j) {
        if ( gdjs.QuizCode.GDButtonCObjects1_1final.indexOf(gdjs.QuizCode.GDButtonCObjects2[j]) === -1 )
            gdjs.QuizCode.GDButtonCObjects1_1final.push(gdjs.QuizCode.GDButtonCObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ButtonD"), gdjs.QuizCode.GDButtonDObjects2);
for (var i = 0, k = 0, l = gdjs.QuizCode.GDButtonDObjects2.length;i<l;++i) {
    if ( gdjs.QuizCode.GDButtonDObjects2[i].IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.QuizCode.GDButtonDObjects2[k] = gdjs.QuizCode.GDButtonDObjects2[i];
        ++k;
    }
}
gdjs.QuizCode.GDButtonDObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.QuizCode.GDButtonDObjects2.length; j < jLen ; ++j) {
        if ( gdjs.QuizCode.GDButtonDObjects1_1final.indexOf(gdjs.QuizCode.GDButtonDObjects2[j]) === -1 )
            gdjs.QuizCode.GDButtonDObjects1_1final.push(gdjs.QuizCode.GDButtonDObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.QuizCode.GDButtonAObjects1_1final, gdjs.QuizCode.GDButtonAObjects1);
gdjs.copyArray(gdjs.QuizCode.GDButtonBObjects1_1final, gdjs.QuizCode.GDButtonBObjects1);
gdjs.copyArray(gdjs.QuizCode.GDButtonCObjects1_1final, gdjs.QuizCode.GDButtonCObjects1);
gdjs.copyArray(gdjs.QuizCode.GDButtonDObjects1_1final, gdjs.QuizCode.GDButtonDObjects1);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.QuizCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.QuizCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.QuizCode.GDNewSpriteObjects1.length = 0;
gdjs.QuizCode.GDNewSpriteObjects2.length = 0;
gdjs.QuizCode.GDNewSpriteObjects3.length = 0;
gdjs.QuizCode.GDButtonAObjects1.length = 0;
gdjs.QuizCode.GDButtonAObjects2.length = 0;
gdjs.QuizCode.GDButtonAObjects3.length = 0;
gdjs.QuizCode.GDAngabeObjects1.length = 0;
gdjs.QuizCode.GDAngabeObjects2.length = 0;
gdjs.QuizCode.GDAngabeObjects3.length = 0;
gdjs.QuizCode.GDButtonBObjects1.length = 0;
gdjs.QuizCode.GDButtonBObjects2.length = 0;
gdjs.QuizCode.GDButtonBObjects3.length = 0;
gdjs.QuizCode.GDButtonCObjects1.length = 0;
gdjs.QuizCode.GDButtonCObjects2.length = 0;
gdjs.QuizCode.GDButtonCObjects3.length = 0;
gdjs.QuizCode.GDButtonDObjects1.length = 0;
gdjs.QuizCode.GDButtonDObjects2.length = 0;
gdjs.QuizCode.GDButtonDObjects3.length = 0;
gdjs.QuizCode.GDTextAObjects1.length = 0;
gdjs.QuizCode.GDTextAObjects2.length = 0;
gdjs.QuizCode.GDTextAObjects3.length = 0;
gdjs.QuizCode.GDTextBObjects1.length = 0;
gdjs.QuizCode.GDTextBObjects2.length = 0;
gdjs.QuizCode.GDTextBObjects3.length = 0;
gdjs.QuizCode.GDTextCObjects1.length = 0;
gdjs.QuizCode.GDTextCObjects2.length = 0;
gdjs.QuizCode.GDTextCObjects3.length = 0;
gdjs.QuizCode.GDFeedbackTextObjects1.length = 0;
gdjs.QuizCode.GDFeedbackTextObjects2.length = 0;
gdjs.QuizCode.GDFeedbackTextObjects3.length = 0;
gdjs.QuizCode.GDBlueExplosionObjects1.length = 0;
gdjs.QuizCode.GDBlueExplosionObjects2.length = 0;
gdjs.QuizCode.GDBlueExplosionObjects3.length = 0;
gdjs.QuizCode.GDTextDObjects1.length = 0;
gdjs.QuizCode.GDTextDObjects2.length = 0;
gdjs.QuizCode.GDTextDObjects3.length = 0;
gdjs.QuizCode.GDTransitionObjects1.length = 0;
gdjs.QuizCode.GDTransitionObjects2.length = 0;
gdjs.QuizCode.GDTransitionObjects3.length = 0;
gdjs.QuizCode.GDTextBorderObjects1.length = 0;
gdjs.QuizCode.GDTextBorderObjects2.length = 0;
gdjs.QuizCode.GDTextBorderObjects3.length = 0;

gdjs.QuizCode.eventsList6(runtimeScene);
gdjs.QuizCode.GDNewSpriteObjects1.length = 0;
gdjs.QuizCode.GDNewSpriteObjects2.length = 0;
gdjs.QuizCode.GDNewSpriteObjects3.length = 0;
gdjs.QuizCode.GDButtonAObjects1.length = 0;
gdjs.QuizCode.GDButtonAObjects2.length = 0;
gdjs.QuizCode.GDButtonAObjects3.length = 0;
gdjs.QuizCode.GDAngabeObjects1.length = 0;
gdjs.QuizCode.GDAngabeObjects2.length = 0;
gdjs.QuizCode.GDAngabeObjects3.length = 0;
gdjs.QuizCode.GDButtonBObjects1.length = 0;
gdjs.QuizCode.GDButtonBObjects2.length = 0;
gdjs.QuizCode.GDButtonBObjects3.length = 0;
gdjs.QuizCode.GDButtonCObjects1.length = 0;
gdjs.QuizCode.GDButtonCObjects2.length = 0;
gdjs.QuizCode.GDButtonCObjects3.length = 0;
gdjs.QuizCode.GDButtonDObjects1.length = 0;
gdjs.QuizCode.GDButtonDObjects2.length = 0;
gdjs.QuizCode.GDButtonDObjects3.length = 0;
gdjs.QuizCode.GDTextAObjects1.length = 0;
gdjs.QuizCode.GDTextAObjects2.length = 0;
gdjs.QuizCode.GDTextAObjects3.length = 0;
gdjs.QuizCode.GDTextBObjects1.length = 0;
gdjs.QuizCode.GDTextBObjects2.length = 0;
gdjs.QuizCode.GDTextBObjects3.length = 0;
gdjs.QuizCode.GDTextCObjects1.length = 0;
gdjs.QuizCode.GDTextCObjects2.length = 0;
gdjs.QuizCode.GDTextCObjects3.length = 0;
gdjs.QuizCode.GDFeedbackTextObjects1.length = 0;
gdjs.QuizCode.GDFeedbackTextObjects2.length = 0;
gdjs.QuizCode.GDFeedbackTextObjects3.length = 0;
gdjs.QuizCode.GDBlueExplosionObjects1.length = 0;
gdjs.QuizCode.GDBlueExplosionObjects2.length = 0;
gdjs.QuizCode.GDBlueExplosionObjects3.length = 0;
gdjs.QuizCode.GDTextDObjects1.length = 0;
gdjs.QuizCode.GDTextDObjects2.length = 0;
gdjs.QuizCode.GDTextDObjects3.length = 0;
gdjs.QuizCode.GDTransitionObjects1.length = 0;
gdjs.QuizCode.GDTransitionObjects2.length = 0;
gdjs.QuizCode.GDTransitionObjects3.length = 0;
gdjs.QuizCode.GDTextBorderObjects1.length = 0;
gdjs.QuizCode.GDTextBorderObjects2.length = 0;
gdjs.QuizCode.GDTextBorderObjects3.length = 0;


return;

}

gdjs['QuizCode'] = gdjs.QuizCode;
