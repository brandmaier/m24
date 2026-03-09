gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.idToCallbackMap = new Map();
gdjs.LobbyCode.GDBlueButtonWithShadowObjects1= [];
gdjs.LobbyCode.GDBlueButtonWithShadowObjects2= [];
gdjs.LobbyCode.GDTransitionObjects1= [];
gdjs.LobbyCode.GDTransitionObjects2= [];
gdjs.LobbyCode.GDTextBorderObjects1= [];
gdjs.LobbyCode.GDTextBorderObjects2= [];


gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.LobbyCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDBlueButtonWithShadowObjects1[k] = gdjs.LobbyCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Hauptgebaeude", false);
}
}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.LobbyCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.LobbyCode.GDTransitionObjects1.length = 0;
gdjs.LobbyCode.GDTransitionObjects2.length = 0;
gdjs.LobbyCode.GDTextBorderObjects1.length = 0;
gdjs.LobbyCode.GDTextBorderObjects2.length = 0;

gdjs.LobbyCode.eventsList0(runtimeScene);
gdjs.LobbyCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.LobbyCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.LobbyCode.GDTransitionObjects1.length = 0;
gdjs.LobbyCode.GDTransitionObjects2.length = 0;
gdjs.LobbyCode.GDTextBorderObjects1.length = 0;
gdjs.LobbyCode.GDTextBorderObjects2.length = 0;


return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
