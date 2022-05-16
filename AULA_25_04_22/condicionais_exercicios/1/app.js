const form = document.querySelector('form'),
      input = document.querySelector('input[type=text]'),
      p = document.querySelector('p')
;

form.onsubmit = e => {
    e.preventDefault();
    let value = input.value.toUpperCase();

    if(value && isNaN(value)){
        if (value == 'A' || value == 'E' || value == 'I' || value == 'O' || value == 'U'){
            p.textContent = 'É uma vogal.'
        } else{
            p.textContent = 'É uma consoante.'
        }
    }
}