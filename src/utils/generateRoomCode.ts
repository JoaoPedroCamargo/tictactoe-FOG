var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var result = '';

export const generateRoomCode = (codeSize: Number) => {
    result = '';
    for (let i = 0; i < codeSize; i++){
        result += character.charAt(Math.floor(Math.random() * character.length));
    }
    return result;
} 