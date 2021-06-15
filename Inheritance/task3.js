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
WebApp.prototype.reactBased = function(technologies){
    if ( technologies === "react"){
        console.log(technologies);
    }
}
WebApp.prototype.isCCLicence = function(licence){
    if(licence === "Creative Commons" ){
        return stars + 1;
    }
}
WebApp.prototype.showStars = function(stars){
    if(stars < this.isCCLicence()){
        console.log(this.isCCLicence())
    }else{
        console.log(stars)
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
    console.log(this.name + " " + this.licence + " " + this.stars + " " + this.platforms)
}

MobileApp.prototype.forAndroid = function(platforms){
    if(platforms === "android"){
        console.log(this.platforms);
    }
}
MobileApp.prototype.isCCLicence = function(licence){
    if(licence === "Creative Commons" ){
        return stars + 1;
    }
}
MobileApp.prototype.showStars = function(stars){
    if(stars < this.isCCLicence()){
        console.log(this.isCCLicence())
    }else{
        console.log(stars)
    }
}

//Testing
var consumer1 = new Consumer("Petar" ,"Creative Commons" ,4);
var webApp1 = new WebApp("Petar" ,"http://example.com" ,"react" ,"Creative Commons" ,4);
webApp1.getData();
console.log(webApp1.getData());