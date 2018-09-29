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
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super.call(this) || this;
        _this.mGameMode = null;
        _this.checkerboard = null;
        _this.width = Laya.stage.width;
        _this.height = Laya.stage.height;
        _this.Init();
        return _this;
    }
    GameView.prototype.Init = function () {
        this.checkerboard = new Laya.View();
        var tempPattern = [];
        this.mGameMode = ControllerManage.Instance().mGameController.mGameMode;
        this.mGameMode.checkerboard = [];
        for (var i = 0; i < this.mGameMode.horizontalCount; i++) {
            var verticalCount = [];
            for (var j = 0; j < this.mGameMode.verticalCount; j++) {
                var pattern = new GamePattern();
                verticalCount[j] = pattern;
                this.checkerboard.addChild(pattern);
                pattern.Init(i, j);
                if (i == 0 || j == 0 || i == this.mGameMode.horizontalCount - 1 || j == this.mGameMode.verticalCount - 1)
                    pattern.SetEmpty();
                else
                    tempPattern.push(pattern);
            }
            this.mGameMode.checkerboard[i] = verticalCount;
        }
        while (tempPattern.length > 0) {
            //1-26
            var iconName = "Icon/" + Common.Random(10) + ".png";
            var temp1 = tempPattern[Common.Random(tempPattern.length - 1)];
            tempPattern.splice(tempPattern.indexOf(temp1), 1);
            var temp2 = tempPattern[Common.Random(tempPattern.length - 1)];
            if (tempPattern.length == 1)
                temp2 = tempPattern[0];
            tempPattern.splice(tempPattern.indexOf(temp2), 1);
            temp1.SetIcon(iconName);
            temp2.SetIcon(iconName);
        }
        this.checkerboard.centerX = 0;
        this.checkerboard.centerY = 0;
        this.addChild(this.checkerboard);
    };
    return GameView;
}(ui.GameUI.GameUI));
//# sourceMappingURL=GameView.js.map