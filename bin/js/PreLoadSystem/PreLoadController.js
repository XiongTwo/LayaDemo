var PreLoadController = /** @class */ (function () {
    function PreLoadController() {
        this.AddListener();
    }
    PreLoadController.prototype.AddListener = function () {
        EventManage.Instance().AddListener(EventEnum.start_game, this.StartGame.bind(this));
    };
    PreLoadController.prototype.StartGame = function () {
        if (PreLoadController.isPreLoad == false) {
            ResourceManage.Instance().ResourceVersion();
            PreLoadController.isPreLoad = true;
        }
        else {
            EventManage.Instance().Broadcast(EventEnum.preLoad_complete);
        }
    };
    PreLoadController.isPreLoad = false;
    return PreLoadController;
}());
//# sourceMappingURL=PreLoadController.js.map