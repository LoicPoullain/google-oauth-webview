# Google OAuth Webview

Google OAuth fails in some webviews (in-app browsers) and displays a **`403 disallowed_useragent`** error message. This library detects whether the user is in a webview that is not supported by Google OAuth.

## Installation

```
npm install google-oauth-webview
```

## Usage

```typescript
import {
  isWebviewUnsupportedByGoogleOAuth,
  getWebviewOwner,
  WebviewOwner,
} from "google-oauth-webview";

// Checks if the user agent is a user agent of a web view that is not supported by Google OAuth.
const isSupported: boolean = isWebviewUnsupportedByGoogleOAuth(
  navigator.userAgent
);

// When possible, determines the owner of the webview based on the user agent.
// If the user agent does not match a webview or the webview owner cannot be determined, returns null.
const webviewOwner: WebviewOwner = getWebviewOwner(navigator.userAgent);
```

## Sponsor

[![Linito logo](https://github.com/LoicPoullain/google-oauth-webview/blob/main/sponsors/linito.png)](https://linito.io/?utm_source=github_or_npm&utm_medium=referral&utm_campaign=google-oauth-webview_sponsor_logo)

## Browsers and applications tested

_Legend_

- ✅ The application or browser has been tested and its user agent is present in the test.
- ❌ The application or browser has NOT been tested.

### Browsers tested

| Browser          | Mac OS | Windows | iOS | Android |
| ---------------- | ------ | ------- | --- | ------- |
| Chrome           | ✅     | ✅      | ✅  | ✅      |
| Firefox          | ✅     | ✅      | ✅  | ✅      |
| Edge             | ❌     | ✅      | ❌  | ❌      |
| Safari           | ✅     | ❌      | ✅  | ❌      |
| Samsung Internet | ❌     | ❌      | ❌  | ✅      |
| Opera            | ❌     | ❌      | ❌  | ❌      |

### Applications tested

| Application        | iOS | Android | Uses a webview | Google OAuth works in webview |
| ------------------ | --- | ------- | -------------- | ----------------------------- |
| WhatsApp           | ✅  | ❌      | no             | -                             |
| ProtonMail         | ✅  | ❌      | no             | -                             |
| Telegram           | ✅  | ❌      | yes            | yes                           |
| Gmail              | ✅  | ❌      | yes            | yes                           |
| Slack              | ✅  | ❌      | yes            | yes                           |
| Facebook Messenger | ✅  | ❌      | yes            | no                            |
| X / Twitter        | ✅  | ❌      | yes            | yes                           |
| LinkedIn           | ✅  | ❌      | yes            | no                            |
| reddit             | ✅  | ❌      | yes            | yes                           |
| YouTube            | ✅  | ❌      | yes            | yes                           |
| Discord            | ✅  | ❌      | yes            | yes                           |
| Facebook App       | ✅  | ❌      | yes            | no                            |

### Applications that still need to be tested

| Application | iOS | Android |
| ----------- | --- | ------- |
| Instagram   | ❌  | ❌      |
| TikTok      | ❌  | ❌      |
| Snapshat    | ❌  | ❌      |

## Contributing

1. Connect your cell phone to your local network (e.g. wifi).
2. Clone this repository and run `npm run serve`. This command will serve a web page on your local network, displaying the user agent. Copy the network URL displayed in the terminal.
3. Paste the URL into your application (for example, if you're testing a messaging application, you can send the URL to yourself as a message).
4. Click on the URL in your application and check whether the page is loaded in a web view or in the native browser. If the URL link doesn't work because it's an IP address, you can use the URL `https://www.google.com/url?q=<your-local-URL>` instead, which should do the trick.
5. Copy and paste the user agent displayed in the `src/user-agents.ts` file.
6. Test whether Google OAuth works in the webview. If not, update the library code and tests accordingly.
7. Complete the README.

### Rules

- DO NOT copy and paste user agents found on forums, etc.
- DO NOT copy and paste user agents returned by ChatGPT or other artificial intelligence platforms.

We want accurate data that has been tested on real devices with real applications.

## Supported Node and TypeScript versions

|  Node min versions | TS min version |
| ------------------ | -------------- |
| 20, 22             | 5.6            |
