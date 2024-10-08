export const knownBrowserUserAgents: {
  os: "Mac OS" | "iOS" | "Android" | "Windows";
  app: "Chrome" | "Edge" | "Firefox" | "Safari" | "Samsung Internet" | "Opera";
  userAgent: string;
}[] = [
  // Mac OS
  {
    os: "Mac OS",
    app: "Chrome",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
  },
  {
    os: "Mac OS",
    app: "Firefox",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:130.0) Gecko/20100101 Firefox/130.0",
  },
  {
    os: "Mac OS",
    app: "Safari",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15",
  },
  // iOS
  {
    os: "iOS",
    app: "Chrome",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/129.0.6668.69 Mobile/15E148 Safari/604.1",
  },
  {
    os: "iOS",
    app: "Firefox",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/131.0 Mobile/15E148 Safari/605.1.15",
  },
  {
    os: "iOS",
    app: "Safari",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1",
  },
  // Android
  {
    os: "Android",
    app: "Chrome",
    userAgent:
      "Mozilla/5.0 (Linux; Android 7.1.1; SM-T550 Build/NMF26X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Safari/537.36",
  },
  {
    os: "Android",
    app: "Firefox",
    userAgent:
      "Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0",
  },
  {
    os: "Android",
    app: "Samsung Internet",
    userAgent:
      "Mozilla/5.0 (Linux; Android 7.1.1; SAMSUNG SM-T550) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/21.0 Chrome/110.0.5481.154 Safari/537.36",
  },
  // Windows
  {
    os: "Windows",
    app: "Chrome",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
  },
  {
    os: "Windows",
    app: "Edge",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0",
  },
  {
    os: "Windows",
    app: "Firefox",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0",
  },
];
