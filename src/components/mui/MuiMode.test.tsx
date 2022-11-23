import { render, screen } from '../../test-utils';
import MuiMode from './MuiMode';

describe('MuiMode', () => {
  test('tenders text correctly', () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('dark mode');
  });
});
