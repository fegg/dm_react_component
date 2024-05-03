import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';

export interface PortalProps {
  container?: HTMLElement | null;
  children: React.ReactNode;
}

export function Portal(props: PortalProps) {
  const { children, container } = props;
  const containerMemo = useMemo(() => {
    if (!container) {
      return document.body;
    }
    return container;
  }, [container]);

  useEffect(() => {
    const el = document.createElement('div');
    containerMemo.appendChild(el);

    const root = ReactDOM.createRoot(el);
    root.render(children);

    return () => {
      if (root) {
        root.unmount();
      }
      containerMemo.removeChild(el);
    };
  }, [children, containerMemo]);

  return null;
}
