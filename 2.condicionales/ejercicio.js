function evaluarNota(nota) {
    if (nota >= 90) {
      return "Excelente";
    } else if (nota >= 75 && nota <= 89) {
      return "Bien";
    } else if (nota >= 60 && nota <= 74) {
      return "Suficiente";
    } else {
      return "No aprueba";
    }
  }
  
  
  let notaEstudiante = 50;
  let resultado = evaluarNota(notaEstudiante);
  console.log("El estudiante obtuvo un: " + resultado);
