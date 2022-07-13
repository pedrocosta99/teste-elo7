<script>
  import IMAGES from "./images";
</script>

<section class='elo-features'>
  <div>
    <img src={IMAGES.qualidade} alt="Emoji de rosto feliz">
    <h4>QUALIDADE DE VIDA</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, explicabo!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, repudiandae.
    </p>
  </div>
  <div>
    <img src={IMAGES.descontracao} alt="Emoji de descontração - mão em gesto de Heavy Metal">
    <h4>AMBIENTE DESCONTRAÍDO</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, explicabo!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, repudiandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas?
    </p>
  </div>
  <div>
    <img src={IMAGES.atividades} alt="Emoji de atividade artística">
    <h4>ATIVIDADES EXTRAS</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, explicabo!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, repudiandae.
    </p>
  </div>
</section>

<style>
  .elo-features{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .elo-features > div{
    margin: 0 1em;
  }

  img{
    margin: 2em 5px;
  }

  h4{
    font-size: 1.3em;
    color: #7D7873;
  }

  p{
    max-width: 900px;
    margin: 2em 0 1em 0;
    line-height: 1.6em;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: justify;
    color: #969290;
  }
  
</style>
