import { isWebviewUnsupportedByGoogleOAuth } from "./is-webview-unsupported-by-google-oauth";
import { browserUserAgents } from "./user-agents";

describe("isWebviewUnsupportedByGoogleOAuth", () => {
  it('should return "false" for all browsers', () => {
    for (const { browser, os, userAgent } of browserUserAgents) {
      if (isWebviewUnsupportedByGoogleOAuth(userAgent)) {
        throw new Error(
          `Browser ${browser} on ${os} should not be considered as a webview.`
        );
      }
    }
  });
});
