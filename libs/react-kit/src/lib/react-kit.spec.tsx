import { render } from '@testing-library/react';

import ReactKit from './react-kit';

describe('ReactKit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactKit />);
    expect(baseElement).toBeTruthy();
  });
});
