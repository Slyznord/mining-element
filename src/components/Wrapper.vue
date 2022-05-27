<template>
  <div
    :class="[
      'container',
      classes
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
  props: {
    classes: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/common.blocks/container';
</style>
