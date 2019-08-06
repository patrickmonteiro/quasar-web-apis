<template>
  <q-page class="container">
    <div class="row q-pt-sm">
      <div class="col text-center">
        <q-img
          src="statics/quasar-web-apis.png"
          spinner-color="white"
          style="height: 140px; width: 140px"
        />
      </div>
    </div>
    <div class="row q-pt-md q-col-gutter-sm">
      <div class="col-3 text-center" v-for="(menu, index) in menus" :key="index">
        <q-btn outline round
        color="primary"
        :icon="menu.icon"
        :to="{name: menu.route}"
        size="xl"
        class="shadow-3"/>
        <div class="text-caption text-bold text-blue-8">{{ menu.label }}</div>
      </div>
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
      menus: [
        { label: 'Bateria',
          icon: 'battery_charging_full',
          route: 'battery'
        },
        { label: 'Bluetooth',
          icon: 'bluetooth',
          route: 'bluetooth'
        },
        { label: 'Camera',
          icon: 'camera_alt',
          route: 'camera'
        },
        { label: 'Geolocalização',
          icon: 'place',
          route: 'geolocation'
        },
        { label: 'Vibração',
          icon: 'vibration',
          route: 'vibration'
        }
      ]
    }
  }
}
</script>
