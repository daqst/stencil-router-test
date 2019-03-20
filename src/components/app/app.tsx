import { Component } from '@stencil/core';

@Component({
  tag: 'routed-app',
  styleUrl: 'app.css',
  shadow: false
})
export class App {
  render() {
    return (
      <stencil-router id="router">
        <stencil-route-switch>
          <stencil-route component="routed-page">
          </stencil-route>
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
