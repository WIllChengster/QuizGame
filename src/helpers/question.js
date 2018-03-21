

export function genRandomQuestion(arr){
    return Math.floor(Math.random() * arr.length);
}

const question = genRandomQuestion(questions);

const lol = Math.floor(Math.random()*questions.length)