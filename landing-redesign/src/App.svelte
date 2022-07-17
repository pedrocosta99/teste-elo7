<script>
  import Header from "./lib/components/Header.svelte";
  import Vagas from "./lib/components/Vagas.svelte";
  import VideoCeo from "./lib/components/VideoCeo.svelte";
  import Team from "./lib/components/Team.svelte";
</script>

<body>
  <main>

    <Header/>
    <Vagas/>
    <VideoCeo/>
    <Team/>
    <span>Company Features</span>
    <span>Foto Bottom</span>
    <span>Footer</span>

  </main>
</body>


<style lang="scss">

  body, main{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    max-width: 960px;
    margin: 0 auto;
  }

</style>
