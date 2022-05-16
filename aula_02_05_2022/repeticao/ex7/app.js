const form = document.querySelector('form'),
      pares = document.querySelector('#pares'),
      impares = document.querySelector('#impares'),
      input = document.querySelectorAll('input')
;

form.onsubmit = e => {
    e.preventDefault();
    
    let contPares = 0;
    let contImpares = 0;

    for(let i = 0; i < input.length; i++){
        if (Number(input[i].value) % 2 == 0) {
            contPares++
        } else {
            contImpares++
        }
    }

    pares.textContent = contPares;
    impares.textContent = contImpares;
}