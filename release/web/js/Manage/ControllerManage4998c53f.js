var ControllerManage = /** @class */ (function () {
    function ControllerManage() {
    }
    ControllerManage.Instance = function () {
        if (this.instance == null)
            this.instance = new ControllerManage();
        return this.instance;
    };
    ControllerManage.prototype.Init = function () {
        this.mLoginController = new LoginController();
        this.mPreLoadController = new PreLoadController();
        this.mGameController = new GameController();
        this.mGameOverController = new GameOverController();
    };
    ControllerManage.prototype.Reset = function () {
        ControllerManage.instance = null;
    };
    return ControllerManage;
}());
//# sourceMappingURL=ControllerManage.js.map