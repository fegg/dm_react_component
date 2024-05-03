import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Portal } from '../components';

describe('Portal Component', () => {
  it('should render children into the specified container', () => {
    const mockContainer = document.createElement('div');
    document.body.appendChild(mockContainer);

    const testChildren = <div data-testid="test-child">Test Child</div>;

    render(<Portal container={mockContainer}>{testChildren}</Portal>);

    expect(mockContainer.querySelector('[data-testid="test-child"]')?.textContent).toBe('Test Child');
  });

  it('should render children into the document.body if no container is provided', () => {
    const testChildren = <div data-testid="test-child">Test Child</div>;

    render(<Portal>{testChildren}</Portal>);

    expect(document.body.querySelector('[data-testid="test-child"]')?.textContent).toBe('Test Child');
  });

  it('should cleanup the portal when unmounted', () => {
    const mockContainer = document.createElement('div');
    document.body.appendChild(mockContainer);

    const testChildren = <div data-testid="test-child">Test Child</div>;

    const { unmount } = render(<Portal container={mockContainer}>{testChildren}</Portal>);

    unmount();

    expect(mockContainer.querySelector('[data-testid="test-child"]')).toBeNull();
  });
});
