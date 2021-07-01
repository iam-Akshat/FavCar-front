import { render, screen } from '@testing-library/react';
import ErrorText from '../components/ErrorText';

describe('ErrorText', () => {
  it('does not render anything when given an empty string', () => {
    const { container } = render(<ErrorText error="" />);
    expect(container.textContent).toBe('');
    expect(container.firstChild.classList).toContain('d-none');
  });

  it('renders the given text given in error prop', () => {
    render(<ErrorText error="test" />);
    const element = screen.getByText('test');
    expect(element).toBeInTheDocument();
    expect(element.classList).not.toContain('d-none');
  });
});
