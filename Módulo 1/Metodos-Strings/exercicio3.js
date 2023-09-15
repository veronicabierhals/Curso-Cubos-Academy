function imprimirData (dia, mes, ano){
    const diaFormatado = String(dia).padStart(2, "0"); //transforma number em string
    const mesFormatado = `${mes}`.padStart(2, "0"); //ou usando string tamplate
    
    console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}

imprimirData(1, 1, 2023)