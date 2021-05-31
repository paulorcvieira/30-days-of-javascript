// Desafio - Dia 30: Exportar dados para um arquivo ".csv"
const Faker = require("faker");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const generateUsers = size => {
  const data = [];

  for (let i = 0; i < size; i++) {
    data.push({
      email: Faker.internet.exampleEmail(),
      lastname: Faker.name.lastName(),
      password: Faker.internet.password(),
      country: Faker.address.country(),
      avatar: Faker.internet.avatar(),
      ip: Faker.internet.ip(),
    });
  }

  const csvWriter = createCsvWriter({
    path: "users.csv",
    header: [
      {id: 'email', title: 'Email'},
      {id: 'lastname', title: 'Lastname'},
      {id: 'password', title: 'Password'},
      {id: 'country', title: 'Country'},
      {id: 'avatar', title: 'Avatar'},
      {id: 'ip', title: 'IP'},
    ]
  });

  generateFile(csvWriter, data);
}

const generateFile = (writer, data) => {
  writer
  .writeRecords(data)
  .then(() => console.log("The CSV file was written successfully."));
}

generateUsers(10);