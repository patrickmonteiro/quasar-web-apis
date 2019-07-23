<template>
<q-page class="container">
  <cp-head title="Bateria" icon="battery_charging_full" :chrome="true" :firefox="true"></cp-head>
  <div class="row text-subtitle2" :key="componentKey">
    <div class="col-12">
      <q-list bordered separator>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="power" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Carregando</q-item-label>
            <q-item-label caption lines="2">(charging)</q-item-label>
          </q-item-section>
          <q-item-section side><q-badge color="blue" class="text-uppercase"> {{ batteryInfos.charging }} </q-badge></q-item-section>
        </q-item>
        <q-item clickable >
          <q-item-section avatar>
            <q-icon name="power" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tempo de carregamento</q-item-label>
            <q-item-label caption lines="2">(charging Time)</q-item-label>
          </q-item-section>
          <q-item-section side><q-badge color="blue" class="text-uppercase"> {{ batteryInfos.chargingTime }} </q-badge></q-item-section>
        </q-item>
        <q-item clickable >
          <q-item-section avatar>
            <q-icon name="power" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tempo de descarga</q-item-label>
            <q-item-label caption lines="2">(discharging Time)</q-item-label>
          </q-item-section>
          <q-item-section side><q-badge color="blue" class="text-uppercase"> {{ batteryInfos.dischargingTime }} </q-badge></q-item-section>
        </q-item>
        <q-item clickable >
          <q-item-section avatar>
            <q-icon name="battery_charging_full" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Nível</q-item-label>
            <q-item-label caption lines="2">(level)</q-item-label>
          </q-item-section>
          <q-item-section side><q-badge color="blue" class="text-uppercase"> {{ (batteryInfos.level * 100) }}% </q-badge></q-item-section>
        </q-item>
      </q-list>
    </div>
    <!-- <p class="block">Carregando(charging) <q-badge color="blue"> {{ batteryInfos.charging }} </q-badge> </p>
    <p class="block">Tempo de carregamento(charging Time): <q-badge color="blue"> {{ batteryInfos.chargingTime }} </q-badge></p>
    <p class="block">Tempo de descarga(discharging Time): <q-badge color="blue"> {{ batteryInfos.dischargingTime }} </q-badge></p>
    <p class="block">Nível(level): <q-badge color="blue"> {{ (batteryInfos.level * 100) }}% </q-badge></p> -->
  </div>
</q-page>
</template>

<script>
import CpHead from 'components/CpHead'
export default {
  name: 'PageBaterry',
  components: {
    CpHead
  },
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
