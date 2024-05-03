import React, { useMemo, isValidElement, Children } from 'react';

export interface SwitchProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

export function Switch(props: SwitchProps) {
  const { fallback, children } = props;

  const childrenMemo = useMemo(() => children, [children]);

  return (
    <React.Fragment>
      {Children.map(childrenMemo, (child) => {
        if (isValidElement(child) && child.props.when) {
          return child.props.children;
        }

        return fallback;
      })}
    </React.Fragment>
  );
}
