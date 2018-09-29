class GameController{
    public mGameMode: GameMode;
    public mGameView: GameView;

    public mSelected:GamePattern;
    public mSecondSelected:GamePattern;
    public mLineArray:Array<Laya.Image>=[];
    public mDoEmpty:Array<GamePattern>=[];

    constructor() 
    {
        this.mGameMode = new GameMode();
        this.AddListener();
    }

    private AddListener() 
    {
        EventManage.Instance().AddListener(EventEnum.enter_game, this.EnterGame.bind(this));
        EventManage.Instance().AddListener(EventEnum.game, this.Processor.bind(this));
        
    }
    private Test(){
        console.log("Test");
        EventManage.Instance().Broadcast(EventEnum.over_game);
    }
    private EnterGame()
    {
        this.mGameView=new GameView();
        //this.mGameView.width=Laya.stage.width;
        //this.mGameView.height=Laya.stage.height;
        GameManage.Instance().mRoot.addChild(this.mGameView);
        Common.AddClickListener(this.mGameView.testBtn,this.Test.bind(this),false);
    }
    public ResetGame()
    {
        this.mGameView.destroy();
        this.EnterGame();
    }
    private Processor(type:string,args:any) 
    {
        switch (type) {
            case "selected":
                this.Processor2selected(args);
                break;
        }
    }
    private Processor2selected(obj:GamePattern) 
    {
        if(this.mSelected==null)
        {
            obj.icon.gray=true;
            this.mSelected=obj;
            this.mSecondSelected=null;
        }
        else
        {
            this.mSecondSelected=obj;
            var isCheckLinked:boolean = this.IsCheckLinked(this.mSelected,obj);
            if(!isCheckLinked)
            {
                this.mSelected.icon.gray=false;
                obj.icon.gray=true;
                this.mSelected=obj;
            }
            else
            {
                
                obj.icon.gray=true;
                this.mDoEmpty.push(this.mSelected);
                this.mDoEmpty.push(this.mSecondSelected);
                this.Connect(this.points,this.ConnectOver.bind(this));
                this.mSelected=null;
                this.mSecondSelected=null;
            }
        }
    }
    private ConnectOver() {
        console.log(this.mSelected);
        for(var i=0;i<this.mDoEmpty.length;i++)
            this.mDoEmpty[i].SetEmpty();
        this.mDoEmpty=[];
        for(var i=0;i<this.mLineArray.length;i++)
            this.mLineArray[i].destroy();
        if (this.IsCheckGameOver())
            EventManage.Instance().Broadcast(EventEnum.over_game);
    }
    private ConsoleLogPoints(arr){
        //var arr=this.points;
        console.log("points:");
        for (var i = 0; i < arr.length; i++) {
            console.log("[" + arr[i].xIndex + "," + arr[i].yIndex + "]");
        }
    }

    public points:Array<GamePattern>=[];
    private CheckPoint(p:GamePattern):boolean{
        return !p.icon.visible;
    }
    private IsCheckLinked(p1:GamePattern,p2:GamePattern):boolean
    {
        if (p1.icon.source != p2.icon.source) 
            return false;
        this.points=[];
        if(this.LineLink(p1,p2)){
            this.points.unshift(p1);
            this.points.push(p2);
            this.ConsoleLogPoints(this.points);
            console.log("1线");
            return true;
        }
        else if(this.LineLinkTwo(p1,p2)){
            this.points.unshift(p1);
            this.points.push(p2);
            this.ConsoleLogPoints(this.points);
            console.log("2线");
            return true;
        }
        else if(this.LineLinkThree(p1,p2)){
            this.points.unshift(p1);
            this.points.push(p2);
            this.ConsoleLogPoints(this.points);
            console.log("3线");
            return true;
        }
        return false;
    }
    private LineLink(p1:GamePattern,p2:GamePattern): Boolean {
        //（1）0转角连通（直线连通）：两个图片的纵坐标或横坐标相等，且两者连线间没有其他图案阻隔。
        if(p1.xIndex==p2.xIndex||p1.yIndex==p2.yIndex)
        {
            if (Math.abs(p1.xIndex - p2.xIndex) + Math.abs(p1.yIndex - p2.yIndex) <= 1)
                return true;
           if(p1.xIndex==p2.xIndex)
           {
               var yOffset = Math.abs(p1.yIndex-p2.yIndex);
               var min:GamePattern = p1.yIndex<p2.yIndex?p1:p2;
               for(var i=1;i<yOffset;i++){
                    if(!this.CheckPoint(this.mGameMode.checkerboard[min.xIndex][min.yIndex+i]))
                        return false;
               }
               return true;
           }
           if (p1.yIndex == p2.yIndex)  
           {
               var xOffset = Math.abs(p1.xIndex - p2.xIndex);
               var min: GamePattern = p1.xIndex < p2.xIndex ? p1 : p2;
               for (var i = 1; i < xOffset; i++) {
                   if (!this.CheckPoint(this.mGameMode.checkerboard[min.xIndex+i][min.yIndex]))
                       return false;
               }
               return true;
           } 
        }
        else
            return false;
    }
    private LineLinkTwo(p1:GamePattern,p2:GamePattern): Boolean {
        //（2）1转角连通（2直线连通）：两个图片的纵坐标和横坐标都不相等。
        if(p1.xIndex==p2.xIndex||p1.yIndex==p2.yIndex)
            return false;
        var p3=this.mGameMode.checkerboard[p1.xIndex][p2.yIndex];
        var p4=this.mGameMode.checkerboard[p2.xIndex][p1.yIndex];
        if(this.CheckPoint(p3)&&this.LineLink(p1,p3)&&this.LineLink(p2,p3)){
            this.points.push(p3);
            return true;
        }
        if(this.CheckPoint(p4)&&this.LineLink(p1,p4)&&this.LineLink(p2,p4)){
            this.points.push(p4);
            return true;
        }
        return false;
    }
    private LineLinkThree(p1:GamePattern,p2:GamePattern): Boolean {
        //（3）2转角连通（3直线连通）
        var tempArr:Array<GamePattern>=[];
        for(var i=p1.xIndex-1;i>=0;i--){
            var temp=this.mGameMode.checkerboard[i][p1.yIndex];
            if (this.CheckPoint(temp))
                tempArr.push(temp);
            else
                break;
        }
        for(var i=p1.xIndex+1;i<this.mGameMode.horizontalCount;i++){
            var temp=this.mGameMode.checkerboard[i][p1.yIndex];
            if (this.CheckPoint(temp))
                tempArr.push(temp);
            else
                break;
        }
        for(var i=p1.yIndex-1;i>=0;i--){
            var temp=this.mGameMode.checkerboard[p1.xIndex][i];
            if (this.CheckPoint(temp))
                tempArr.push(temp);
            else
                break;
        }
        for(var i=p1.yIndex+1;i<this.mGameMode.verticalCount;i++){
            var temp=this.mGameMode.checkerboard[p1.xIndex][i];
            if (this.CheckPoint(temp))
                tempArr.push(temp);
            else
                break;
        }
        for(var i=0;i<tempArr.length;i++){
            if(this.LineLinkTwo(tempArr[i],p2)){
                this.points.unshift(tempArr[i]);
                return true;
            }
        }
        return false;
    }
    private Connect(arr:Array<GamePattern>,fun:Function){
        console.log(arr.length);
        var p1 = arr.shift();
        if(arr.length==0){
            fun();
            return;
        }

        this.DrawLink(new Laya.Point(p1.x+p1.icon.x,p1.y+p1.icon.y),
            new Laya.Point(arr[0].x+arr[0].icon.x,arr[0].y+arr[0].icon.y));
    }
    private DrawLink(from:Laya.Point,to:Laya.Point){
        var line:Laya.Image=new Laya.Image("Frame/link.png");
        this.mGameView.checkerboard.addChild(line);
        this.mLineArray.push(line);
        line.sizeGrid="1,1,1,1";
        line.x=from.x;
        line.y=from.y;
        line.width=0;
        line.height=4;
        line.anchorY=0.5;
        if(from.x>to.x){
            line.rotation=180;
        }
        else if(from.y<to.y){
            line.rotation=90;
            line.anchorY=0;
        }
        else if(from.y>to.y){
            line.rotation=-90;
            line.anchorY=1;
        }
        var distance= Math.abs(from.x - to.x) + Math.abs(from.y - to.y);
        laya.utils.Tween.to(line, { width: distance }, 400,null, Laya.Handler.create(this, this.Connect,[this.points,this.ConnectOver.bind(this)]));
    }
    private IsCheckGameOver():boolean
    {
        for (var i = 0; i < this.mGameMode.checkerboard.length; i++)
            for (var j = 0; j < this.mGameMode.checkerboard[i].length; j++)  
            {
                if((this.mGameMode.checkerboard[i][j] as GamePattern).icon.visible)
                    return false;
            }
        return true;
    }
}