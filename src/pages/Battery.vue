<template>
<q-page class="container">
  <div class="text-h6">
   <q-icon name="battery_charging_full" /> Bateria
  </div>
  <div class="row text-subtitle2" :key="componentKey">
    <p class="block">Carregando(charging) <q-badge color="blue"> {{ batteryInfos.charging }} </q-badge> </p>
    <p class="block">Tempo de carregamento(charging Time): <q-badge color="blue"> {{ batteryInfos.chargingTime }} </q-badge></p>
    <p class="block">Tempo de descarga(discharging Time): <q-badge color="blue"> {{ batteryInfos.dischargingTime }} </q-badge></p>
    <p class="block">Nível(level): <q-badge color="blue"> {{ (batteryInfos.level * 100) }}% </q-badge></p>
    <!-- <p>on charging change: {{ batteryInfos.onchargingchange }}</p>
    <p>onchargingtimechange: {{ batteryInfos.onchargingtimechange }}</p>
    <p>ondischargingtimechange: {{ batteryInfos.ondischargingtimechange }}</p>
    <p>onlevelchange: {{ batteryInfos.onlevelchange }}</p> -->
  </div>
</q-page>
</template>

<script>
export default {
  name: 'PageBaterry',
  data () {
    return {
      batteryInfos: {
        charging: false
      },
      componentKey: 0
    }
  },
  mounted () {
    this.battery()
  },
  methods: {
    battery () {
      this.componentKey += 1
      navigator.getBattery()
        .then((battery) => {
          this.batteryInfos = battery
          battery.addEventListener('chargingchange', this.battery)
        })
    }
  }
}
</script>
