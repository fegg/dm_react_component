import { describe, expect, it } from 'vitest';
import { getByTestId, render } from '@testing-library/react';
import { For } from '../../components';

describe('For Component', () => {
  it('should render children', () => {
    const {container} = render(
      <For each={[1, 2, 3]}>
        {(item: number, index: number) => <p key={index} data-testid={index}>{item}</p>}
      </For>
    );

    expect(getByTestId(container, '0').textContent).toBe('1');
    expect(getByTestId(container, '1').textContent).toBe('2');
    expect(getByTestId(container, '2').textContent).toBe('3');
  });
});
