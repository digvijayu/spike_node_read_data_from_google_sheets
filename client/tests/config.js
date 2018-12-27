import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

module.exports = {
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(css|scss|less)$': 'jest-css-modules'
  },
  transformIgnorePatterns: ['/node_modules/']
};
