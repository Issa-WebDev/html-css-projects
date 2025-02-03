   
const a = document.getElementById('aValue')
const b = document.getElementById('bValue')
const c = document.getElementById('cValue')
const btn = document.getElementById('btn')
const value = document.getElementById('value')


function resolve() {
    const cond = a.value !== '' && b.value !== '' &&  c.value !== '';

    if(cond) {
        if(+a.value === 0 && +b.value === 0) {
            value.innerHTML = 'Impossible d\'effectuer le calcule';
        }
        else if (+a.value === 0) {
           let x = Number(-c.value / b.value);
           value.innerHTML = `
           <p>On a donc une équation de dégré 1 </p><br>
           <p>On a : ${b.value}x + (${c.value}) = 0</p><br>
           <p> => x = ${x} </p> <br> <br>
           la solution de l'equation est donc : ${x} 
           `; 
        } else {
            delta()
        }

        value.innerHTML += `
        <p class="message">
        Vous pouviez résoudre une autre équation si vous le voulez 🧮✔️🤗🤩✅✅
        </p>
        `;
    } else 
    {
        alert('veuillez entrer les valeurs de a, b et c')
    }

    a.value = ''
    b.value = ''
    c.value = ''
}

function delta () {
    const discriminant = ((b.value ** 2) - (4 * a.value * c.value))
    value.innerHTML = `
    <p> On a donc une équation de dégré 2 </p><br> 
    <p>On a : ${a.value}x² + (${b.value})x + (${c.value}) = 0</p><br>`

    const result = document.createElement('p')
    if (discriminant === 0) {
        const x0 = Number((-b.value / 2 * a.value) ** 2)

        value.innerHTML += `
        <p> On a : DELTA = ${discriminant} alors on a donc une solution double</p> <br>`

        result.innerHTML = `
        <p>On a : x = ${x0}</p><br> <br>
        <p>La solution de l'équation est x = ${x0}</p>`

        value.appendChild(result)
    } else if (discriminant < 0) {
        value.innerHTML += `
        <p> On a : DELTA = ${discriminant} et comme DELTA < 0 alors : </p> <br>
        <p> Nous n'avons pas de solutions dans R</p>
        `;
    } else {
        const x1 = Number(((-b.value + Math.sqrt(discriminant)) / 2 * a.value).toFixed(2))
        const x2 = Number(((-b.value - Math.sqrt(discriminant)) / 2 * a.value).toFixed(2))

        value.innerHTML += `
        <p> On a : DELTA = ${discriminant} et comme DELTA > 0 alors : </p> <br>
        <p></p>
        On applique donc x1 = (-b - sqrt(delta)) / 2 x a  et  x2 = (-b + sqrt(delta)) / 2 x a
        <br><br>
       `;

        result.innerHTML = `
        <p>On a : x1 = ${x1} et x2 = ${x2}</p><br>
        <p>Les solutions de l'équation sont :  x1 = ${x1}  et  x2 = ${x2}`;

        value.appendChild(result)
    }
}

btn.addEventListener('click', () => resolve());


