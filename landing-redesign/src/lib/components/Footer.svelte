<script>
  import IMAGES from "../scripts/images";
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faInstagram, faPinterestP, faLinkedinIn, faYoutube} from "@fortawesome/free-brands-svg-icons"

</script>

<img src={IMAGES.fotoBottom} alt="Evento da Elo7" class="img-bottom">

<footer>

  <img src={IMAGES.logoYellow} alt="Logo Elo7">

  <div class="social">
    <a href="https://www.instagram.com/elo7br/?hl=en">
      <Fa icon={faInstagram} size="3x" class="icon"/>
    </a>
    <a href="https://pinterest.com/elo7br/">
      <Fa icon={faPinterestP} size="3x" class="icon"/>
    </a>
    <a href="https://www.youtube.com/channel/UCUD0gYgorev11RVF0gb_44A">
      <Fa icon={faYoutube} size="3x" class="icon"/>
    </a>
    <a href="https://br.linkedin.com/company/elo7">
      <Fa icon={faLinkedinIn} size="3x" class="icon"/>
    </a>

  </div>

</footer>


<style src="../app.scss" lang="scss">

  .img-bottom{
    margin-bottom: 1em;
  }

  footer{
    background-color: $yellow;
    height: 120px;
    width: 100%;
    display: flex;
    justify-content:space-around;
    align-items: center;
  }

  .social{
    flex-basis: 30%;
    display: flex;
    justify-content: space-between;
    min-width: 250px;
  }

  img{
    justify-self: left;
    height: 100%;
  }

  a{
    color: white;
  }

  .voltar-topo{
    color: white;

  }

</style>
