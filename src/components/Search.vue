<template>
  <div>
    <header>
      <div class="form-group align-items-center p-3">
        <div class="d-flex items-center w-100">
          <label for="keyword">
            <i class="fas fa-search"></i>
            <input
              type="text"
              name="keyword"
              placeholder="Pozisyon, firma, sektör"
              v-model="search"
              @input="getResults"
            />
          </label>
        </div>
      </div>
    </header>
    <List
      v-if="showResult || this.$store.state.jobList.length > 0"
      :data="this.$store.state.jobList"
    />
  </div>
</template>

<script>
import api from "../api";
import List from "@/components/List.vue";

export default {
  components: {
    List
  },
  data: function() {
    return {
      search: null,
      searchResult: {},
      showResult: false
    };
  },
  created() {},
  computed: {},
  methods: {
    getResults() {
      this.searchResult = {};
      if (this.search.length > 1) {
        api.getJobList(this.search).then(response => {
          if (response.length > 0) {
            this.showResult = true;
            this.searchResult = response;
            this.$store.commit("getJobList", this.searchResult);
          }
        });
      }
    }
  }
};
</script>

<style lang="scss">
$gray: #dedede;
$black: #222;

header {
  border-radius: 15px;
}

.form-group {
  display: flex;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 16px 50px -12px rgb(0, 0, 0, 33%);

  input {
    padding: 0.8rem;
    flex-grow: 1;
    font-size: 1rem;
    width: 100%;
    height: 55px;
    font-weight: 700;
    color: #a0a9b3 !important;
    border: 2px solid $black;
    border-radius: 15px;
  }
}

label {
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
}
</style>
