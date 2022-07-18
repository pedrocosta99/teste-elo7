<script>
  import Header from "./lib/components/Header.svelte";
  import Vagas from "./lib/components/Vagas.svelte";
  import VideoCeo from "./lib/components/VideoCeo.svelte";
  import Team from "./lib/components/Team.svelte";
  import CompanyFeatures from "./lib/components/CompanyFeatures.svelte";
  import Footer from "./lib/components/Footer.svelte";

</script>

<body>
  <main>

    <Header/>
    <VideoCeo/>
    <Team/>
    <CompanyFeatures/>
    <Vagas/>
    <Footer/>

  </main>
</body>


<style lang="scss">

  main{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    max-width: 960px;
    margin: 0 auto;

  }

</style>
