// Desafio - Dia 24: Criar um CRUD (create/read/update/delete)
const db = [
  { id: 1, name: 'Paulo', age: 20 },
  { id: 2, name: 'Caroline', age: 21 },
  { id: 3, name: 'Carmen', age: 22 },
];
// Create
function createUser(data) {
  if (!data.name || !data.age) throw new Error(`Invalid ${!data.name ? 'name' : 'age'}`);
  const nameExists = db.some(u => u.name === data.name);
  if (nameExists) throw new Error('This name already registered');
  const user = { ...data, id: ++db.length };
  db.push(user);
  return user;
}
// Read
function getUser() {
  return console.log(db);
}
// Update
function updateUser(data) {
  if (!data.id) throw new Error('Please enter a valid id');
  const userIndex = db.findIndex(u => u.id === Number(data.id));
  if(userIndex < 0) throw new Error('User not found');
  const user = { ...db[userIndex], ...data };
  db.splice(userIndex, 1, user);
  return user;
}
// Delete
function deleteUser(id){
  if (!id) throw new Error('Please enter a valid id');
  const userIndex = db.findIndex(u => u.id === Number(id));
  if(userIndex < 0) throw new Error('User not found');
  const [deletedUser] = db.splice(userIndex, 1);
  return deletedUser;
}
createUser({ name: 'Reinaldo', age: '23' });
updateUser({ id: 3, name: 'Carmen Costa', });
deleteUser(1);
getUser();