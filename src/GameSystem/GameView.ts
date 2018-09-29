class GameView extends ui.GameUI.GameUI {

    private mGameMode:GameMode=null;

    public checkerboard:Laya.View=null;

    constructor() 
    {
        super();
        this.width=Laya.stage.width;
        this.height=Laya.stage.height;
        this.Init();
    }
    private Init()  
    {
        this.checkerboard=new Laya.View();
        var tempPattern:Array<GamePattern>=[];
        this.mGameMode=ControllerManage.Instance().mGameController.mGameMode;
        this.mGameMode.checkerboard=[];
        for (var i = 0; i < this.mGameMode.horizontalCount; i++) {
            var verticalCount=[];
            for (var j = 0; j < this.mGameMode.verticalCount; j++) {
                var pattern= new GamePattern();
                verticalCount[j] = pattern;
                this.checkerboard.addChild(pattern);
                pattern.Init(i,j);
                if(i==0||j==0||i==this.mGameMode.horizontalCount-1||j==this.mGameMode.verticalCount-1)
                    pattern.SetEmpty();
                else
                    tempPattern.push(pattern);
            }
            this.mGameMode.checkerboard[i]=verticalCount;
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
        
        this.checkerboard.centerX=0;
        this.checkerboard.centerY=0;
        this.addChild(this.checkerboard);
    }
    
}