export type WebviewOwner = "LinkedIn" | "Facebook" | "Instagram" | null;

/**
 * When possible, determine the owner of the webview based on the user agent.
 *
 * If the user agent does not match a webview or the webview owner cannot be determined, return null.
 */
export function getWebviewOwner(userAgent: string): WebviewOwner {
  if (userAgent.includes("LinkedInApp")) {
    return "LinkedIn";
  }
  if (userAgent.includes("FBAN/FBIOS")) {
    return "Facebook";
  }
  if (userAgent.includes("Instagram")) {
    return "Instagram";
  }
  return null;
}
