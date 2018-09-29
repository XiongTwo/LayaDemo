class ControllerManage{

    private static instance:ControllerManage;

    public static Instance()  
    {
        if (this.instance == null)
            this.instance = new ControllerManage();
        return this.instance;
    }

    public  mLoginController:LoginController;
    public  mPreLoadController:PreLoadController;
    public  mGameController:GameController;
    public  mGameOverController:GameOverController;

    public Init()
    {
         this.mLoginController = new LoginController();
         this.mPreLoadController = new PreLoadController();
         this.mGameController = new GameController();
         this.mGameOverController = new GameOverController();
    }
    public Reset(){
        ControllerManage.instance=null;
    }
}