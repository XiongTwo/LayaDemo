class GameOverController{

    public mGameOverView: GameOverView;
    public mGameOverViewMask:ui.GameUI.MaskUI;

    constructor() 
    {
        this.AddListener();
    }
    private AddListener() 
    {
        EventManage.Instance().AddListener(EventEnum.over_game, this.GameOver.bind(this));
    }
    private GameOver()
    {
        this.mGameOverViewMask=new ui.GameUI.MaskUI();
        this.mGameOverViewMask.mask.width=Laya.stage.width;
        this.mGameOverViewMask.mask.height=Laya.stage.height;
        GameManage.Instance().mRoot.addChild(this.mGameOverViewMask);
        this.mGameOverView=new GameOverView();
        this.mGameOverView.show();
        GameManage.Instance().mRootStage.push(this.mGameOverView);

        Common.AddClickListener(this.mGameOverView.againBtn,this.AgainBtnClick.bind(this));
        Common.AddClickListener(this.mGameOverView.returnBtn,this.ReturnBtnClick.bind(this));

        console.log("GameOver");

        for (var key in Dialog.manager) {   //Dialog.manager.popupEffectHandler
            if (Dialog.manager.hasOwnProperty(key)) {
                var element = this.mGameOverView[key];
                if(key=="showEffect")
                    console.log(key +"="+ element);
            }
        }
    }
    private AgainBtnClick()
    {
        console.log("AgainBtnClick");
        this.mGameOverViewMask.destroy();
        this.mGameOverView.destroy();
        GameManage.Instance().AgainGame();
    }
    private ReturnBtnClick()
    {
        console.log("ReturnBtnClick");
        GameManage.Instance().ResetGame();
    }
}