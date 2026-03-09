gdjs.IntroductionCode = {};
gdjs.IntroductionCode.localVariables = [];
gdjs.IntroductionCode.idToCallbackMap = new Map();
gdjs.IntroductionCode.GDProfBrandmaierObjects1= [];
gdjs.IntroductionCode.GDProfBrandmaierObjects2= [];
gdjs.IntroductionCode.GDIntroTextObjects1= [];
gdjs.IntroductionCode.GDIntroTextObjects2= [];
gdjs.IntroductionCode.GDStartButtonObjects1= [];
gdjs.IntroductionCode.GDStartButtonObjects2= [];
gdjs.IntroductionCode.GDIntroText2Objects1= [];
gdjs.IntroductionCode.GDIntroText2Objects2= [];
gdjs.IntroductionCode.GDNewShapePainterObjects1= [];
gdjs.IntroductionCode.GDNewShapePainterObjects2= [];
gdjs.IntroductionCode.GDViereckObjects1= [];
gdjs.IntroductionCode.GDViereckObjects2= [];
gdjs.IntroductionCode.GDIntroText3Objects1= [];
gdjs.IntroductionCode.GDIntroText3Objects2= [];
gdjs.IntroductionCode.GDTransitionObjects1= [];
gdjs.IntroductionCode.GDTransitionObjects2= [];
gdjs.IntroductionCode.GDTextBorderObjects1= [];
gdjs.IntroductionCode.GDTextBorderObjects2= [];


gdjs.IntroductionCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IntroText2"), gdjs.IntroductionCode.GDIntroText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("IntroText3"), gdjs.IntroductionCode.GDIntroText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.IntroductionCode.GDStartButtonObjects1);
{for(var i = 0, len = gdjs.IntroductionCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDStartButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.IntroductionCode.GDIntroText3Objects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDIntroText3Objects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{for(var i = 0, len = gdjs.IntroductionCode.GDIntroText2Objects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDIntroText2Objects1[i].getBehavior("Text_AutoTyping").StartAtBeginning(null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IntroText2"), gdjs.IntroductionCode.GDIntroText2Objects1);
{for(var i = 0, len = gdjs.IntroductionCode.GDIntroText2Objects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDIntroText2Objects1[i].getBehavior("Text_AutoTyping").SkipToEnd(null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IntroText3"), gdjs.IntroductionCode.GDIntroText3Objects1);
{for(var i = 0, len = gdjs.IntroductionCode.GDIntroText3Objects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDIntroText3Objects1[i].getBehavior("Text_AutoTyping").SkipToEnd(null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IntroText2"), gdjs.IntroductionCode.GDIntroText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroductionCode.GDIntroText2Objects1.length;i<l;++i) {
    if ( gdjs.IntroductionCode.GDIntroText2Objects1[i].getBehavior("Text_AutoTyping").TypingFinished(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroductionCode.GDIntroText2Objects1[k] = gdjs.IntroductionCode.GDIntroText2Objects1[i];
        ++k;
    }
}
gdjs.IntroductionCode.GDIntroText2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24801364);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.IntroductionCode.GDStartButtonObjects1);
{for(var i = 0, len = gdjs.IntroductionCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDStartButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IntroText3"), gdjs.IntroductionCode.GDIntroText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroductionCode.GDIntroText3Objects1.length;i<l;++i) {
    if ( gdjs.IntroductionCode.GDIntroText3Objects1[i].getBehavior("Text_AutoTyping").TypingFinished(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroductionCode.GDIntroText3Objects1[k] = gdjs.IntroductionCode.GDIntroText3Objects1[i];
        ++k;
    }
}
gdjs.IntroductionCode.GDIntroText3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24802220);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ProfBrandmaier"), gdjs.IntroductionCode.GDProfBrandmaierObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.IntroductionCode.GDStartButtonObjects1);
{for(var i = 0, len = gdjs.IntroductionCode.GDProfBrandmaierObjects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDProfBrandmaierObjects1[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.IntroductionCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDStartButtonObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.IntroductionCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroductionCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.IntroductionCode.GDStartButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroductionCode.GDStartButtonObjects1[k] = gdjs.IntroductionCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.IntroductionCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Hauptgebaeude", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.IntroductionCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroductionCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.IntroductionCode.GDStartButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroductionCode.GDStartButtonObjects1[k] = gdjs.IntroductionCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.IntroductionCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IntroText2"), gdjs.IntroductionCode.GDIntroText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("IntroText3"), gdjs.IntroductionCode.GDIntroText3Objects1);
{for(var i = 0, len = gdjs.IntroductionCode.GDIntroText2Objects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDIntroText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.IntroductionCode.GDIntroText3Objects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDIntroText3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.IntroductionCode.GDIntroText3Objects1.length ;i < len;++i) {
    gdjs.IntroductionCode.GDIntroText3Objects1[i].getBehavior("Text_AutoTyping").StartAtBeginning(null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
}

}


};

gdjs.IntroductionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroductionCode.GDProfBrandmaierObjects1.length = 0;
gdjs.IntroductionCode.GDProfBrandmaierObjects2.length = 0;
gdjs.IntroductionCode.GDIntroTextObjects1.length = 0;
gdjs.IntroductionCode.GDIntroTextObjects2.length = 0;
gdjs.IntroductionCode.GDStartButtonObjects1.length = 0;
gdjs.IntroductionCode.GDStartButtonObjects2.length = 0;
gdjs.IntroductionCode.GDIntroText2Objects1.length = 0;
gdjs.IntroductionCode.GDIntroText2Objects2.length = 0;
gdjs.IntroductionCode.GDNewShapePainterObjects1.length = 0;
gdjs.IntroductionCode.GDNewShapePainterObjects2.length = 0;
gdjs.IntroductionCode.GDViereckObjects1.length = 0;
gdjs.IntroductionCode.GDViereckObjects2.length = 0;
gdjs.IntroductionCode.GDIntroText3Objects1.length = 0;
gdjs.IntroductionCode.GDIntroText3Objects2.length = 0;
gdjs.IntroductionCode.GDTransitionObjects1.length = 0;
gdjs.IntroductionCode.GDTransitionObjects2.length = 0;
gdjs.IntroductionCode.GDTextBorderObjects1.length = 0;
gdjs.IntroductionCode.GDTextBorderObjects2.length = 0;

gdjs.IntroductionCode.eventsList0(runtimeScene);
gdjs.IntroductionCode.GDProfBrandmaierObjects1.length = 0;
gdjs.IntroductionCode.GDProfBrandmaierObjects2.length = 0;
gdjs.IntroductionCode.GDIntroTextObjects1.length = 0;
gdjs.IntroductionCode.GDIntroTextObjects2.length = 0;
gdjs.IntroductionCode.GDStartButtonObjects1.length = 0;
gdjs.IntroductionCode.GDStartButtonObjects2.length = 0;
gdjs.IntroductionCode.GDIntroText2Objects1.length = 0;
gdjs.IntroductionCode.GDIntroText2Objects2.length = 0;
gdjs.IntroductionCode.GDNewShapePainterObjects1.length = 0;
gdjs.IntroductionCode.GDNewShapePainterObjects2.length = 0;
gdjs.IntroductionCode.GDViereckObjects1.length = 0;
gdjs.IntroductionCode.GDViereckObjects2.length = 0;
gdjs.IntroductionCode.GDIntroText3Objects1.length = 0;
gdjs.IntroductionCode.GDIntroText3Objects2.length = 0;
gdjs.IntroductionCode.GDTransitionObjects1.length = 0;
gdjs.IntroductionCode.GDTransitionObjects2.length = 0;
gdjs.IntroductionCode.GDTextBorderObjects1.length = 0;
gdjs.IntroductionCode.GDTextBorderObjects2.length = 0;


return;

}

gdjs['IntroductionCode'] = gdjs.IntroductionCode;
