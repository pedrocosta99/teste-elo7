const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

export const vagas = async () => {
  return await fetch('http://www.mocky.io/v2/5d6fb6b1310000f89166087b')
    .then(response => response.json())
    .then(data => data['vagas'] )
    .then(vagas => vagas.filter(vaga => vaga.ativa))
}
