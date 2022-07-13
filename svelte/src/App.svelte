<script>
  import IMAGES from './lib/images'
  import Header from './lib/Header.svelte';
</script>

<main>
  <Header/>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt reprehenderit magnam quas ratione quisquam,
    saepe ducimus velit, nihil vel, consequuntur temporibus consectetur laborum adipisci. Ipsam soluta blanditiis expedita eveniet veniam.
  </p>

  <hr>
  <a href="https://jobs.kenoby.com/elo7" class='btn'>
    VAGAS EM ABERTO >>
  </a>



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
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p{
    max-width: 900px;
    
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



</style>
