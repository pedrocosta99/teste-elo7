<script>
import IMAGES from "../images";
</script>


<section>

  <img src={IMAGES.fotoHeader} alt="Foto equipe Elo7">

  <span class="header-txt">Trabalhe no Elo7</span>

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

  .header-txt{
    font-size: 5em;
    padding: 0 0.3em;
    background-color: $green;
    color: $yellow;
    text-shadow: 4px 3px rgb(32, 31, 31);
  }

  p{
    max-width: 900px;
    margin: 2em 0 1em 0;
    line-height: 1.6em;
    text-align: center;
  }

</style>
