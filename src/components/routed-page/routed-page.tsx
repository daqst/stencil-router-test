import { Component, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'routed-page',
  styleUrl: 'routed-page.css',
  shadow: false
})
export class Page {
  @State() strings: string[] = [];

  @Prop() history!: RouterHistory;

  objToString(state: any) {
    if (state) {
      return Object.entries(state).map(value => {
        return `{${value[0]}: ${typeof value[1] === 'object' ? this.objToString(value[1]) : value[1]}}`;
      });
    } else {
      return 'undefined';
    }
  }

  componentWillLoad() {
    this.history.replace('/', { foo: 'initialState' });
    this.history.listen(l => {
      this.strings = [ ...this.strings, `History event action [${this.history.action}] with state: ${this.objToString(l)}` ];
    });
  }

  pushPathState(e) {
    e.preventDefault();
    this.history.push('/', { foo: 'pushedPathState' });
  }

  pushObjState(e) {
    e.preventDefault();
    this.history.push({
      pathname: '/',
      state: { foo: 'pushedObjState' },
      key: '',
      query: {},
    });
  }

  render() {
    return (
      <div>
        <button onClick={e => this.pushPathState(e)}>Push state with path</button>
        <button onClick={e => this.pushObjState(e)}>Push state with object</button>
        {this.strings.map(s =>
          <div>{s}</div>
        )}
      </div>
    );
  }
}
