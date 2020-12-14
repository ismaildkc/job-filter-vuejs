<template>
  <div class="detail">
    <div class="container">
      <router-link to="/" class="content-container px-5">Geri</router-link>
      <div class="content-container p-5" v-if="jobDetail">
        <div class="d-flex align-items-center py-3">
          <img src="/img/brand-logo/koc-logo.png" alt="" style="width:200px" />
          <div class="w-100 d-flex flex-column align-items-start pl-3">
            <h2>{{ jobDetail.positionName }}</h2>
            <span>{{ jobDetail.companyName }}</span>
            <span class="durationDay mt-2">{{
              jobDetail.durationDayText
            }}</span>
          </div>
        </div>
        <hr />
        <div class="py-3">
          <p>
            {{ jobDetail.description }}
          </p>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <div>
            Telefon: {{ jobDetail.contactPhone.countryCallingCode }}
            {{ jobDetail.contactPhone.number }}
          </div>
          <div>
            <span>{{ jobDetail.address }}</span>
            <span>{{ jobDetail.cityName }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api";

export default {
  data: function() {
    return {
      id: this.$route.params.slug,
      jobDetail: null
    };
  },
  created() {},
  mounted() {
    this.getJobDetail();
  },
  methods: {
    getJobDetail() {
      api.getJobDetail(this.id).then(response => {
        this.jobDetail = response[0];
      });
    }
  }
};
</script>
