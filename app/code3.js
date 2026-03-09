gdjs.TitleScreenCode = {};
gdjs.TitleScreenCode.localVariables = [];
gdjs.TitleScreenCode.idToCallbackMap = new Map();
gdjs.TitleScreenCode.GDNewbarplotObjects1= [];
gdjs.TitleScreenCode.GDNewbarplotObjects2= [];
gdjs.TitleScreenCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.TitleScreenCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.TitleScreenCode.GDcreditsObjects1= [];
gdjs.TitleScreenCode.GDcreditsObjects2= [];
gdjs.TitleScreenCode.GDCreditsObjects1= [];
gdjs.TitleScreenCode.GDCreditsObjects2= [];
gdjs.TitleScreenCode.GDStartbildschirmObjects1= [];
gdjs.TitleScreenCode.GDStartbildschirmObjects2= [];
gdjs.TitleScreenCode.GDNewTextObjects1= [];
gdjs.TitleScreenCode.GDNewTextObjects2= [];
gdjs.TitleScreenCode.GDNewText2Objects1= [];
gdjs.TitleScreenCode.GDNewText2Objects2= [];
gdjs.TitleScreenCode.GDTitelObjects1= [];
gdjs.TitleScreenCode.GDTitelObjects2= [];
gdjs.TitleScreenCode.GDTransitionObjects1= [];
gdjs.TitleScreenCode.GDTransitionObjects2= [];
gdjs.TitleScreenCode.GDTextBorderObjects1= [];
gdjs.TitleScreenCode.GDTextBorderObjects2= [];


gdjs.TitleScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.TitleScreenCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.TitleScreenCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Introduction", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("credits"), gdjs.TitleScreenCode.GDcreditsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDcreditsObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDcreditsObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDcreditsObjects1[k] = gdjs.TitleScreenCode.GDcreditsObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDcreditsObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.TitleScreenCode.GDCreditsObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.TitleScreenCode.GDCreditsObjects1.length !== 0 ? gdjs.TitleScreenCode.GDCreditsObjects1[0] : null), true, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Startbildschirm"), gdjs.TitleScreenCode.GDStartbildschirmObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDStartbildschirmObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDStartbildschirmObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDStartbildschirmObjects1[k] = gdjs.TitleScreenCode.GDStartbildschirmObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDStartbildschirmObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), "", 0);
}
}

}


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


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "music\\dance_beat.mp3", false, 100, 1);
}
}

}


};

gdjs.TitleScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleScreenCode.GDNewbarplotObjects1.length = 0;
gdjs.TitleScreenCode.GDNewbarplotObjects2.length = 0;
gdjs.TitleScreenCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.TitleScreenCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.TitleScreenCode.GDcreditsObjects1.length = 0;
gdjs.TitleScreenCode.GDcreditsObjects2.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects1.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects2.length = 0;
gdjs.TitleScreenCode.GDStartbildschirmObjects1.length = 0;
gdjs.TitleScreenCode.GDStartbildschirmObjects2.length = 0;
gdjs.TitleScreenCode.GDNewTextObjects1.length = 0;
gdjs.TitleScreenCode.GDNewTextObjects2.length = 0;
gdjs.TitleScreenCode.GDNewText2Objects1.length = 0;
gdjs.TitleScreenCode.GDNewText2Objects2.length = 0;
gdjs.TitleScreenCode.GDTitelObjects1.length = 0;
gdjs.TitleScreenCode.GDTitelObjects2.length = 0;
gdjs.TitleScreenCode.GDTransitionObjects1.length = 0;
gdjs.TitleScreenCode.GDTransitionObjects2.length = 0;
gdjs.TitleScreenCode.GDTextBorderObjects1.length = 0;
gdjs.TitleScreenCode.GDTextBorderObjects2.length = 0;

gdjs.TitleScreenCode.eventsList0(runtimeScene);
gdjs.TitleScreenCode.GDNewbarplotObjects1.length = 0;
gdjs.TitleScreenCode.GDNewbarplotObjects2.length = 0;
gdjs.TitleScreenCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.TitleScreenCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.TitleScreenCode.GDcreditsObjects1.length = 0;
gdjs.TitleScreenCode.GDcreditsObjects2.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects1.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects2.length = 0;
gdjs.TitleScreenCode.GDStartbildschirmObjects1.length = 0;
gdjs.TitleScreenCode.GDStartbildschirmObjects2.length = 0;
gdjs.TitleScreenCode.GDNewTextObjects1.length = 0;
gdjs.TitleScreenCode.GDNewTextObjects2.length = 0;
gdjs.TitleScreenCode.GDNewText2Objects1.length = 0;
gdjs.TitleScreenCode.GDNewText2Objects2.length = 0;
gdjs.TitleScreenCode.GDTitelObjects1.length = 0;
gdjs.TitleScreenCode.GDTitelObjects2.length = 0;
gdjs.TitleScreenCode.GDTransitionObjects1.length = 0;
gdjs.TitleScreenCode.GDTransitionObjects2.length = 0;
gdjs.TitleScreenCode.GDTextBorderObjects1.length = 0;
gdjs.TitleScreenCode.GDTextBorderObjects2.length = 0;


return;

}

gdjs['TitleScreenCode'] = gdjs.TitleScreenCode;
