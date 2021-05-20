import App from './App';
import { shallow } from 'enzyme';

describe('Counter Test', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<App />);
  });
  test('should render counter app welcome message', () => {
    expect(wrapper.find('h1').text()).toContain('Welcome to counter app');
  });

  test('should render a button with text `Increment`', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });
  
  test('should render the initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

  test('should render the click event of increment button and increment counter value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
  });

  test('should render a button with text `Decrement`', () => {
    expect(wrapper.find('#decrement-btn').text()).toBe('Decrement');
  });

  test('should render the click event of decrement button and decrement counter value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });
});
