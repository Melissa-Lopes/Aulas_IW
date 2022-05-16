const form = document.querySelector('form'),
      output = document.querySelector('p'),
      input1 = document.querySelector('input:nth-of-type(1)'),
      input2 = document.querySelector('input:nth-of-type(2)'),
      input3 = document.querySelector('input:nth-of-type(3)'),
      valorDelta = document.querySelector("#delta"),
      valorX1 = document.querySelector("#x1"),
      valorX2 = document.querySelector("#x2"),
      valorExp = document.querySelector("#expressao"),
      contA = document.querySelector("#a"),
      contB = document.querySelector("#b"),
      contC = document.querySelector("#c")
;

form.onsubmit = e => {
    e.preventDefault();

    let a = input1.value;
    let b = input2.value;
    let c = input3.value;

    if(a && b && c && !isNaN(a) && !isNaN(b) && !isNaN(c)){
        a = Number(a); b = Number(b); c = Number(c);
        contA.textContent = a; 
        contB.textContent = b; 
        contC.textContent = c; 

        // ∆ = b² - 4ac
        let delta = Math.pow(b, 2) - (4 * a * c);
        
        // x = -b +- √∆ / 2.a
        // x1 +
        let x1 = (((-(b) * 100) + (Math.sqrt(delta) * 100)) / 100) / 2 * a;
        
        // x2 -
        let x2 = (-(b) - Math.sqrt(delta)) / 2 * a;

        // resultado da expressao
        let expressao = a * Math.pow(x1, 2) + b * x2 + c;

        valorDelta.textContent = delta;
        valorX1.textContent = x1;
        valorX2.textContent = x2;
        valorExp.textContent = expressao;
    }
}