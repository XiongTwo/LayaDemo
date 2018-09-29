var TimeManage = /** @class */ (function () {
    function TimeManage() {
        this.UpdateList = [];
    }
    TimeManage.Instance = function () {
        if (this.instance == null)
            this.instance = new TimeManage();
        return this.instance;
    };
    TimeManage.prototype.AddUpdateFun = function (fun) {
        this.UpdateList.push(fun);
    };
    TimeManage.prototype.RemoveUpdateFun = function (fun) {
        this.UpdateList.splice(this.UpdateList.indexOf(fun), 1);
    };
    TimeManage.prototype.Init = function () {
        this.totalTime = 0;
        this.totalFrame = 0;
        Laya.timer.frameLoop(1, this, this.Update);
    };
    TimeManage.prototype.Reset = function () {
        Laya.timer.clearAll(this);
        TimeManage.instance = null;
    };
    TimeManage.prototype.once = function (delay, method, args) {
        Laya.timer.once(delay * 1000, this, method, args);
    };
    TimeManage.prototype.GetTotalTime = function () {
        return this.totalTime / 1000;
    };
    TimeManage.prototype.GetTotalFrame = function () {
        return this.totalFrame;
    };
    TimeManage.prototype.Update = function () {
        this.totalTime += Laya.timer.delta;
        this.totalFrame++;
        for (var i = 0; i < this.UpdateList.length; i++) {
            this.UpdateList[i]();
        }
    };
    return TimeManage;
}());
//# sourceMappingURL=TimeManage.js.map