const form = document.querySelector('form'),
      input = document.querySelector('input'),
      salarioAntigo = document.querySelector('#salario_antigo'),
      valorPercentual = document.querySelector('#percentual'),
      valorAumento = document.querySelector('#valor_aumento'),
      salarioNovo = document.querySelector('#salario_novo')
;

form.onsubmit = e => {
    e.preventDefault();
    let percentual, aumento;
    let valor = Number(input.value);
    
    if(valor && !isNaN(valor) && valor > 0){
        if(valor <= 280){
            percentual = 20;
            aumento = (valor/100 * percentual);

            salarioAntigo.textContent = valor;
            valorPercentual.textContent = percentual;
            valorAumento.textContent = aumento;
            salarioNovo.textContent = ((valor * 100) + (aumento * 100)) / 100

        } else if (valor > 280 && valor <= 700) {
            percentual = 15;
            aumento = (valor/100 * percentual);

            salarioAntigo.textContent = valor;
            valorPercentual.textContent = percentual;
            valorAumento.textContent = aumento;
            salarioNovo.textContent = ((valor * 100) + (aumento * 100)) / 100

        } else if (valor > 700 && valor <= 1500) {
            percentual = 10;
            aumento = (valor/100 * percentual);

            salarioAntigo.textContent = valor;
            valorPercentual.textContent = percentual;
            valorAumento.textContent = aumento;
            salarioNovo.textContent = ((valor * 100) + (aumento * 100)) / 100

        } else {
            percentual = 5;
            aumento = (valor/100 * percentual);

            salarioAntigo.textContent = valor;
            valorPercentual.textContent = percentual;
            valorAumento.textContent = aumento;
            salarioNovo.textContent = ((valor * 100) + (aumento * 100)) / 100
        }
    }
}