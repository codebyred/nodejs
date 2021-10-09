function Angle(width,height){
    this.width =width;
    this.height= height;
}
Angle.prototype.calcu = function(){
    return this.width*this.height;
}
module.exports.Angle = Angle;


