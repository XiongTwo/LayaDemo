class LoginView extends ui.LoginUI.LoginUI {

    constructor() 
    {
        super();
        this.Init();
    }
    private Init()  
    {
        Common.AddClickListener(this.wxBtn,this.WxBtnClick.bind(this));
    }
    private WxBtnClick(){
        EventManage.Instance().Broadcast(EventEnum.login, "login");
    }
}