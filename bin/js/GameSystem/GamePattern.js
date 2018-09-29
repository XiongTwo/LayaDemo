var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GamePattern = /** @class */ (function (_super) {
    __extends(GamePattern, _super);
    function GamePattern() {
        var _this = _super.call(this) || this;
        _this.mGameMode = null;
        _this.mGameController = null;
        _this.xIndex = -1;
        _this.yIndex = -1;
        _this.isSelected = false;
        return _this;
    }
    GamePattern.prototype.Init = function (x, y) {
        this.mGameMode = ControllerManage.Instance().mGameController.mGameMode;
        this.mGameController = ControllerManage.Instance().mGameController;
        this.xIndex = x;
        this.yIndex = y;
        this.isSelected = false;
        this.x = 66 * x;
        this.y = 66 * y;
        this.icon.on(laya.events.Event.MOUSE_DOWN, this, this.Click.bind(this));
    };
    GamePattern.prototype.SetEmpty = function () {
        this.icon.visible = false;
    };
    GamePattern.prototype.SetIcon = function (ico) {
        this.icon.source = ResourceManage.Instance().GetRes(ico);
    };
    GamePattern.prototype.Click = function () {
        if (this.icon.gray)
            return;
        EventManage.Instance().Broadcast(EventEnum.game, ["selected", this]);
    };
    return GamePattern;
}(ui.GameUI.PatternUI));
//# sourceMappingURL=GamePattern.js.map