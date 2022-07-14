<script></script>

<main>

  <p>Outer test</p>
  <div>
    Teste
    <p>Inner Test</p>
  </div>
</main>



<style src="./app.scss" lang="scss">

  p{
    color: white;
  }

  div{
    height: 200px;
    background-color: white;
    color: $yellow;

    > p{
      color: black;
    }
  }


</style>
