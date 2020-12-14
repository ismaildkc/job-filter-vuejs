<template>
  <div class="home">
    <div class="container">
      <Search />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  components: {
    Search
  }
};
</script>
