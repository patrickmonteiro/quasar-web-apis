<template>
  <div class="row q-px-sm">
      <div class="text-h6 col-12">
        <q-icon :name="icon" size="1.3rem"/> {{ title }}
        <q-btn icon="chevron_left" round push  size="sm" class="float-right q-mt-sm"
        @click="$router.go(-1)"></q-btn>
      </div>
      <div class="text-caption col-12 q-pt-xs">
        Compatibilidade:
          <q-icon name="fab fa-chrome" class="q-ml-xs" size="1rem" v-if="chrome" />
          <q-icon name="fab fa-firefox" class="q-ml-xs" size="1rem" v-if="firefox" />
          <q-separator />
      </div>
    </div>
</template>

<script>
export default {
  name: 'CpHead',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    chrome: {
      type: Boolean,
      required: false,
      default: false
    },
    firefox: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
