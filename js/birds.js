function Birds(option) {
//必须传进了的
    this.ctx=option.ctx;
    this.birdImg=option.birdImg;
    this.canvasx=option.canvasx;
    this.canvasy=option.canvasy;


    //自己内部定义的
    this.birdw=option.birdImg.width/3;
    this.birdh=option.birdImg.height;
    this.birdx=0;
    this.birdy=0;
    this.startSpeed=0;
    this.maxSpeed=0.58;
    this.maxAngle=45;
    this.speed=0.0003;
    this.birdCol=0;

}

Birds.prototype = {
    constructor: Birds,
    drawbird: function (bt) {
        //7、改变图片让小鸟动起来
        this.birdx = this.birdCol * this.birdw;

//        9、计算小鸟每隔一段时间下落的距离
       var  s = this.startSpeed * bt + this.speed * bt * bt / 2;
//       10、 小鸟下一次的初始速度为本次的速度
        this.startSpeed = this.startSpeed + this.speed * bt;

//            改变小鸟的高度
        this.canvasy += s;



        // <!--========让小鸟下落  开始  =======-->

        this.ctx.save();///保存当前canvas的所有样式
        <!--========14、让小鸟下落  开始  =======-->

//            计算旋转的角度
//            var birdAngle=canvasy/(c.height-birdh)*maxAngle; //用高度计算
        var birdAngle = this.startSpeed / this.maxSpeed * this.maxAngle; //用速度计算

        this.ctx.translate(this.canvasx + this.birdw / 2, this.canvasy + this.birdh / 2);
        this.ctx.rotate(Math.PI * birdAngle / 180);
        <!--========14、让小鸟旋转  结束  =======-->

        this.ctx.drawImage(this.birdImg, this.birdx, this.birdy, this.birdw, this.birdh, -this.birdw / 2, -this.birdh / 2, this.birdw, this.birdh);
        this.ctx.restore();
//还原上一次保存canvas的样式

        this.birdCol++;

        if (this.birdCol > 2) {
            this.birdCol = 0
        }

    }
}
;