<template>
  <q-page class="container">
    <cp-head title="Bluetooth" icon="bluetooth"
      :chrome="true"
      :firefox="true"
      :opera="true"
      :safari="true"></cp-head>
    <div class="row">
      <div class="col-12 text-center">
        <video autoplay width="230rem" ref="videoplay"></video>
      </div>
    </div>
    <div class="row justify-center q-pt-xs" >
      <div class="col-10 text-center">
        <div class="text-h6 text-negative" v-if="!enableCamera">Your browser does not support the Camera API</div>
        <q-btn
          :color="enableCamera ? 'primary' : 'grey-6'"
          icon="camera"
          label="Tirar Foto"
          class="full-width q-mt-md"
          size="lg"
          @click="onTakePhotoButtonClick()"
          :disable="!enableCamera" />
      </div>
      <div class="col-12 text-center q-pt-sm">
        <img src="" ref="imgTakePhoto" width="230rem" />
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
      imageCapture: null,
      track: null,
      enableCamera: false
    }
  },
  mounted () {
    if (navigator.mediaDevices.getUserMedia) {
      this.enableCamera = true
      this.camera()
    }
  },
  methods: {
    camera () {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
          this.$refs.videoplay.srcObject = mediaStream
          this.track = mediaStream.getVideoTracks()[0]
          this.imageCapture = new ImageCapture(this.track)
        })
        .catch(error => console.log(error))
    },
    onTakePhotoButtonClick () {
      this.imageCapture.takePhoto()
        .then(blob => {
          createImageBitmap(blob)
          let reader = new FileReader()
          reader.readAsDataURL(blob)
          reader.onloadend = () => {
            this.$refs.imgTakePhoto.src = reader.result
          }
        })
        .catch(error => console.log(error))
    }
  },
  destroyed () {
    this.track.stop()
  }
}
</script>

<style scoped>
</style>
