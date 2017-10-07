
function Sky(option) {
    this.img=option.img;
    this.x=option.x;
    this.y=option.y;
    this.ctx=option.ctx;
}
Sky.prototype={
    constructor:Sky,
    drawsky:function () {
        this.x-=2;
        if(this.x <= -this.img.width){
            this.x=this.x+2* this.img.width;
        }
        this.ctx.drawImage(this.img,this.x,this.y);

    }
};
