<script>
  import Header from "./lib/components/Header.svelte";
  import Vagas from "./lib/components/Vagas.svelte";
</script>

<body>
  <main>

    <Header/>

    <Vagas/>

    <span>CEO</span>
    <span>Time</span>
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
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

</style>
