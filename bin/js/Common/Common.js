var Common = /** @class */ (function () {
    function Common() {
    }
    Common.AddClickListener = function (go, e, isPlayAnimation) {
        var _this = this;
        if (isPlayAnimation === void 0) { isPlayAnimation = true; }
        if (!isPlayAnimation) {
            go.on(Laya.Event.MOUSE_DOWN, this, function () {
                e();
            });
            return;
        }
        var _scaleX = go.scaleX;
        var _scaleY = go.scaleY;
        go.on(Laya.Event.MOUSE_DOWN, this, function () {
            laya.utils.Tween.to(go, { scaleX: _scaleX * 0.8, scaleY: _scaleY * 0.8 }, 200);
        });
        go.on(Laya.Event.MOUSE_UP, this, function () {
            if (go.scaleX == _scaleX)
                return;
            laya.utils.Tween.to(go, { scaleX: _scaleX, scaleY: _scaleY }, 200, null, Laya.Handler.create(_this, e));
        });
        go.on(Laya.Event.MOUSE_OUT, this, function () {
            laya.utils.Tween.to(go, { scaleX: _scaleX, scaleY: _scaleY }, 200);
        });
    };
    Common.Random = function (max) {
        return (Math.floor(Math.random() * max + 1));
    };
    return Common;
}());
//# sourceMappingURL=Common.js.map