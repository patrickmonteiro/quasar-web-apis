<template>
  <q-page class="container">
    <cp-head title="Geolocalização" icon="place" chrome firefox safari opera android apple></cp-head>
    <div class="row items-center justify-center" style="height: 80vh">
      <div class="col-12">
        <div class="text-h6 text-primary">
          <div >Latitude: {{ position.latitude }}</div>
          <div>Longitude: {{ position.longitude }}</div>
        </div>
      </div>
      <div class="col-10 text-center">
        <q-btn
          color="primary"
          icon="place"
          label="Geolocalização"
          class="full-width"
          size="lg"
          @click="geolocation()" />
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import CpHead from 'components/CpHead'
export default {
  name: 'PageGeolocation',
  components: {
    CpHead
  },
  data () {
    return {
      position: {
        latitude: '',
        longitude: ''
      }
    }
  },
  methods: {
    geolocation () {
      navigator.geolocation.getCurrentPosition(this.formatPosition, this.errorPosition)
    },
    formatPosition (position) {
      this.position.latitude = position.coords.latitude
      this.position.longitude = position.coords.longitude
    },
    errorPosition () {
      this.$q.notify({
        position: 'top',
        timeout: 2500,
        color: 'negative',
        textColor: 'white',
        actions: [{ icon: 'close', color: 'white' }],
        message: 'Não foi possível obter a localização.'
      })
    }
  }
}
</script>
