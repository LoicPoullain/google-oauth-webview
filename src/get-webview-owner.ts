import { WebviewOwner } from "./interfaces";

/**
 * When possible, determine the owner of the webview based on the user agent.
 *
 * If the user agent does not match a webview or the webview owner cannot be determined, return null.
 */
export function getWebviewOwner(userAgent: string): WebviewOwner {
  throw new Error("Not implemented");
}
