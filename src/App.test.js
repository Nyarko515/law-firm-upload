import { render } from '@testing-library/react';
import App from './App';

test('renders law firm app without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeTruthy();
});
