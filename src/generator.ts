import './App.css';
export function generate(n: number, password: string, withSalt: boolean) {
    function generateSalt(length: number) {
        let salt = "";
            do {
                salt += String.fromCharCode(Math.ceil(Math.random() * 127 + 1));
            } while (salt.length <= length)
        return salt;
    }
    function encode(message: string) {
        let result = "";
        let newMessage = message;
        if(withSalt){
        const salt1: string = generateSalt(10);
        const salt2: string = generateSalt(10);
        newMessage = salt1 + message + salt2;
        }
        for (let i = 0; i < newMessage.length; i++) {
            const shifted = (newMessage[i].charCodeAt(0) + n) % 126;
            const newSymbol = String.fromCharCode(shifted);
            result += newSymbol;
        }
        return result;
    }
    return encode(password)
}
