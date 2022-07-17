<script>
  import IMAGES from "../scripts/images.js";
</script>

<div class="company">

  <section class='elo-features'>
    <div class="feature">
      <h4>QUALIDADE DE VIDA</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, explicabo!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, repudiandae.
      </p>
    </div>
    <div class="feature">
      <h4>AMBIENTE DESCONTRAÍDO</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, explicabo!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, repudiandae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas?
      </p>
    </div>
    <div class="feature">
      <h4>ATIVIDADES EXTRAS</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, explicabo!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, repudiandae.
      </p>
    </div>
  </section>

  <a href="https://www.elo7.com.br/sobre" class='btn'>
    SAIBA MAIS >>
  </a>

  <img src={IMAGES.fotoBottom} class="foto-bottom" alt="Foto de evento da Elo7">

</div>

<style src="../app.scss" lang="scss">
  .company{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .elo-features{
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: $beige-bg;
    // border-top: 5px $green solid;
    // border-bottom: 5px $green solid;
  }

  .feature{
    width: calc(100%/3);
    height: 400px;
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover{
      background-color: $yellow;
    }
  }



  @media screen and (max-width: 800px){
    .elo-features{
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .feature{
      width: 80vw;
      height: fit-content;
      padding-bottom: 50px;
    }
  }

  h4{
    font-size: 2em;
    color: $green;
    text-align: center;
    margin: 1em 0.5em;
  }

  p{
    color: $green;
    padding: 0 1em;
    margin: 0;
    text-align: justify;
  }


  .foto-bottom{
    margin: 0 0 2em 0;
  }

  .bandeirinhas{
    position: absolute;
    bottom: 0;
    margin: 0 0;
    justify-self: end;
  }

</style>
