import { isWebviewUnsupportedByGoogleOAuth } from "./is-webview-unsupported-by-google-oauth";
import { knownBrowserUserAgents } from "./known-user-agents";

describe("isWebviewUnsupportedByGoogleOAuth", () => {
  it('should return "false" for all browsers', () => {
    for (const { app, os, userAgent } of knownBrowserUserAgents) {
      if (isWebviewUnsupportedByGoogleOAuth(userAgent)) {
        throw new Error(
          `Native browser ${app} on ${os} should not be considered as a webview.`
        );
      }
    }
  });
});
