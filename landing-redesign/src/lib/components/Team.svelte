<script>
  import IMAGES from "../scripts/images.js";
</script>

<section class='team'>
  <h3 class="title-color">CONHEÇA NOSSO TIME</h3>
  <br>
  <h3 class="slogan">#FORA DE SÉRIE</h3>

  <div>
    <img src={IMAGES.camila} alt="Foto da Camila, equipe Elo7">
    <img src={IMAGES.guto} alt="Foto do Guto, equipe Elo7">
    <img src={IMAGES.david} alt="Foto do David, equipe Elo7">
    <img src={IMAGES.beatriz} alt="Foto da Beatriz, equipe Elo7">
  </div>
</section>

<style src="../app.scss" lang="scss">
  .team{
    background-color: rgb(236, 234, 234);
    width: 100%;
    margin: 0 0;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  img{
    margin: 2em 5px;
  }


  .slogan{
    font-size: 2em;
    color: $yellow;
    font-weight: 800;
  }

</style>
