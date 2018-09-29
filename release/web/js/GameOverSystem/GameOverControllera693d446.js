var GameOverController = /** @class */ (function () {
    function GameOverController() {
        this.AddListener();
    }
    GameOverController.prototype.AddListener = function () {
        EventManage.Instance().AddListener(EventEnum.over_game, this.GameOver.bind(this));
    };
    GameOverController.prototype.GameOver = function () {
        this.mGameOverViewMask = new ui.GameUI.MaskUI();
        this.mGameOverViewMask.mask.width = Laya.stage.width;
        this.mGameOverViewMask.mask.height = Laya.stage.height;
        GameManage.Instance().mRoot.addChild(this.mGameOverViewMask);
        this.mGameOverView = new GameOverView();
        this.mGameOverView.show();
        GameManage.Instance().mRootStage.push(this.mGameOverView);
        Common.AddClickListener(this.mGameOverView.againBtn, this.AgainBtnClick.bind(this));
        Common.AddClickListener(this.mGameOverView.returnBtn, this.ReturnBtnClick.bind(this));
    };
    GameOverController.prototype.AgainBtnClick = function () {
        console.log("AgainBtnClick");
        this.mGameOverViewMask.destroy();
        this.mGameOverView.destroy();
        GameManage.Instance().AgainGame();
    };
    GameOverController.prototype.ReturnBtnClick = function () {
        console.log("ReturnBtnClick");
        GameManage.Instance().ResetGame();
    };
    return GameOverController;
}());
//# sourceMappingURL=GameOverController.js.map