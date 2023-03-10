import './App.css';
export function generate(n:number,password:string) {
    function encode(message:string){
        let result = "";
        for (let i = 0; i < message.length; i++){
            const shifted = (message[i].charCodeAt(0) + n) % 126;
            const newSymbol = String.fromCharCode(shifted);
            result += newSymbol;
        }
        return result;
    }
    return encode(password)
}
