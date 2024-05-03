import React, { useMemo } from 'react';

export interface ShowProps {
  children: React.ReactNode;
  when: boolean;
  fallback?: React.ReactNode;
}

export function Show(props: ShowProps) {
  const { when, fallback, children } = props;

  const childrenMemo = useMemo(() => children, [children]);
  const fallbackMemo = useMemo(() => fallback, [fallback]);

  return when ? childrenMemo : fallbackMemo;
}
