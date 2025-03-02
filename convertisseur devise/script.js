const form = document.getElementById("form");
const euroInput = document.getElementById("euro");
const cfaInput = document.getElementById("cfa");
const tauxFixe = 655.957;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  convert();
});

// CONVERTIR LA VALEUR
const convert = () => {
  const euro = Number(euroInput.value);
  if (!euroInput.value.trim()) {
    alert("Entrer votre montant");
    return;
  }
  const result = euro * tauxFixe;
  cfaInput.value = `${result} XOF`;
};

// AJOUTE UNE VALEUR
const addValue = (value) => {
  euroInput.value += value;
};

// ASUPPRIME UNE VALEUR
const removeOneByOne = () => {
  euroInput.value = euroInput.value.slice(0, -1);
};
