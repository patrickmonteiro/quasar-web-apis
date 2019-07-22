<template>
  <q-page class="row full-height items-center justify-center">
    <div class="col-10 text-center">
      <div class="text-h6 text-negative" v-if="!enableVibration">Your browser does not support the Vibration API</div>
      <q-btn
        :color="enableVibration ? 'primary' : 'grey-6'"
        icon="vibration"
        label="Testar Vibração"
        class="full-width"
        size="lg"
        @click="vibration()"
        :disable="!enableVibration" />
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      enableVibration: false
    }
  },
  mounted () {
    if (window.navigator.vibrate && this.$q.platform.is.mobile) {
      this.enableVibration = true
    }
  },
  methods: {
    vibration () {
      window.navigator.vibrate([200, 100, 200])
    }
  }
}
</script>

<style scoped>
</style>
