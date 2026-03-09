gdjs.OverviewCode = {};
gdjs.OverviewCode.localVariables = [];
gdjs.OverviewCode.idToCallbackMap = new Map();
gdjs.OverviewCode.GDNewTextObjects1= [];
gdjs.OverviewCode.GDNewTextObjects2= [];
gdjs.OverviewCode.GDWerteTextObjects1= [];
gdjs.OverviewCode.GDWerteTextObjects2= [];
gdjs.OverviewCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.OverviewCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.OverviewCode.GDMenuBoxObjects1= [];
gdjs.OverviewCode.GDMenuBoxObjects2= [];
gdjs.OverviewCode.GDNewTiledSpriteObjects1= [];
gdjs.OverviewCode.GDNewTiledSpriteObjects2= [];
gdjs.OverviewCode.GDNewText2Objects1= [];
gdjs.OverviewCode.GDNewText2Objects2= [];
gdjs.OverviewCode.GDNewSpriteObjects1= [];
gdjs.OverviewCode.GDNewSpriteObjects2= [];
gdjs.OverviewCode.GDNewSprite2Objects1= [];
gdjs.OverviewCode.GDNewSprite2Objects2= [];
gdjs.OverviewCode.GDQuestionMarksObjects1= [];
gdjs.OverviewCode.GDQuestionMarksObjects2= [];
gdjs.OverviewCode.GDTransitionObjects1= [];
gdjs.OverviewCode.GDTransitionObjects2= [];
gdjs.OverviewCode.GDTextBorderObjects1= [];
gdjs.OverviewCode.GDTextBorderObjects2= [];


gdjs.OverviewCode.userFunc0x26e52d8 = function GDJSInlineCode(runtimeScene) {
"use strict";
let array = runtimeScene.getGame().getVariables().get("History")

let txt = "Mittlere Meinung:\n\n ";
let start = Math.max(array.getChildrenCount()-8,0);
let end = array.getChildrenCount();
for (let i=start; i < end; i++) { 
    if(i>0) { txt = txt + " "}
    txt = txt + "Spieler:in "+ (i+1) + ": "+ ( array.getChild(i).getAsString())+"\n" ; 
}

runtimeScene.getVariables().get("gesammelte_werte_txt").setString(txt);

};
gdjs.OverviewCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(4)) > 5;
}
if (isConditionTrue_0) {
}

}


{


gdjs.OverviewCode.userFunc0x26e52d8(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("WerteText"), gdjs.OverviewCode.GDWerteTextObjects1);
{for(var i = 0, len = gdjs.OverviewCode.GDWerteTextObjects1.length ;i < len;++i) {
    gdjs.OverviewCode.GDWerteTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.OverviewCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverviewCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.OverviewCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.OverviewCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.OverviewCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.OverviewCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
}

}


};

gdjs.OverviewCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OverviewCode.GDNewTextObjects1.length = 0;
gdjs.OverviewCode.GDNewTextObjects2.length = 0;
gdjs.OverviewCode.GDWerteTextObjects1.length = 0;
gdjs.OverviewCode.GDWerteTextObjects2.length = 0;
gdjs.OverviewCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.OverviewCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.OverviewCode.GDMenuBoxObjects1.length = 0;
gdjs.OverviewCode.GDMenuBoxObjects2.length = 0;
gdjs.OverviewCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.OverviewCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.OverviewCode.GDNewText2Objects1.length = 0;
gdjs.OverviewCode.GDNewText2Objects2.length = 0;
gdjs.OverviewCode.GDNewSpriteObjects1.length = 0;
gdjs.OverviewCode.GDNewSpriteObjects2.length = 0;
gdjs.OverviewCode.GDNewSprite2Objects1.length = 0;
gdjs.OverviewCode.GDNewSprite2Objects2.length = 0;
gdjs.OverviewCode.GDQuestionMarksObjects1.length = 0;
gdjs.OverviewCode.GDQuestionMarksObjects2.length = 0;
gdjs.OverviewCode.GDTransitionObjects1.length = 0;
gdjs.OverviewCode.GDTransitionObjects2.length = 0;
gdjs.OverviewCode.GDTextBorderObjects1.length = 0;
gdjs.OverviewCode.GDTextBorderObjects2.length = 0;

gdjs.OverviewCode.eventsList0(runtimeScene);
gdjs.OverviewCode.GDNewTextObjects1.length = 0;
gdjs.OverviewCode.GDNewTextObjects2.length = 0;
gdjs.OverviewCode.GDWerteTextObjects1.length = 0;
gdjs.OverviewCode.GDWerteTextObjects2.length = 0;
gdjs.OverviewCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.OverviewCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.OverviewCode.GDMenuBoxObjects1.length = 0;
gdjs.OverviewCode.GDMenuBoxObjects2.length = 0;
gdjs.OverviewCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.OverviewCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.OverviewCode.GDNewText2Objects1.length = 0;
gdjs.OverviewCode.GDNewText2Objects2.length = 0;
gdjs.OverviewCode.GDNewSpriteObjects1.length = 0;
gdjs.OverviewCode.GDNewSpriteObjects2.length = 0;
gdjs.OverviewCode.GDNewSprite2Objects1.length = 0;
gdjs.OverviewCode.GDNewSprite2Objects2.length = 0;
gdjs.OverviewCode.GDQuestionMarksObjects1.length = 0;
gdjs.OverviewCode.GDQuestionMarksObjects2.length = 0;
gdjs.OverviewCode.GDTransitionObjects1.length = 0;
gdjs.OverviewCode.GDTransitionObjects2.length = 0;
gdjs.OverviewCode.GDTextBorderObjects1.length = 0;
gdjs.OverviewCode.GDTextBorderObjects2.length = 0;


return;

}

gdjs['OverviewCode'] = gdjs.OverviewCode;
