

export function genRandomQuestion(arr){
    const question = Math.floor(Math.random() * arr.length);
    return arr[question];
}



