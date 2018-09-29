
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.GameUI {
    export class GameUI extends View {
		public testBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1280,"height":720,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":360,"x":640,"skin":"Panel/HallBackground.jpg","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"testBtn","top":0,"skin":"Button/GeneralButton.png","left":0,"alpha":1},"child":[{"type":"Label","props":{"y":34,"x":89,"text":"菜单","fontSize":32,"font":"Arial","color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.GameUI.uiView);

        }

    }
}

module ui.GameUI {
    export class MaskUI extends View {
		public mask:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":1280,"var":"mask","skin":"Frame/mask.png","sizeGrid":"4,4,4,4","height":720,"centerY":0,"centerX":0,"alpha":0.6}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.MaskUI.uiView);

        }

    }
}

module ui.GameUI {
    export class OverUI extends Dialog {
		public againBtn:Laya.Image;
		public returnBtn:Laya.Image;

        public static  uiView:any ={"type":"Dialog","props":{"y":0,"x":0,"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":0,"width":300,"skin":"Frame/iconBG.png","sizeGrid":"22,22,22,22","height":300,"centerY":0,"centerX":0,"alpha":0.5}},{"type":"Image","props":{"y":266,"x":552,"var":"againBtn","skin":"Button/GeneralButton.png","centerY":-55,"centerX":0},"child":[{"type":"Label","props":{"y":34,"x":89,"text":"重新开始","fontSize":32,"font":"Arial","color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":376,"x":552,"var":"returnBtn","skin":"Button/GeneralButton.png","centerY":55,"centerX":0},"child":[{"type":"Label","props":{"y":34,"x":89,"text":"返回界面","fontSize":32,"font":"Arial","color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.OverUI.uiView);

        }

    }
}

module ui.GameUI {
    export class PatternUI extends Dialog {
		public icon:Laya.Image;

        public static  uiView:any ={"type":"Dialog","props":{"y":0,"x":0,"width":60,"height":60},"child":[{"type":"Image","props":{"width":70,"skin":"Frame/iconBG.png","sizeGrid":"20,20,20,20","height":70,"centerY":0,"centerX":0}},{"type":"Image","props":{"var":"icon","skin":"Icon/1.png","scaleY":1.2,"scaleX":1.2,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.PatternUI.uiView);

        }

    }
}

module ui.LoginUI {
    export class LoginUI extends View {
		public wxBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1280,"height":720,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"skin":"Panel/LoginBackground.jpg","centerY":0,"centerX":0}},{"type":"Image","props":{"y":560,"x":646,"var":"wxBtn","skin":"Button/WechatLogin.png","anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoginUI.LoginUI.uiView);

        }

    }
}
