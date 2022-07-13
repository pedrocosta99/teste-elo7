<script>
  import IMAGES from "./images";
</script>

<div class="company">

  <section class='elo-features'>
    <div class="feature">
      <img src={IMAGES.qualidade} alt="Emoji de rosto feliz">
      <h4>QUALIDADE DE VIDA</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, explicabo!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, repudiandae.
      </p>
    </div>
    <div class="feature">
      <img src={IMAGES.descontracao} alt="Emoji de descontração - mão em gesto de Heavy Metal">
      <h4>AMBIENTE DESCONTRAÍDO</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, explicabo!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, repudiandae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas?
      </p>
    </div>
    <div class="feature">
      <img src={IMAGES.atividades} alt="Emoji de atividade artística">
      <h4>ATIVIDADES EXTRAS</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, explicabo!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, repudiandae.
      </p>
    </div>
  </section>

  <hr>
  <a href="https://www.elo7.com.br/sobre" class='btn'>
    SAIBA MAIS >>
  </a>

  <img src={IMAGES.fotoBottom} class="foto-bottom" alt="Foto de evento da Elo7">

</div>

<style>
  .company{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .elo-features{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .feature{
    margin: 0 1em;
  }

  @media screen and (max-width: 800px){
    .elo-features{
      flex-direction: column;
    }
  }
  img{
    margin: 2em 5px;
  }

  h4{
    font-size: 1.3em;
    color: #7D7873;
  }

  p{
    max-width: 80vw;
    margin: 2em 0 1em 0;
    line-height: 1.6em;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: justify;
    color: #969290;
  }

  .btn{
    width: fit-content;
    padding: 15px 10px;
    color: #359C9C;
    font-weight: 700;
    font-size: 1.3em;
    margin-bottom: 2em;
  }

  .foto-bottom{
    margin: 0 0 2em 0;
  }

  hr{
    width: 300px;
    color: rgba(14, 12, 12, 0.829);
    border-width: 3.5px;
  }

</style>
