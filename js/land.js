
function Land(option) {
    this.ctx=option.ctx;
    this.landimg=option.landimg;
    this.x=option.x;
    this.y=option.y;
}
Land.prototype={
    constructor:Sky,
    drawland:function () {
        this.x-=2;
        if(this.x <= - this.landimg.width){
            this.x=this.x+4* this.landimg.width;
        }
        this.ctx.drawImage(this.landimg,this.x,this.y);
    }
};
