const form = document.querySelector('form'),
      result = document.querySelector('p'),
      input1 = document.querySelector('form input:nth-of-type(1)'),
      input2 = document.querySelector('form input:nth-of-type(2)')
;

form.onsubmit = e => {
    e.preventDefault();

    let v1 = Number(input1.value);
    let v2 = Number(input2.value);
    let m, c; // média e conceito


    if(v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)){
        m = (((v1 * 100) + (v2 * 100)) / 100)/2;

        if (m >= 0 && m < 4) {
            c = 'E';
        } else if (m >= 4 && m < 6) {
            c = 'D';
        } else if (m >= 6 && m < 7.5) {
            c = 'C'
        } else if (m >= 7.5 && m < 9) {
            c = 'B'
        } else if (m >= 9 && m <= 10) {
            c = "A"
        } else {
            c = ""   
        }

        result.textContent = c ? `Você ficou com o conceito ${c} com uma média: ${m}.` : `Certifique-se de ter dado valores válidos.`;

    }else{
        result.textContent = `Verifique se os campos estão preenchidos corretamente.`
    }
}