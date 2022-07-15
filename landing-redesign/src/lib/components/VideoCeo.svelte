<script>
  import IMAGES from "../scripts/images";
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

<style src="../app.scss" lang="scss">
  .ceo-banner{
    display: flex;
    flex-direction: row;
    padding: 3em;
    background-color: rgb(236, 234, 234);
    margin:  0;
  }

  @media screen and (max-width: 992px) {
    .ceo-banner{
      flex-direction: column;
    }

    img{
      display: flex;
      align-self: center;
    }

    .video-info{
      margin: 2em 3em 0 3em;
    }
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
    color: $yellow;
    font-style: italic;
  }


</style>
