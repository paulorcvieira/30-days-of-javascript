let array = ["club house", "linkedin", "linkedin", "instagram"];
let set = [];
array.forEach(element => {
  if (set.includes(element)) return;
  set.push(element);
});
console.log(set);
// [ "club house", "linkedin", "linkedin", "instagram" ]

set = new Set(array);
array = Array.from(set);
console.log(array);
// [ "club house", "linkedin", "linkedin", "instagram" ]