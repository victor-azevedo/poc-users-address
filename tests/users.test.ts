import supertest from "supertest";
import app from "../src/app";
import prisma from "../src/database";

const api = supertest(app);

beforeAll(async () => {
  await prisma.user.deleteMany({});
});

afterAll(async () => {
  await prisma.user.deleteMany({});
});

describe("Users tests:", () => {
  it("Test GET /users", async () => {
    const res = await api.get("/users");

    expect(res.body[0]).toMatchObject({
      name: "Jose Victor",
      nickname: "Victor",
      birthday: "1990-09-18T00:00:00.000Z",
      email: "josea1@uol.com",
      phone: "85987812525",
      cpf: "12341648998",
      createdAt: "2023-01-27T15:41:10.988Z",
    });
  });
});
