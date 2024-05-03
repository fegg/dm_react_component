import { describe, expect, it } from 'vitest';
import { render, getByTestId, screen } from '@testing-library/react';
import { Show } from '../../components';

describe('Show Component', () => {
  it('should render children', () => {
    const {container} = render(
      <Show when={ true }>
        <p data-testid="text">Hello World</p>
      </Show>
    );

    expect(getByTestId(container, 'text').textContent).toBe('Hello World');
  });

  it('not should render children', async () => {
    const {container} = render(
      <div data-testid="wrap">
        <Show when={ false } fallback={ <p data-testid="text">fallback</p> }>
          <p data-testid="text-child">Hello World</p>
        </Show>
      </div>
    );

    const el = getByTestId(container, 'text');
    expect(el.textContent).toBe('fallback');
    expect(screen.queryByTestId('text-child')).toBeNull();
  });
});
