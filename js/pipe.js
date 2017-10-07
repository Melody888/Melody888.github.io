function  Pipe(option) {
    this.ctx=option.ctx;
    this.topImg=option.topImg;
    this.bottomImg=option.bottomImg;
    this.canvash=option.canvash;
    this.canvasx=option.canvasx;



    this.canvasy1=0;
    this.canvasy2=0;
    this.spance=150;
    this.speed=2;
    this.getrandom();
}

Pipe.prototype={
    constructor:Pipe,
    drawpipe:function () {
        //计算pipe的canvasy

        this.canvasx -= this.speed;

        if(this.canvasx <= -this.topImg.width*3){
            this.canvasx=this.canvasx+this.topImg.width*3*6;
            this.getrandom();
        }

        this.ctx.drawImage(this.topImg,this.canvasx,this.canvasy1);
        this.ctx.rect(this.canvasx,this.canvasy1,this.topImg.width,this.topImg.height);
        this.ctx.drawImage(this.bottomImg,this.canvasx,this.canvasy2);
        this.ctx.rect(this.canvasx,this.canvasy2,this.bottomImg.width,this.bottomImg.height);
    },
    getrandom:function () {
        this.canvasy1 = -Math.floor(Math.random()*141)-130;
        this.canvasy2=this.canvasy1+this.spance+this.topImg.height;
    }
};
