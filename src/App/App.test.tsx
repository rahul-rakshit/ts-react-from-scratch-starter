import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { App } from './App';

describe('Jest test setup', () => {
  it('understands optional chaining', () => {
    const val = null ?? 42;
    expect(val).toEqual(42);
  });

  it('renders react components', () => {
    const { getByLabelText } = render(<App />);
    expect(getByLabelText('greeting')).toHaveTextContent('Hello');
  });
});
