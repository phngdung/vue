import faker from "faker";

// ----------------------------------------------------------------------

const students_mock = [...Array(10)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  age: faker.datatype.number(),
  city: faker.address.cityName(),
  height: faker.datatype.number({ max: 200 }),
  weight: faker.datatype.number({ max: 200 }),
  classSt: faker.datatype.string(),
  math: faker.datatype.float({ max: 10.0, min: 0 }),
  literature: faker.datatype.float({ max: 10.0, min: 0 }),
  english: faker.datatype.float({ max: 10.0, min: 0 }),
}));

export default students_mock;
