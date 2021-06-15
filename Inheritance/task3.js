function Consumer(name ,licence ,stars){
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}
Consumer.prototype.printInfo = function(){
    return this.name + " " + this.licence + " " + this.stars;
}
//Consumer.prototype.printInfo = function(){
//    console.log(this.getData());
//}
//WebApp
function WebApp(name, url, technologies, licence, stars){
    Consumer.call(this ,name ,licence ,stars);
    this.url = url;
    this.technologies = technologies;
}
WebApp.prototype = Object.create(Consumer.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function(){
    var data = this.printInfo();
    console.log(data + " " + this.url + " " + this.technologies);
}
WebApp.prototype.reactBased = function(){
    var techno = this.technologies
    if ( techno === "react"){
        console.log(techno);
    }
}
WebApp.prototype.isCCLicence = function(licence ,stars){
    if(licence === "Creative Commons" ){
        return stars + 1;
    }
}
WebApp.prototype.showStars = function(){
    var licen = this.isCCLicence();
    if(this.stars < licen){
        return licen;
    }
}
//MobileApp
function MobileApp(name, platforms, licence, stars){
    Consumer.call(this ,name ,licence ,stars);
    this.platforms = platforms;
}
MobileApp.prototype = Object.create(Consumer.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function(){
    var data = this.printInfo();
    console.log(data +" " + this.platforms)
}

MobileApp.prototype.forAndroid = function(){
    var plat = this.platforms;
    if(plat === "android"){
        console.log(plat);
    }
}
MobileApp.prototype.isCCLicence = function(licence ,stars){
    if(licence === "Creative Commons" ){
        return stars + 1;
    }
}
MobileApp.prototype.showStars = function(stars){
    var licen = this.isCCLicence();
    if(stars < licen){
        return this.isCCLicence();
    }
}  
//Testing
var consumer1 = new Consumer("Petar" ,"Creative Commons" ,4);
var webApp1 = new WebApp("Petar" ,"http://example.com" ,"react" ,"Creative Commons" ,4);
var mobileApp1 = new MobileApp("Petar" ,"android" ,"Creative Commons" ,3)
webApp1.getData();
webApp1.isCCLicence("Creative Commons" ,4);
webApp1.reactBased();
mobileApp1.getData();
mobileApp1.forAndroid();
mobileApp1.isCCLicence();
mobileApp1.showStars(3)
console.log(mobileApp1.isCCLicence("Creative Commons" ,3));
console.log(mobileApp1.showStars(3));