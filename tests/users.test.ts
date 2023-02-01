import supertest from "supertest";
import app from "../src/app";

const api = supertest(app);

describe("Users tests", () => {
  it("Test GET users", () => {
    const resultado = api.get("users");

    expect(resultado).toEqual([]);
  });
  it("teste 2", () => {
    const resultado = 4 + 5;

    expect(resultado).toBe(9);
  });
  it("teste 3", () => {
    const resultado = 4 + 5;

    expect(resultado).toBe(9);
  });
});
