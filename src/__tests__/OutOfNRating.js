import { render, screen } from '@testing-library/react';
import OutOfNRating from '../components/OutOfNRating';

describe('OutOfNRating', () => {
  it('renders maxRating number of stars', () => {
    render(<OutOfNRating rating={3} maxRating={6} />);
    const ratingsContainer = screen.getByTestId('rating');
    expect(ratingsContainer).toBeInTheDocument();
    expect(ratingsContainer.children.length).toBe(6);
  });

  it('renders a number of stars given as rating prop with fill atribute yelllow', () => {
    render(<OutOfNRating rating={3} maxRating={6} />);
    expect(screen.getAllByTestId('yellow').length).toBe(3);
  });
  it('renders a number of unrated stars given with fill atribute lightgrey ', () => {
    render(<OutOfNRating rating={3} maxRating={6} />);
    expect(screen.getAllByTestId('lightgrey').length).toBe(3);
  });
});
