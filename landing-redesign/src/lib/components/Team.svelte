<script>
  import IMAGES from "../scripts/images.js";
</script>

<section class='team'>
  <h3 class="title-color">CONHEÇA NOSSO TIME</h3>
  <br>
  <h3 class="slogan">#FORA DE SÉRIE</h3>

  <div class="container">
    <img src={IMAGES.camila} alt="Foto da Camila, equipe Elo7">
    <img src={IMAGES.guto} alt="Foto do Guto, equipe Elo7">
    <img src={IMAGES.david} alt="Foto do David, equipe Elo7">
    <img src={IMAGES.beatriz} alt="Foto da Beatriz, equipe Elo7">
  </div>


</section>

<style src="../app.scss" lang="scss">


  .team{
    background-color: $gray-bg;
    width: inherit;
    margin: 0 0;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  img{
    max-width: 200px;
    margin: 2em 5px;
    box-shadow: 8px 10px $yellow;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 25%;
  }

  @media only screen and (max-width: 1000px) {
    img{
      flex-basis: 50%;
    }
  }

  .slogan{
    font-size: 2em;
    color: $yellow;
    font-weight: 800;
  }

</style>
