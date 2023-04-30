<template>
  <div>
    <ChartView/>
  </div>
</template>

<script>

import { defineComponent } from 'vue';
import ChartView from './pages/ChartView.vue';

export default defineComponent({
  name: 'App',
  components: {
    ChartView
  }
})
</script>