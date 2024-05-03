import { describe, expect, it } from 'vitest';
import { getByTestId, render, screen } from '@testing-library/react';
import { Match } from '../../components';

describe('Match Component', () => {
  it('should render children', () => {
    const {container} = render(
      <Match when={ true }>
        <p data-testid="1">1</p>
      </Match>
    );

    expect(getByTestId(container, '1').textContent).toBe('1');
  });

  it('not should render children', async () => {
    render(
      <Match when={ false }>
        <p data-testid="2">2</p>
      </Match>
    );

    expect(screen.queryByTestId('2')).toBeNull();
  })
})
