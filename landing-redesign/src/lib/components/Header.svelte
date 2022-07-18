<script>
import IMAGES from "../scripts/images";
</script>


<section>

  <img src={IMAGES.fotoHeader} alt="Foto equipe Elo7">

  <div class="header-title">
    <span class="header-title-main">Trabalhe <br/> no Elo7</span>
    <span class="header-title-shadow">Trabalhe <br/> no Elo7</span>
  </div>

  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt reprehenderit magnam quas ratione quisquam,
    saepe ducimus velit, nihil vel, consequuntur temporibus consectetur laborum adipisci.
  </p>

  <a href="https://elo7.gupy.io/" class="btn">CARREIRAS ELO7</a>


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
    width: 100%;
    height: 10em;
    display: flex;
    justify-content: center;
  }

  .header-title-main{
    position: absolute;
    font-size: 90px;
    font-weight: bold;
    color: $yellow;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    z-index: 2;
  }

  .header-title-shadow{
    position: absolute;
    top: 3%; left: 10.5%;
    margin: 0;
    z-index: 1;
    font-size: 90px;
    font-weight: bold;
    color: white;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;

  }

  p{
    margin: 1em 0;
    text-align: center;
    max-width: 80vw;
  }

  br{
    display: none;
  }

  @media screen and (max-width: 800px){
    br{
      display: flex;
    }

    .header-title-shadow{
      left: 29.8%;
    }
    .header-title{
      margin-bottom: 10vh;
      display: flex;
      text-align: center;
      line-height: 8em;
    }
  }

  @media screen and (max-width: 450px){
    .header-title{
      scale: 0.85;
    }
  }

  a{
    margin: 1em 0 2em 0;
    width: 300px;
    font-weight: bold;
  }


</style>
