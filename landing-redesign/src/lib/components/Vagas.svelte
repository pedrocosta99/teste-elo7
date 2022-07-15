<script>
  import {onMount} from 'svelte'

  let vagas = []

  onMount( async () => {
    const response = await fetch('http://www.mocky.io/v2/5d6fb6b1310000f89166087b')
    const vagasJSON = await response.json()
    vagas = await vagasJSON['vagas']
    vagas = vagas.filter(vaga => vaga.ativa)
  })

</script>

<h3 href="https://jobs.kenoby.com/elo7">VAGAS EM ABERTO</h3>

<div class="lista">
  <h4>Desenvolvimento</h4>

  {#each vagas as vaga}
  <div class='item'>
    <a href={vaga.link} >{vaga.cargo}</a>

    {#if vaga.localizacao}
      <span>{vaga.localizacao.bairro} - {vaga.localizacao.cidade}, {vaga.localizacao.pais}</span>
    {:else}
      <span>Remoto</span>
    {/if}

  </div>
  {/each}
</div>
