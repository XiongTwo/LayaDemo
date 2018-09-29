class PreLoadController{
    
    private static isPreLoad:boolean=false;

    constructor(){
        this.AddListener();
    }

    private AddListener() 
    {
        EventManage.Instance().AddListener(EventEnum.start_game, this.StartGame.bind(this));
    }
    private StartGame() 
    {
        if(PreLoadController.isPreLoad==false)
        {
            ResourceManage.Instance().ResourceVersion();
            PreLoadController.isPreLoad=true;
        }
        else
        {
            EventManage.Instance().Broadcast(EventEnum.preLoad_complete);
        }
    }
}