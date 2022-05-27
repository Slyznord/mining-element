<template>
  <div id="app">
    <div class="container">
      <div class="grid grid_col-2 grid_gap-2">
        <Wrapper
          v-for="(item, index) in indicators"
          :key="index"
          classes="container_row container_wrap container_justify-between container_items-baseline"
        >
          <h3 class="title">{{ item.title }}</h3>

          <Indicator
            :elements="item.values"
            :total-amount="item.total"
          >
            <template #hint="{ percent, value, label, color }">
              <div :class="['hint', color]">
                <p :class="['hint__p hint__p_bold', `text_${color}`]">{{ label }} - {{ percent }}</p>
                <p class="hint__p hint__p_text-primary">{{ value }} employees</p>
              </div>
            </template>
          </Indicator>
        </Wrapper>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Indicator from '@/components/Indicator'
import Wrapper from '@/components/Wrapper'

export default {
  name: 'App',
  components: {
    Indicator,
    Wrapper
  },
  data () {
    return {
      indicators: null
    }
  },
  async mounted () {
    const baseURL = process.env.NODE_ENV === 'production' ? '/mining-element/data.json' : '/data.json'
    this.indicators = await axios.get(baseURL).then(res => res.data)
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap');
@import '@/styles/_colors';
@import '@/styles/common.blocks/grid';
@import '@/styles/common.blocks/hint';
@import '@/styles/common.blocks/title';

#app {
  font-family: 'Inter', sans-serif;
  padding: 45px;
}
</style>
