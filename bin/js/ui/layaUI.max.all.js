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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var GameUI;
    (function (GameUI_1) {
        var GameUI = /** @class */ (function (_super) {
            __extends(GameUI, _super);
            function GameUI() {
                return _super.call(this) || this;
            }
            GameUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.GameUI.GameUI.uiView);
            };
            GameUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1280, "height": 720, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 360, "x": 640, "skin": "Panel/HallBackground.jpg", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "var": "testBtn", "top": 0, "skin": "Button/GeneralButton.png", "left": 0, "alpha": 1 }, "child": [{ "type": "Label", "props": { "y": 34, "x": 89, "text": "菜单", "fontSize": 32, "font": "Arial", "color": "#ffffff", "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return GameUI;
        }(View));
        GameUI_1.GameUI = GameUI;
    })(GameUI = ui.GameUI || (ui.GameUI = {}));
})(ui || (ui = {}));
(function (ui) {
    var GameUI;
    (function (GameUI) {
        var MaskUI = /** @class */ (function (_super) {
            __extends(MaskUI, _super);
            function MaskUI() {
                return _super.call(this) || this;
            }
            MaskUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.GameUI.MaskUI.uiView);
            };
            MaskUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "width": 1280, "var": "mask", "skin": "Frame/mask.png", "sizeGrid": "4,4,4,4", "height": 720, "centerY": 0, "centerX": 0, "alpha": 0.6 } }] };
            return MaskUI;
        }(View));
        GameUI.MaskUI = MaskUI;
    })(GameUI = ui.GameUI || (ui.GameUI = {}));
})(ui || (ui = {}));
(function (ui) {
    var GameUI;
    (function (GameUI) {
        var OverUI = /** @class */ (function (_super) {
            __extends(OverUI, _super);
            function OverUI() {
                return _super.call(this) || this;
            }
            OverUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.GameUI.OverUI.uiView);
            };
            OverUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 300, "skin": "Frame/iconBG.png", "sizeGrid": "22,22,22,22", "height": 300, "centerY": 0, "centerX": 0, "alpha": 0.5 } }, { "type": "Image", "props": { "y": 266, "x": 552, "var": "againBtn", "skin": "Button/GeneralButton.png", "centerY": -55, "centerX": 0 }, "child": [{ "type": "Label", "props": { "y": 34, "x": 89, "text": "重新开始", "fontSize": 32, "font": "Arial", "color": "#ffffff", "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 376, "x": 552, "var": "returnBtn", "skin": "Button/GeneralButton.png", "centerY": 55, "centerX": 0 }, "child": [{ "type": "Label", "props": { "y": 34, "x": 89, "text": "返回界面", "fontSize": 32, "font": "Arial", "color": "#ffffff", "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return OverUI;
        }(Dialog));
        GameUI.OverUI = OverUI;
    })(GameUI = ui.GameUI || (ui.GameUI = {}));
})(ui || (ui = {}));
(function (ui) {
    var GameUI;
    (function (GameUI) {
        var PatternUI = /** @class */ (function (_super) {
            __extends(PatternUI, _super);
            function PatternUI() {
                return _super.call(this) || this;
            }
            PatternUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.GameUI.PatternUI.uiView);
            };
            PatternUI.uiView = { "type": "Dialog", "props": { "y": 0, "x": 0, "width": 60, "height": 60 }, "child": [{ "type": "Image", "props": { "width": 70, "skin": "Frame/iconBG.png", "sizeGrid": "20,20,20,20", "height": 70, "centerY": 0, "centerX": 0 } }, { "type": "Image", "props": { "var": "icon", "skin": "Icon/1.png", "scaleY": 1.2, "scaleX": 1.2, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
            return PatternUI;
        }(Dialog));
        GameUI.PatternUI = PatternUI;
    })(GameUI = ui.GameUI || (ui.GameUI = {}));
})(ui || (ui = {}));
(function (ui) {
    var LoginUI;
    (function (LoginUI_1) {
        var LoginUI = /** @class */ (function (_super) {
            __extends(LoginUI, _super);
            function LoginUI() {
                return _super.call(this) || this;
            }
            LoginUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.LoginUI.LoginUI.uiView);
            };
            LoginUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1280, "height": 720, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "skin": "Panel/LoginBackground.jpg", "centerY": 0, "centerX": 0 } }, { "type": "Image", "props": { "y": 560, "x": 646, "var": "wxBtn", "skin": "Button/WechatLogin.png", "anchorY": 0.5, "anchorX": 0.5 } }] };
            return LoginUI;
        }(View));
        LoginUI_1.LoginUI = LoginUI;
    })(LoginUI = ui.LoginUI || (ui.LoginUI = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map