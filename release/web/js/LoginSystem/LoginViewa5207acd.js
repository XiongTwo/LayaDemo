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
var LoginView = /** @class */ (function (_super) {
    __extends(LoginView, _super);
    function LoginView() {
        var _this = _super.call(this) || this;
        _this.Init();
        return _this;
    }
    LoginView.prototype.Init = function () {
        Common.AddClickListener(this.wxBtn, this.WxBtnClick.bind(this));
    };
    LoginView.prototype.WxBtnClick = function () {
        EventManage.Instance().Broadcast(EventEnum.login, "login");
    };
    return LoginView;
}(ui.LoginUI.LoginUI));
//# sourceMappingURL=LoginView.js.map