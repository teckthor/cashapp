import Vue from 'vue'
import DayValue from '@/components/DayValue'

describe('DayValue.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(DayValue)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      
  })
})
