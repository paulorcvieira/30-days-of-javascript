// Desafio - Dia 06: Substituir palavras proibidas
const text = "Texto com plavrões: babaca, otário, burro";
const forbiddenWords = ["babaca", "burro", "otário"];

const replace = text => text.replace(",", "");
const split = text => text.split(" ");
const join = list => list.join(" ");
const map = (fn, list) => list.map(fn);

const hideWord = word => forbiddenWords
  .includes(replace(word.toLowerCase())) ? "#@%#@%" : word;

const censured = join(map(hideWord, split(text)));

console.log(censured);
// Texto com plavrões: #@%#@% #@%#@% #@%#@%