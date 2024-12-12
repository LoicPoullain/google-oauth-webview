import { strictEqual } from "assert";
import { getWebviewOwner } from "./get-webview-owner";
import { browserUserAgents, webviewUserAgents } from "./user-agents";

describe("getWebviewOwner", () => {
  it('should return "LinkedIn" if the webview owner is LinkedIn', () => {
    const linkedInUserAgent = webviewUserAgents.find(
      ({ app }) => app === "LinkedIn"
    )?.userAgent;

    if (!linkedInUserAgent) {
      throw new Error("LinkedIn user agent not found");
    }

    strictEqual(getWebviewOwner(linkedInUserAgent), "LinkedIn");
  });

  it('should return "Facebook" if the webview owner is Facebook App or Facebook Messenger', () => {
    const facebookUserAgents = webviewUserAgents.filter(
      ({ app }) => app === "Facebook App" || app === "Facebook Messenger"
    );

    facebookUserAgents.forEach(({ userAgent }) => {
      strictEqual(getWebviewOwner(userAgent), "Facebook");
    });
  });

  it('should return "Instagram" if the webview owner is Instagram', () => {
    const instagramUserAgents = webviewUserAgents.filter(
      ({ app }) => app === "Instagram"
    );

    instagramUserAgents.forEach(({ userAgent }) => {
      strictEqual(getWebviewOwner(userAgent), "Instagram");
    });
  });

  it("should return null if the webview owner is not LinkedIn, Facebook or Instagram", () => {
    const otherAgents = webviewUserAgents
      .filter(
        ({ app }) =>
          !["LinkedIn", "Facebook App", "Facebook Messenger", "Instagram"].includes(app)
      )
      .map(({ userAgent }) => userAgent)
      .concat(browserUserAgents.map(({ userAgent }) => userAgent));

    otherAgents.forEach((userAgent) => {
      strictEqual(getWebviewOwner(userAgent), null);
    });
  });
});
