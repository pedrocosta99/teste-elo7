<script>
  import IMAGES from "../scripts/images.js";
</script>

<section class='team'>
  <h3 class="title-color">CONHEÇA NOSSO TIME</h3>
  <br>
  <h3 class="slogan">#FORA DE SÉRIE</h3>

  <div class="images images-1">
    <img src={IMAGES.camila} alt="Foto da Camila, equipe Elo7">
    <img src={IMAGES.guto} alt="Foto do Guto, equipe Elo7">
  </div>
  <div class="images images-2">
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

  .images{
    padding: 0 2em;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    &.images-1{
      padding: 0 150px 0 0;
    }
    &.images-2{
      padding: 0 0 0 150px;
    }
  }

  img{
    margin: 2em 5px;
    box-shadow: 12px 15px $yellow;
  }


  .slogan{
    font-size: 2em;
    color: $yellow;
    font-weight: 800;
  }

</style>
