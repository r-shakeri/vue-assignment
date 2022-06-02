export default class Utils {
    static generateRandomHexColor() {
        const maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        const randColor = randomNumber.padStart(6, 0);   
        return `#${randColor.toUpperCase()}`
    }
}
