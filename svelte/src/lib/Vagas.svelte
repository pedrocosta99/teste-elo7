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


<style>
  .lista{
    margin: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 992px) {
  .item {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 1em 0;
  }

  h4{
    display: flex;
    align-self: center;
  }
}

  div{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  a{
    color: #359C9C;
    text-decoration: none;
    font-weight: 500;
    line-height: 2em;
  }

  span{
    color: #9B9B9B;
  }


</style>
