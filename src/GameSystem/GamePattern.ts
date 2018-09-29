class GamePattern extends ui.GameUI.PatternUI{
    constructor(){
        super();
    }

    private mGameMode:GameMode=null;
    private mGameController:GameController=null;

    public xIndex:number=-1;
    public yIndex:number=-1;
    public isSelected:boolean=false;

    public Init(x,y)
    {
        this.mGameMode=ControllerManage.Instance().mGameController.mGameMode;
        this.mGameController=ControllerManage.Instance().mGameController;

        this.xIndex=x;
        this.yIndex=y;
        this.isSelected=false;
        this.x=66*x;
        this.y=66*y;

        this.icon.on(laya.events.Event.MOUSE_DOWN,this,this.Click.bind(this));
    }
    public SetEmpty()
    {
        this.icon.visible=false;
    }
    public SetIcon(ico:string)
    {
        this.icon.source=ResourceManage.Instance().GetRes<Laya.Texture>(ico);
    }
    private Click()
    {
        if(this.icon.gray)
            return;
        EventManage.Instance().Broadcast(EventEnum.game,["selected",this]);
    }
}