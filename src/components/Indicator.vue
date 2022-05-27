<template>
  <div
    class="indicator"
    :style="{ width: width }"
  >
    <div
      v-for="(item, index) in mappedElements"
      :key="index"
      :class="[
        'indicator__item',
        `bg_${colors[index]}`
      ]"
      :style="{ width: item.width }"
    >
      <slot
        name="hint"
        :percent="item.width"
        :value="item.value"
        :color="colors[index]"
        :label="item.label"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Indicator',
  props: {
    /**
     * @type [{ name: String, value: Number }]
     */
    elements: {
      type: Array,
      default: () => []
    },
    totalAmount: {
      type: Number,
      required: true
    },
    colors: {
      type: Array,
      default: () => ['warning', 'success', 'error', 'default']
    },
    width: {
      type: String,
      default: '80%'
    }
  },
  computed: {
    mappedElements () {
      if (!this.elements) return []

      // Получаем сумму всех значений для того чтобы сравнить ее
      // с общим кол-вом которое приходит в ответ на запрос
      const totalAmount = this.elements.reduce((sum, item) => {
        sum += item.value
        return sum
      }, 0)
      const mappedElements = this.elements.map(item => {
        const percent = Math.ceil((item.value / this.totalAmount) * 100)

        return {
          value: item.value,
          width: `${percent}%`,
          label: percent > 50 ? 'High' : percent > 25 ? 'Medium' : 'Low'
        }
      })

      // Если итоговая сумма вычесленная на основе данных в объекте
      // не равна итоговой сумме которая приходит в отдельном свойстве,
      // то добавляем в массив mappedElements еще один объект для
      // отображения not rated элемента
      if (totalAmount !== this.totalAmount) {
        const value = this.totalAmount - totalAmount

        mappedElements.push({
          value: value,
          width: `${Math.ceil((value / this.totalAmount) * 100)}%`,
          label: 'Not Rated'
        })
      }

      return mappedElements
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_colors.scss';
@import '@/styles/common.blocks/indicator.scss';
</style>
