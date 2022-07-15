import {onMount} from 'svelte'

let vagas = []

onMount( async () => {
  const response = await fetch('http://www.mocky.io/v2/5d6fb6b1310000f89166087b')
  const vagasJSON = await response.json()
  vagas = vagasJSON['vagas']
  vagas = vagas.filter(vaga => vaga.ativa)
})

export default vagas;
