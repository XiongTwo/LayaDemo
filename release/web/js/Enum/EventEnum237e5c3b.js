var EventEnum;
(function (EventEnum) {
    //----------------全局----------------//
    EventEnum[EventEnum["start_game"] = 0] = "start_game";
    EventEnum[EventEnum["preLoad_complete"] = 1] = "preLoad_complete";
    EventEnum[EventEnum["preLoad_progress"] = 2] = "preLoad_progress";
    EventEnum[EventEnum["enter_game"] = 3] = "enter_game";
    EventEnum[EventEnum["over_game"] = 4] = "over_game";
    //----------------模块-------------------------------//
    EventEnum[EventEnum["login"] = 5] = "login";
    EventEnum[EventEnum["game"] = 6] = "game";
})(EventEnum || (EventEnum = {}));
//# sourceMappingURL=EventEnum.js.map