import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from 'react-router';
import {Router} from 'react-router-dom'
import { createMemoryHistory } from 'history'
describe('Component App', () => {
  beforeAll(async () => {
    Enzyme.configure({adapter: new Adapter()});
  })
  it('testing rendering of table',()=> {
      const history = createMemoryHistory();
      render(
          <Router history={history}>
              <App />
          </Router>,
      );
      expect(location.pathname).toBe('/')
  })
})
