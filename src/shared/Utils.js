export default class Utils {
    static generateRandomHexColor() {  
        const hexabet = "0123456789abcdef";
        let randColor = "#";
        let hexLength = 6;
        while(hexLength--) {
            randColor += hexabet[Math.floor(Math.random()*16)]; 
        }
        
        return randColor;
    }

    static removeFirstValueFrom(value, str) {
        return str.replace(value, "");        
    }
}
