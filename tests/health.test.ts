import supertest from "supertest";
import app from "../src/app";
import httpStatus from "http-status";

const api = supertest(app);

describe("Connection test:", () => {
  it("Test GET /health", async () => {
    const res = await api.get("/health");

    expect(res.status).toBe(httpStatus.OK);
  });
});

/*


*** Primitive data:
.toBe()
.toBeGreaterThan();

*** Array data:

.toEqual()
.toContain()
.toHaveLength()
.toHaveLength()
.toEqual(expect.arrayContaining([a, b]))

*** Object data:

.toEqual({...}) => exatamente igual, todos os atributos com os respectivos valores
.toMatchObject({...}) => apenas alguns atributos com valores
.toEqual({id: expecte.any(Number)...})  => chaves exatamente iguais com os respectivos tipos
.toMatchObject({id: expecte.any(Number)...}) => apenas algumas chaves com os respectivos tipos

*** Array-Objects data:

.toEqual(expect.arrayContaining([
    expect.objectContaining({
    id: expect.any(Number),
    title: expect.any(String),
    salary: expect.any(Number),
  })
]))

https://jestjs.io/pt-BR/docs/expect

npx dotenv -e .env.test npx prisma migrate dev

*/
