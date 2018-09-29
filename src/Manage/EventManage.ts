class EventManage extends Laya.Sprite{
    private static instance: EventManage;

    public static Instance() 
    {
        if (this.instance == null)
            this.instance = new EventManage();
        return this.instance;
    };
    public Init()
    {

    }
    public Reset(){
        EventManage.instance.offAll();
        EventManage.instance.destroy();
        EventManage.instance=null;
    }
    public Broadcast(e: EventEnum, arg: any = null) 
    {
        EventManage.Instance().event(EventEnum[e], arg);
    }
    public AddListener(e: EventEnum, fun: Function) 
    {
        EventManage.Instance().on(EventEnum[e], this, fun);
    }
    public RemoveListener(e: EventEnum, fun: Function) 
    {
        EventManage.Instance().off(EventEnum[e], this, fun);
    }
}
