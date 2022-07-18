<script>
  import IMAGES from "../scripts/images.js";
</script>

<div class="company">

  <section class='elo-features'>
    <div class="feature">
      <h4 class="feature-title">
        <h5>Qualidade</h5>
        <h5>de vida</h5>
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, explicabo!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, repudiandae.
      </p>

      <a href="https://www.elo7.com.br/sobre" class="btn-sobre">SAIBA MAIS >>></a>
    </div>
    <div class="feature">
      <h4 class="feature-title">
        <h5>Ambiente</h5>
        <h5>Descontraído</h5>
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, explicabo!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, repudiandae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas?
      </p>
    </div>
    <div class="feature">
      <h4 class="feature-title">
        <h5>Atividades</h5>
        <h5>Extras</h5>
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, explicabo!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, repudiandae.
      </p>
    </div>
  </section>

  <a href="https://www.elo7.com.br/sobre" class='btn'>
    SAIBA MAIS
  </a>

</div>

<style src="../app.scss" lang="scss">
  .company{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
  }

  a{
    width: 300px;
  }

  .elo-features{
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: $yellow;
  }

  .feature{
    width: calc(100%/3);
    height: 400px;
    padding: 0 1em;
    display: flex;
    flex-direction: column;

    &:hover{
      background-color: $yellow;

      > p{
        color: black;
      }
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

    .feature-title{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .btn-sobre{
      display: none;
    }

    .btn{
      display: flex;
    }
  }

  .feature-title{
    padding: 1em 0;
  }

  h5{
    width: fit-content;
    font-size: 1.2em;
    color: white;
    margin: 0.1em 0.5em;
    padding: 2px 15px 2px 2px;
    background-color: $green;
    font-weight: bolder;
  }

  p{
    color: black;
    font-size: 1em;
    line-height: normal;
    font-weight: bold;
    padding: 0 1em;
    margin: 0;
    text-align: justify;
  }


  .foto-bottom{
    margin: 0 0 2em 0;
  }

  .btn-sobre{
    color: $green;
    text-decoration: none;
    font-weight: bolder;
    font-size: 1.5em;
    margin-top: 3em;
    padding: 0 1em;
  }

  .btn{
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 800px) {
    .btn{
      display:none;
    }
  }
</style>
