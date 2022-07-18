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

  {#each vagas as vaga}
  <div class='item'>
    <h5>{vaga.cargo}</h5>

    {#if vaga.localizacao}
      <span>{vaga.localizacao.bairro} - {vaga.localizacao.cidade}, {vaga.localizacao.pais}</span>
    {:else}
      <span>Remoto</span>
    {/if}

    <a href={vaga.link} class="btn-vaga">Candidatar-se</a>

  </div>
  {/each}
</div>

<style src="../app.scss" lang="scss">

  .lista{
    margin: 2em 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .item{
    height: 100px;
    align-items: center;
    padding: 0 1.5em;
    width: 100%;
    display: flex;
    justify-content: space-between;

    &:nth-child(even) {
        background-color: #e9e9e9;
    }
  }

  h3{
    text-align: center;
    color: #7D7873;
  }

  @media screen and (max-width: 992px) {
  .item {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 150px;
  }
  
  span{
    margin-bottom: 1em;
  }

  .btn-vaga{
    width: 300px;
  }
}

  h5{
    color: #359C9C;
    font-weight: 500;
    line-height: 2em;
    font-size: 1.1em;
    width: 420px;
  }

  .btn-vaga{
    background-color: $orange;
    padding: 10px 30px;
    text-decoration: none;
    font-weight: bold;
    color: white;
    height: fit-content;

    &:hover{
      background-color: $yellow;
      transition: 0.3s;
    }
  }

  span{
    color: #9B9B9B;
    font-size: 1em
  }


</style>
