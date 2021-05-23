// Desafio - Dia 23: Criar uma máscara para valores
function mask(value, pattern) {
  let i = 0;
  const v = value.toString();

  return pattern.replace(/#/g, () => v[i++] || '');
}

const phone = mask('42999999999', '(##) #####-####');
const cpf = mask('11111111111', '###.###.###-##');
console.log(phone);
console.log(cpf);
// (42) 99999-9999
// 111..11.1.1-11