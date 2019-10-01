import { html } from 'lit-html';
import '@advanced-rest-client/arc-demo-helper/arc-demo-helper.js';
import '@anypoint-web-components/anypoint-styles/colors.js';
import { ArcDemoPage } from '@advanced-rest-client/arc-demo-helper/ArcDemoPage.js';
import '../response-error-view.js';

class DemoPage extends ArcDemoPage {
  constructor() {
    super();
    // this.initObservableProperties([]);
    this._componentName = 'response-error-view';
    this.demoStates = ['Normal'];

    this._demoStateHandler = this._demoStateHandler.bind(this);
    this._toggleMainOption = this._toggleMainOption.bind(this);
  }

  _toggleMainOption(e) {
    const { name, checked } = e.target;
    this[name] = checked;
  }

  _demoStateHandler(e) {
    const state = e.detail.value;
    this.outlined = state === 1;
    this.compatibility = state === 2;
  }

  _demoTemplate() {
    return html`
      <section class="documentation-section">
        <h3>Custom message</h3>
        <arc-demo-helper>
          <template>
            <response-error-view message="Unable to run the request"></response-error-view>
          </template>
        </arc-demo-helper>

        <h3>Styled message</h3>
        <arc-demo-helper>
          <template>
            <response-error-view
              class="icon-color"
              message="net::ERR_CONNECTION_REFUSED"></response-error-view>
            <style>
            .icon-color {
              --error-message-icon-color: rgba(63, 81, 181, 0.74);
              --error-message-color: #3F51B5;
              --error-message-code-color: #8D6E63;
            }
            </style>
          </template>
        </arc-demo-helper>

        <h3>Predefined messages</h3>
        <arc-demo-helper>
          <template>
            <div class="list">
              <response-error-view message="net::ERR_BAD_SSL_CLIENT_AUTH_CERT"></response-error-view><hr>
              <response-error-view message="net::ERR_CERT_AUTHORITY_INVALID"></response-error-view><hr>
              <response-error-view message="net::ERR_CERT_COMMON_NAME_INVALID"></response-error-view><hr>
              <response-error-view message="Request aborted"></response-error-view><hr>
              <response-error-view message="net::ERR_ADDRESS_UNREACHABLE"></response-error-view><hr>
              <response-error-view message="net::ERR_BLOCKED_BY_ADMINISTRATOR"></response-error-view><hr>
              <response-error-view message="net::ERR_BLOCKED_BY_CLIENT"></response-error-view><hr>
              <response-error-view message="net::ERR_TIMED_OUT"></response-error-view>
            </div>
          </template>
        </arc-demo-helper>
      </section>
    `;
  }

  contentTemplate() {
    return html`
      <h2>Response error view</h2>
      ${this._demoTemplate()}
    `;
  }
}

const instance = new DemoPage();
instance.render();
window._demo = instance;
