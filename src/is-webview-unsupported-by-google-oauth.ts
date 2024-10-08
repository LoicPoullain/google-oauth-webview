/**
 * Check if the user agent is a user agent of a web view that is not supported by Google OAuth.
 */
export function isWebviewUnsupportedByGoogleOAuth(userAgent: string): boolean {
  return userAgent.includes("LinkedInApp") || userAgent.includes("FBAN/FBIOS");
}
