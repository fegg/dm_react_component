import { describe, expect, it } from 'vitest';
import { Match, Switch } from '../../components';
import { getByTestId, render, screen } from '@testing-library/react';

describe('Switch Component', () => {
  it('should render children', () => {
    const {container} = render(
      <Switch>
        <Match when={ true }>
          <p data-testid="1">1</p>
        </Match>
        <Match when={ false }>
          <p data-testid="2">2</p>
        </Match>
        <Match when={ true }>
          <p data-testid="3">3</p>
        </Match>
      </Switch>
    );

    expect(getByTestId(container, '1').textContent).toBe('1');
    expect(screen.queryByTestId('2')).toBeNull();
    expect(getByTestId(container, '3').textContent).toBe('3');
  });
})
