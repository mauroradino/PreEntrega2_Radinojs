let totalAlumnos = Number(prompt("Ingrese la cantidad total de alumnos:"));
let alumnos = [];
let presentes = 0;
let ausentes = 0;

for(let i = 0; i < totalAlumnos; i++) {
  let alumno = {
    nombre: "",
    apellido: "",
    presentismo: "",
  };
 
  alumno.nombre = prompt(`Ingrese el nombre del alumno ${i+1}:`);
  alumno.apellido = prompt(`Ingrese el apellido del alumno ${i+1}:`);

  let presente = prompt(`El alumno ${alumno.nombre} ${alumno.apellido} está (P) presente o (A) ausente?`).toUpperCase().trim();
  if(presente == 'P'){
    alumno.presentismo = "presente";
    presentes ++;
  } else if (presente == 'A'){
    alumno.presentismo = "ausente";
    ausentes ++;
  }
  else{
    alert("presentismo invalido")
  }

  alumnos.push(alumno);
}
let listaAusentes = alumnos.filter(alumno => alumno.presentismo === "ausente");
let listaPresentes = alumnos.filter(alumno => alumno.presentismo === "presente");
let porcentajePresentes = (presentes * 100)/totalAlumnos
console.log(`El numero total de alumnos es: ${totalAlumnos}`)  
console.log(`hay ${presentes} alumnos presentes`)
console.log(`hay ${ausentes} alumnos ausentes`)
console.log(`hay ${porcentajePresentes}% de presentismo`)
console.log(listaAusentes)
console.log(listaPresentes)