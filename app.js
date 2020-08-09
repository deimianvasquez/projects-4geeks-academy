let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

console.log("Hecho con for of")
for(let i of pronoun){
    for(let j of adj){
        for(let k of noun){
            console.log(i+j+k+".com")
        }
    }
}

console.log("Hecha con for normal")
for(let i=0; i<pronoun.length; i++){
    for(let j=0; j<adj.length; j++){
        for(let k = 0; k<noun.length; k++){
            console.log(pronoun[i]+adj[j]+noun[k]+".com")
        }
    }
}