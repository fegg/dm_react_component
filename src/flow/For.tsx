import React from 'react';

export interface ForProps<T> {
  each: Array<T>;
  children: (item: T, index: number) => React.ReactNode;
}

export function For<T>(props: ForProps<T>) {
  const {each, children} = props;

  return (
    <React.Fragment>
      { each.map((item, index) => children(item, index)) }
    </React.Fragment>
  );
}
