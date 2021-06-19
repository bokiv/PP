class App{
    constructor(name ,licence ,stars){
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }
    
    isCCLicence(){
        if(this.licence === "Creative Commons" ){
            return true;
        }
        else{
            return false;
        }
    }
    like(){
        ++ this.stars;
    }

    showStars(){
        console.log(this.stars);
    }
}
class WebApp extends App{
    constructor(name ,licence ,stars ,url ,technologies){
        super(name ,licence ,stars);
        this.url = url;
        this.technologies = technologies;
    }
    getData(){
        console.log(this.name + " " + this.licence + " " + this.stars + " " + this.url + " " + this.technologies);
    }
    reactBased(){
        if(this.technologies === "React"){
            return true;
        }else{
            return false;
        }
    }
}
class MobileApp extends App{
    constructor(name ,licence ,stars , platforms){
    super(name ,licence ,stars);
    this.platforms = platforms;
    }
    getData(){
        console.log(this.name + " " + this.licence + " " + this.stars + " " + this.platforms);
    }
    forAndroid(){
        if(this.platforms === "Android"){
            return true;
        }else{
            return false;
        }
    }
}
//Testing
var webApp1 = new WebApp("Word" ,"Creative Commons" ,4 , "http//...." ,"React");
var mobileApp1 = new MobileApp("Word" ,"Creative Commons" ,4 ,"Android"); 

console.log(webApp1);
webApp1.getData();
webApp1.reactBased();
webApp1.isCCLicence();
webApp1.like();
webApp1.showStars();
console.log(mobileApp1);
mobileApp1.getData();
mobileApp1.forAndroid();
mobileApp1.isCCLicence();
mobileApp1.like();
mobileApp1.showStars();