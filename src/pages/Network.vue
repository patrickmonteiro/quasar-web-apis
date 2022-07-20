<template>
  <div>
    <div class="row justify-center">
      <div class="col-4">
        {{ velocidade }} kbps
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Network',
  data () {
    return {
      velocidade: navigator.connection.downlink
    }
  },
  mounted () {
    navigator.connection.onchange = (e) => {
      this.velocidade = navigator.connection.downlink
    }
  }
}
</script>
