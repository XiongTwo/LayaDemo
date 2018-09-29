class Common{
    public static AddClickListener(go: Laya.Sprite, e: Function, isPlayAnimation: boolean = true)  {
        if (!isPlayAnimation)  {
            go.on(Laya.Event.MOUSE_DOWN, this, () =>  {
                e();
            });
            return;
        }

        var _scaleX = go.scaleX;
        var _scaleY = go.scaleY;
        go.on(Laya.Event.MOUSE_DOWN, this, () =>  {
            laya.utils.Tween.to(go, { scaleX: _scaleX * 0.8, scaleY: _scaleY * 0.8 }, 200);
        });

        go.on(Laya.Event.MOUSE_UP, this, () => {
            if(go.scaleX==_scaleX)
                return;
            laya.utils.Tween.to(go, { scaleX: _scaleX, scaleY: _scaleY }, 200, null, Laya.Handler.create(this, e));
        });

        go.on(Laya.Event.MOUSE_OUT, this, () =>  {
            laya.utils.Tween.to(go, { scaleX: _scaleX, scaleY: _scaleY }, 200);
        });

    }

    public static Random(max:number):number
    {
       return (Math.floor(Math.random()*max+1));
    }
}