export function isWebviewUnsupportedByGoogleOAuth(userAgent: string): boolean {
  return (
    !userAgent.includes("LinkedInApp") && !userAgent.includes("FBAN/FBIOS")
  );
}
