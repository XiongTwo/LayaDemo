class LoginController {

    public mLoginMode: LoginMode;
    public mLoginView: LoginView;

    constructor() 
    {
        this.mLoginMode = new LoginMode();
        this.AddListener();
    }

    private AddListener() 
    {
        EventManage.Instance().AddListener(EventEnum.preLoad_complete, this.StartGame.bind(this));
        EventManage.Instance().AddListener(EventEnum.login, this.Processor.bind(this));
    }
    private StartGame() 
    {
        this.mLoginView=new LoginView();
        GameManage.Instance().mRoot.addChild(this.mLoginView);
    }
    private Processor(type:string,args:any) 
    {
        switch (type) {
            case "login":
                this.Processor2login();
                break;
        }
    }
    private Processor2login() 
    {
        this.mLoginView.destroy();
        EventManage.Instance().Broadcast(EventEnum.enter_game);
    }
}