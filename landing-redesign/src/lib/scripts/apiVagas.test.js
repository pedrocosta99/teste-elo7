import { vagas } from "./apiVagas.js"

const result = async () => {
  return await vagas()
}

test("Somente vagas ativas", async () => {
  let response = await result()
  // console.log(response);

  response.forEach(vaga => {
    expect(vaga.ativa).toBe(true)
  });
})
