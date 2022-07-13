<script>
  import IMAGES from './lib/images'
  import Header from './lib/Header.svelte';
  import VideoCeo from './lib/VideoCeo.svelte';
  import CompanyFeatures from './lib/CompanyFeatures.svelte';
</script>

<main>
  <Header/>

  <section>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt reprehenderit magnam quas ratione quisquam,
      saepe ducimus velit, nihil vel, consequuntur temporibus consectetur laborum adipisci.
    </p>
    <hr>
    <a href="https://jobs.kenoby.com/elo7" class='btn'>
      VAGAS EM ABERTO >>
    </a>
  </section>

  <VideoCeo/>

  <section>
    <h3>CONHEÇA NOSSO TIME FORA DE SÉRIE</h3>
    <div>
      <img src={IMAGES.camila} alt="Foto da Camila, equipe Elo7">
      <img src={IMAGES.guto} alt="Foto do Guto, equipe Elo7">
      <img src={IMAGES.david} alt="Foto do David, equipe Elo7">
      <img src={IMAGES.beatriz} alt="Foto da Beatriz, equipe Elo7">
    </div>
  </section>

  <CompanyFeatures/>

  <hr>
  <a href="https://www.elo7.com.br/sobre" class='btn'>
    SAIBA MAIS >>
  </a>

</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p{
    max-width: 900px;
    margin: 2em 0 1em 0;
    line-height: 1.6em;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: justify;
  }

  hr{
    width: 300px;
    color: rgba(14, 12, 12, 0.829);
    border-width: 3.5px;
  }

  .btn{
    width: fit-content;
    padding: 15px 10px;
    color: #359C9C;
    font-weight: 700;
    font-size: 1.3em;
  }

  h3, h4 {
    color: #7D7873;
  }

  img{
    margin: 2em 5px;
  }




</style>
