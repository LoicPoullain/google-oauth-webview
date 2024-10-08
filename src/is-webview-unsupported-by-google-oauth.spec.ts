import { isWebviewUnsupportedByGoogleOAuth } from "./is-webview-unsupported-by-google-oauth";
import { browserUserAgents, webviewUserAgents } from "./user-agents";

describe("isWebviewUnsupportedByGoogleOAuth", () => {
  it("should return true for all browsers", () => {
    for (const { browser, os, userAgent } of browserUserAgents) {
      if (!isWebviewUnsupportedByGoogleOAuth(userAgent)) {
        throw new Error(
          `Browser ${browser} on ${os} should NOT be considered as a webview.`
        );
      }
    }
  });

  it("should return true of false for all webviews depending on if Google OAuth is supported", () => {
    for (const {
      os,
      app,
      userAgent,
      isSupportedByGoogleOAuth,
    } of webviewUserAgents) {
      if (
        isWebviewUnsupportedByGoogleOAuth(userAgent) !==
        isSupportedByGoogleOAuth
      ) {
        throw new Error(
          isSupportedByGoogleOAuth
            ? `${app} webview on ${os} should be considered as supported by Google OAuth.`
            : `${app} webview on ${os} should NOT be considered as supported by Google OAuth.`
        );
      }
    }
  });
});
