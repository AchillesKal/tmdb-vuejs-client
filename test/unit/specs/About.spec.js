import { shallow } from 'vue-test-utils';
import About from '@/components/About';

describe('About.vue', () => {
  it('Should have about title', () => {
    const wrapper = shallow(About);

    expect(wrapper.find('h1').text()).to.equal('About');
  });
});
