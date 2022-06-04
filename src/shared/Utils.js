export default class Utils {
    static generateRandomHexColor() {  
        var hexabet = "0123456789abcdef";
	    var randColor = "#";
	    var hexLength = 6;
	    while(hexLength--){
	        randColor += hexabet[Math.floor(Math.random()*16)]; 
        } 
        return `#${randColor}`
    }
}
