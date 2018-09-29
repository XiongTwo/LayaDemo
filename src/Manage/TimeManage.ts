class TimeManage{

    private  totalTime:number;
    private  totalFrame:number;

    private  UpdateList:Array<Function>=[];

    private static instance:TimeManage;

    public static Instance()  
    {
        if (this.instance == null)
            this.instance = new TimeManage();
        return this.instance;
    }

    public AddUpdateFun(fun:Function)
    {
        this.UpdateList.push(fun);
    }
    public RemoveUpdateFun(fun:Function)
    {
        this.UpdateList.splice(this.UpdateList.indexOf(fun),1);
    }

    public Init()
    {
        this.totalTime = 0;
        this.totalFrame = 0;
        Laya.timer.frameLoop(1,this,this.Update);
    }
    public Reset(){
        Laya.timer.clearAll(this);
        TimeManage.instance=null;
    }

    public once(delay: number, method: Function, args?: Array<any>)
    {
        Laya.timer.once(delay*1000, this, method,args);
    }

    public  GetTotalTime()
    {
        return this.totalTime/1000;
    }

    public  GetTotalFrame()
    {
        return this.totalFrame;
    }

    private Update()
    {
        this.totalTime += Laya.timer.delta;
        this.totalFrame++;
        for(var i=0;i<this.UpdateList.length;i++)
        {
             this.UpdateList[i]();
        }
    }
}