import { shallowMount } from '@vue/test-utils'
import List from '@/components/List'

describe('List', () => {
  const wrapper = shallowMount(List, {
    props: {
      list: [
        'Item 1',
        'Item 2'
      ]
    }
  })
  const recived = wrapper.findAll('.list-container__list-item')

  test('Should be render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('Should be visible', () => {
    expect(recived[0].wrapperElement).toBeVisible()
    expect(recived[1].wrapperElement).toBeVisible()
  })

  test('Should be show list items', () => {
    expect(recived[0].text()).toBe('Item 1')
    expect(recived[1].text()).toBe('Item 2')
  })

})