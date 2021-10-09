function Plus(width,height){
    this.width =width;
    this.height= height;

}
Plus.prototype.calcu = function(){
    return this.width+this.height;
}
module.exports.Plus = Plus;