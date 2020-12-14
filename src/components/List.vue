<template>
  <div class="content-container">
    <div class="content-wrapper">
      <router-link
        v-for="(d, index) in data"
        :key="index"
        :to="{ name: 'detail', params: { slug: d.jobId } }"
        class="list-item border-b d-flex align-items-center py-2"
      >
        <div><img :src="d.imageUrl" /></div>
        <div class="d-flex flex-column w-100 pl-2">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <h3 class="pr-2">{{ d.positionName }}</h3>
              <span class="durationDay">{{ d.durationDayText }}</span>
            </div>
            <div>{{ d.townName }} - {{ d.cityName }}</div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-column">
              <span>{{ d.companyName }}</span>
            </div>
            <div class="d-flex flex-column align-items-end">
              <span>{{ d.distance }}</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>
