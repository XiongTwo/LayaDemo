var ResourceManage = /** @class */ (function () {
    function ResourceManage() {
        this.Init();
    }
    ResourceManage.Instance = function () {
        if (this.instance == null)
            this.instance = new ResourceManage();
        return this.instance;
    };
    ResourceManage.prototype.Reset = function () {
        ResourceManage.instance = null;
    };
    ResourceManage.prototype.Init = function () {
        //父路径
        //Laya.URL.basePath = "https://shxingwan-down.oss-cn-shenzhen.aliyuncs.com/wechatGame/cocosGameRes/Swing/";
        //本地加载名单
        Laya.MiniAdpter.nativefiles = [];
        // 无加载失败重试
        Laya.loader.retryNum = 0;
    };
    //预加载
    ResourceManage.prototype.PreLoad = function () {
        var resArry = [
            { url: "res/atlas/Button.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/Icon.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/Frame.atlas", type: Laya.Loader.ATLAS },
            { url: "Panel/LoginBackground.jpg", type: Laya.Loader.IMAGE },
            { url: "Panel/HallBackground.jpg", type: Laya.Loader.IMAGE },
        ];
        Laya.loader.load(resArry, Laya.Handler.create(this, this.PreLoadComplete), Laya.Handler.create(this, this.PreLoadProgress, null, false));
    };
    ResourceManage.prototype.PreLoadComplete = function () {
        EventManage.Instance().Broadcast(EventEnum.preLoad_complete);
    };
    ResourceManage.prototype.PreLoadProgress = function (progress) {
        console.log("加载进度: " + progress);
        EventManage.Instance().Broadcast(EventEnum.preLoad_progress, progress);
    };
    //同步获取资源,返回为undefined就要异步加载,也可以用来判断资源是否已经加载
    ResourceManage.prototype.GetRes = function (url) {
        return Laya.loader.getRes(url);
    };
    //异步获取资源
    ResourceManage.prototype.AsynGetRes = function (url, handler) {
        Laya.loader.load(url, handler);
    };
    return ResourceManage;
}());
//# sourceMappingURL=ResourceManage.js.map