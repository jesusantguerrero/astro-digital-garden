import { describe, it } from 'vitest'
import { mount } from "@vue/test-utils"
import SmartSeedPreview from '../src/components/SmartSeedPreview.vue'

describe('SmartSeedPreview', () => {
  it('should be a function', () => {
    const wrapper = mount(SmartSeedPreview, {
        props: {
            includes: 'https://google.com'
        }
    });
  })
}