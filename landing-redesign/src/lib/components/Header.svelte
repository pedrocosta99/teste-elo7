<script>
import IMAGES from "../scripts/images";
</script>


<section>

  <img src={IMAGES.fotoHeader} alt="Foto equipe Elo7">

  <div class="header-title-bg">
    <span class="header-title">Trabalhe no Elo7</span>
  </div>

  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt reprehenderit magnam quas ratione quisquam,
    saepe ducimus velit, nihil vel, consequuntur temporibus consectetur laborum adipisci.
  </p>

  <hr class="line-break">

</section>

<style src="../app.scss" lang="scss">

  section{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }

  img{
    max-width: 1000px;
  }

  .header-title{
    position: relative;
    bottom: 60px;
    font-size: 5em;
    padding: 0 0.3em;
  }

  .header-title-bg{
    margin-top: 4em;
    height: 3em;
    background-color: $yellow;
    color: $green;
    text-shadow: 4px 3px $beige-bg;

  }

  p{
    text-align: center;
  }

</style>
