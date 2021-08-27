import React from 'react';
import '@testing-library/jest-dom/extend-expect';
const { asFragment } = render(<About />);
import { render, cleanup } from '@testing-library/react';

import About from '../../About/index';

afterEach(cleanup);

describe('About component', () => {
    it('renders', () => {
        render(<About />);
      });
    //renders About test
    it('matches snapshots DOM node strucrure', ()=>{
        render(<About />
            )
    })
    expect(asFragment()).toMatchSnapshot();
  })