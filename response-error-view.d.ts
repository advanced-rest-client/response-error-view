/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   response-error-view.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement, html, css} from 'lit-element';

declare namespace UiElements {

  /**
   * A view for the response error.
   *
   * The element displays predefined error message with icon and depending on the
   * `message` property it will display custom message or a predefined explanation
   * if the message is one of the Chrome's network errors (net::*).
   *
   * If the `message` property is not set then a defaulot message will be displayed.
   *
   * ### Examples
   *
   * #### Custom message
   *
   * ```html
   * <response-error-view message="Unable to run the request"></response-error-view>
   * ```
   *
   * ### predefined message (chrome network error)
   *
   * ```html
   * <response-error-view message="net::ERR_BAD_SSL_CLIENT_AUTH_CERT"></response-error-view>
   * <response-error-view message="net::ERR_CONNECTION_REFUSED"></response-error-view>
   * ```
   *
   * ## Predefined messages
   * - Request aborted
   * - net::ERR_CERT_AUTHORITY_INVALID
   * - net::ERR_CONNECTION_REFUSED
   * - net::ERR_CERT_COMMON_NAME_INVALID
   * - net::ERR_ADDRESS_UNREACHABLE
   * - net::ERR_BAD_SSL_CLIENT_AUTH_CERT
   * - net::ERR_BLOCKED_BY_ADMINISTRATOR
   * - net::ERR_BLOCKED_BY_CLIENT
   * - net::ERR_BLOCKED_ENROLLMENT_CHECK_PENDING
   * - net::ERR_CERT_CONTAINS_ERRORS
   * - net::ERR_CERT_DATE_INVALID
   * - net::ERR_CERT_END
   * - net::ERR_CERT_ERROR_IN_SSL_RENEGOTIATION
   * - net::ERR_CERT_INVALID
   * - net::ERR_CERT_NAME_CONSTRAINT_VIOLATION
   * - net::ERR_CERT_NON_UNIQUE_NAME
   * - net::ERR_CERT_NO_REVOCATION_MECHANISM
   * - net::ERR_CERT_REVOKED
   * - net::ERR_CERT_UNABLE_TO_CHECK_REVOCATION
   * - net::ERR_CERT_VALIDITY_TOO_LONG
   * - net::ERR_CERT_WEAK_KEY
   * - net::ERR_CERT_WEAK_SIGNATURE_ALGORITHM
   * - net::ERR_CONNECTION_CLOSED
   * - net::ERR_CONNECTION_RESET
   * - net::ERR_CONNECTION_FAILED
   * - net::ERR_CONNECTION_REFUSED
   * - net::ERR_CONNECTION_TIMED_OUT
   * - net::ERR_CONTENT_LENGTH_MISMATCH
   * - net::ERR_INCOMPLETE_CHUNKED_ENCODING
   * - net::ERR_FILE_NOT_FOUND
   * - net::ERR_ICANN_NAME_COLLISION
   * - net::ERR_INTERNET_DISCONNECTED
   * - net::ERR_NAME_NOT_RESOLVED
   * - net::ERR_NAME_RESOLUTION_FAILED
   * - net::ERR_NETWORK_ACCESS_DENIED
   * - net::ERR_NETWORK_CHANGED
   * - net::ERR_NETWORK_IO_SUSPENDED
   * - net::ERR_PROXY_CONNECTION_FAILED
   * - net::ERR_RESPONSE_HEADERS_MULTIPLE_CONTENT_DISPOSITION
   * - net::ERR_RESPONSE_HEADERS_MULTIPLE_CONTENT_LENGTH
   * - net::ERR_RESPONSE_HEADERS_MULTIPLE_LOCATION
   * - net::ERR_SSL_FALLBACK_BEYOND_MINIMUM_VERSION
   * - net::ERR_SSL_PROTOCOL_ERROR
   * - net::ERR_SSL_PINNED_KEY_NOT_IN_CERT_CHAIN
   * - net::ERR_SSL_SERVER_CERT_BAD_FORMAT
   * - net::ERR_SSL_VERSION_OR_CIPHER_MISMATCH
   * - net::ERR_SSL_WEAK_SERVER_EPHEMERAL_DH_KEY
   * - net::ERR_TEMPORARY_BACKOFF
   * - net::ERR_TIMED_OUT
   * - net::ERR_TOO_MANY_REDIRECTS
   *
   * ### Styling
   * The styling is consistent with the `error-message` element styling options.
   *
   * `<response-error-view>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--response-error-view` | Mixin applied to the element | `{}`
   * `--error-message-icon-color` | Color of the icon | `rgba(0, 0, 0, 0.56)`
   * `--error-message-icon` | Mixin apllied to the icon | `{}`
   * `--arc-font-subhead` | Theme mixin, applied to the predefined description message. | `{}`
   * `--error-message-color` | Color of the predefined description message | `#db4437`
   * `--error-message-text` | Mixin applied ot the predefined description message | `{}`
   * `--error-message-code-color` | Color of the message passed to the element. It's meant to be a less visible information and probably define an error code. | `#9e9e9e`
   */
  class ResponseErrorView extends LitElement {

    /**
     * Message to display.
     *
     * The message can be one of the Chrome's net::* error codes. In this
     * case the element will display predefined message.
     */
    message: string|null|undefined;

    /**
     * An icon to display.
     */
    icon: string|null|undefined;

    /**
     * Opened detailed message page.
     */
    detailsPage: number|null|undefined;
    constructor();
    connectedCallback(): void;
    render(): any;
    _renderPageTemplate(selected: any, message: any): any;

    /**
     * handler to the message change event.
     */
    _messageChanged(msg: any): void;
  }
}

declare global {

  interface HTMLElementTagNameMap {
    "response-error-view": UiElements.ResponseErrorView;
  }
}
