import {
  Show,
  For,
  Switch,
  Match,
  If,
} from '../components';
import { Portal } from '../components/Portal.tsx';

export function App() {
  return (
    <>
      <Portal>
        <p>body: Hello World</p>
      </Portal>
      <Portal container={document.getElementById('test')}>
        <p>#test: Hello World</p>
      </Portal>
      <Show when={ true }>
        <p>Hello World</p>
      </Show>
      <For each={ [1, 2, 3] }>
        { (item, index) => <p key={ index }>{ item }</p> }
      </For>
      <Switch>
        <Match when={ false }>
          <p>Hello World</p>
        </Match>
        <Match when={ true }>
          <p>Goodbye World</p>
        </Match>
      </Switch>
      <Match when={ true }>
        <p>Hello World</p>
      </Match>
      <If when={ false }>
        <p>Goodbye World</p>
      </If>
    </>
  )
}
