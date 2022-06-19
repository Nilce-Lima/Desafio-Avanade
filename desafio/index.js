function getObj() {
    const obj = {
        
        professores: [ "Joana", "João"],
        cursos: [ "ADS", "MBA" ],
        
        escreverProfessor: function () {
            console.log(this.professor);
         },
        professores: [{ nome: "Joana", curso: "ADS" }, { nome: "João", curso: "MBA"}],
        
    };
    return obj;
   }
 
     console.log(getObj());