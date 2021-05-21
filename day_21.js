// Desafio - Dia 21: Consumir uma API utilizando fetch()
async function getPeopleJSON(amount) {
  const response = await fetch(`https://randomuser.me/api/?results=${amount}`);
  return await response.json();
}
getPeopleJSON(10).then(data => console.log(data));

getPeopleJSON(20).then(data => {
 const people = data.results
 console.log( people.filter( p => p.gender === 'female' ) )
});

getPeopleJSON(30).then(data => {
 const result = data.results.filter(p => p.dob.age >= 30)
 const people = []

 result.forEach(p => {
  people.push({
    "Name": `${p.name.first} ${p.name.last}`,
    "Gender": p.gender,
    "Age": p.dob.age
  });
 });

 console.table(people)
});