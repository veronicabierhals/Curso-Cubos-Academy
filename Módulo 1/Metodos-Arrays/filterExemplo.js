const professores = [
    {nome: "Guido", stack: "backend"},
    {nome: "Vidal", stack: "backend"},
    {nome: "Dani", stack: "frontend"},
    {nome: "Diego", stack: "frontend"},
    {nome: "Léo", stack: "backend"},
    {nome: "Ruli", stack: "frontend"},
];

//filtrar somente os professores de backend
const professoresBackend = professores.filter((professor) => {
    return professor.stack === "backend";
});
console.log(professoresBackend);

//filtrar somente os professores de frontend
const professoresFrontend = professores.filter((professor) => {
    return professor.stack === "frontend";
});
console.log(professoresFrontend);