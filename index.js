window.onload = () => {
    let who = ["El perro", "El gato", "Mi suegra", "El ornitorrinco", "La maestra", "Mi jefe", "Dios"];
    let action = ["se comio", "robo", "boto", "perdio", "guardo", "vendio", "bloqueo"];
    let what = ["mi tarea", "el carro", "mi perro", "mi cama","mi cuenta de netflix", "el telefono"];
    let when = ["ayer", "la semana pasada", "hace dos dias", "el fin de semana", "el lunes"];

    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random()* action.length);
    let randomWhat = Math.floor(Math.random()* what.length);
    let randomWhen = Math.floor(Math.random()* when.length);

    document.querySelector('#myExcuse').innerHTML = `${who[randomWho]} ${action[randomAction]} 
        ${what[randomWhat]} ${when[randomWhen]}`
}