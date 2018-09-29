class ResourceManage{
    
    private static instance:ResourceManage;
    public static Instance()  
    {
        if (this.instance == null)
            this.instance = new ResourceManage();
        return this.instance;
    }

    constructor() 
    {
        this.Init();
    }
    public Reset(){
        ResourceManage.instance=null;
    }
    public Init()  
    {
        //父路径
        //Laya.URL.basePath = "https://shxingwan-down.oss-cn-shenzhen.aliyuncs.com/wechatGame/cocosGameRes/Swing/";
        //本地加载名单
        Laya.MiniAdpter.nativefiles=[];
        // 无加载失败重试
		Laya.loader.retryNum = 0;
    }
    //加载版本信息文件
    public ResourceVersion(){
        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.PreLoad));  
    }
    //预加载
    private PreLoad(){
        var resArry = [
            { url: "res/atlas/Button.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/Icon.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/Frame.atlas", type: Laya.Loader.ATLAS },
            { url: "Panel/LoginBackground.jpg", type: Laya.Loader.IMAGE },
            { url: "Panel/HallBackground.jpg", type: Laya.Loader.IMAGE },
        ];
        Laya.loader.load(resArry,Laya.Handler.create(this, this.PreLoadComplete),Laya.Handler.create(this, this.PreLoadProgress,null,false));
    }
    private PreLoadComplete(){
        EventManage.Instance().Broadcast(EventEnum.preLoad_complete);
    }
    private PreLoadProgress(progress: number){
        console.log("加载进度: " + progress);
        EventManage.Instance().Broadcast(EventEnum.preLoad_progress,progress);
    }
    //同步获取资源,返回为undefined就要异步加载,也可以用来判断资源是否已经加载
    public GetRes<T>(url:string):T{
        return Laya.loader.getRes(url);
    }
    //异步获取资源
    public AsynGetRes(url:any,handler:laya.utils.Handler){
        Laya.loader.load(url,handler);
    }
}