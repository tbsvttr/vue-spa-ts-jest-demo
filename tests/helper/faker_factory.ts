import Faker from "faker";

export const makeFakePost = (): IPost => ({
  author: Faker.name.findName(),
  id: Faker.random.number(),
  title: Faker.random.words()
});
