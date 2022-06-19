const mongodb = require("mongodb");

const url = "mongodb://admin:david@localhost:27017";
const client = new mongodb.MongoClient(url, { useUnifiedTopology: true });

async function main() {
  await client.connect();
  const db = client.db("school");
  const result = await db.collection("groups").insertMany([
    {
      _id: "62adf55dd1d8cd0272ddab9b",
      course: "6é",
      class: "A",
      tutor: "Mercè",
    },
    {
      _id: "62adf55dd1d8cd0272ddab9d",
      course: "3é",
      class: "B",
      tutor: "Neus",
    },
    {
      _id: "62adf55dd1d8cd0272ddab9f",
      course: "1é",
      class: "C",
      tutor: "David",
    },
  ]);
  const result_2 = await db.collection("students").insertMany([
    { name: "Pere", age: 5, group: "62adf55dd1d8cd0272ddab9b" },
    { name: "Xavi", age: 9, group: "62adf55dd1d8cd0272ddab9d" },
    { name: "Carol", age: 7, group: "62adf55dd1d8cd0272ddab9d" },
    { name: "Lola", age: 3, group: "62adf55dd1d8cd0272ddab9f" },
  ]);

  console.log("The database was started without any problems.");
  client.close();
}

main();
