<script>
  import Header from './lib/Header.svelte';
  import VideoCeo from './lib/VideoCeo.svelte';
  import CompanyFeatures from './lib/CompanyFeatures.svelte';
  import Vagas from './lib/Vagas.svelte';
  import Team from './lib/Team.svelte'

  let scrollVagas = () => {document.getElementById("vagas").scrollIntoView()}

</script>

<main>
  <Header/>

  <button class='btn' on:click={() => scrollVagas()}>VAGAS EM ABERTO >></button>

  <VideoCeo/>
  <Team/>
  <CompanyFeatures/>

  <div id="vagas">
    <Vagas/>
  </div>

</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
  }

  .btn{
    width: fit-content;
    padding: 15px 10px;
    color: #359C9C;
    font-weight: 700;
    font-size: 1.3em;
    margin-bottom: 2em;
  }

  #vagas{
    width: 80%;
    margin: 2em 0;
    text-align: justify;
  }

</style>
