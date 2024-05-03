import React, { useMemo } from 'react';

export interface MatchProps {
  when: boolean;
  children: React.ReactNode;
}

export function Match(props: MatchProps) {
  const { when, children } = props;
  const childrenMemo = useMemo(() => children, [children]);

  if (when) {
    return childrenMemo;
  }

  return null;
}

export const If = Match;
