var LoginController = /** @class */ (function () {
    function LoginController() {
        this.mLoginMode = new LoginMode();
        this.AddListener();
    }
    LoginController.prototype.AddListener = function () {
        EventManage.Instance().AddListener(EventEnum.preLoad_complete, this.StartGame.bind(this));
        EventManage.Instance().AddListener(EventEnum.login, this.Processor.bind(this));
    };
    LoginController.prototype.StartGame = function () {
        this.mLoginView = new LoginView();
        GameManage.Instance().mRoot.addChild(this.mLoginView);
    };
    LoginController.prototype.Processor = function (type, args) {
        switch (type) {
            case "login":
                this.Processor2login();
                break;
        }
    };
    LoginController.prototype.Processor2login = function () {
        this.mLoginView.destroy();
        EventManage.Instance().Broadcast(EventEnum.enter_game);
    };
    return LoginController;
}());
//# sourceMappingURL=LoginController.js.map