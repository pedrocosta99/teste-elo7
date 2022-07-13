<script>
  import IMAGES from "./images";
</script>

<div class="ceo-banner">
  <img src={IMAGES.placeholderVideo} alt="Entrevista com o CEO da Elo7">

  <div class="video-info">
    <h4 class='video-title'>PALAVRA DO CEO</h4>
    <h4 class='ceo-name'>Carlos Curioni</h4>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Autem quidem, minus facere porro dolore enim quasi cum fugiat laudantium perferendis.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi?
    </p>
  </div>
</div>


<style>

  .ceo-banner{
    display: flex;
    flex-direction: row;
    padding: 3em;
    background-color: rgb(236, 234, 234);
    margin:  0;
  }

  .video-info {
    display: flex;
    flex-direction: column;
    text-align: justify;
    padding: 0 1em 0 3em;
  }

  .video-title{
    color: #7D7873
  }

  .ceo-name{
    color: #F8A509;
    font-style: italic;
  }

  p {
    max-width: 900px;
    margin: 1em 0;
    line-height: 1.6em;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

</style>
