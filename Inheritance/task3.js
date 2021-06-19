function Consumer(name ,licence ,stars){
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}
Consumer.prototype.printInfo = function(){
    return this.name + " " + this.licence + " " + this.stars;
}
Consumer.prototype.like = function(){
     ++this.stars;
}
Consumer.prototype.isCCLicence = function(){
    if(this.licence === "Creative Commons" ){
        return true;
    }
    else{
        return false;
    }
}
Consumer.prototype.showStars = function(){
    console.log(this.stars);
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


//Testing
var webApp1 = new WebApp("Petar" ,"http://example.com" ,"react" ,"Creative Commons" ,4);
var mobileApp1 = new MobileApp("Petar" ,"android" ,"Creative Commons" ,3)
webApp1.getData();
webApp1.isCCLicence();
webApp1.reactBased();
mobileApp1.getData();
mobileApp1.forAndroid();
webApp1.showStars();
webApp1.like();
webApp1.showStars();

