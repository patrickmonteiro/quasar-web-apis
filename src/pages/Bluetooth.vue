<template>
  <q-page class="container">
    <cp-head title="Bluetooth" icon="bluetooth" :chrome="true" :opera="true"></cp-head>
    <div class="row items-center justify-center" style="height: 80vh">
      <div class="col-10 text-center">
        <div class="text-h6 text-negative" v-if="!enableBluetooth">Your browser does not support the Vibration API</div>
        <q-btn
          :color="enableBluetooth ? 'primary' : 'grey-6'"
          icon="bluetooth"
          label="Testar Blueetooth"
          class="full-width"
          size="lg"
          @click="bluetooth()"
          :disable="!enableBluetooth" />
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import CpHead from 'components/CpHead'
export default {
  name: 'PageIndex',
  components: {
    CpHead
  },
  data () {
    return {
      enableBluetooth: false
    }
  },
  mounted () {
    if (window.navigator.bluetooth && this.$q.platform.is.mobile) {
      this.enableBluetooth = true
    }
  },
  methods: {
    bluetooth () {
      window.navigator.bluetooth.requestDevice({
        acceptAllDevices: true
      })
        .then((teste) => {
          console.log(teste) // eslint-disable-line no-console
        })
    }
  }
}
</script>

<style scoped>
</style>
