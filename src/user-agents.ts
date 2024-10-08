export const webviewUserAgents: {
  os: "iOS" | "Android";
  app:
    | "Telegram"
    | "Gmail"
    | "Slack"
    | "Facebook Messenger"
    | "Twitter"
    | "LinkedIn"
    | "reddit"
    | "YouTube"
    | "Discord"
    | "Facebook App";
  userAgent: string;
  isSupportedByGoogleOAuth: boolean;
}[] = [
  // iOS
  {
    os: "iOS",
    app: "Telegram",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6.1 Mobile/21G93 Safari/604.1",
    isSupportedByGoogleOAuth: true,
  },
  {
    os: "iOS",
    app: "Gmail",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1",
    isSupportedByGoogleOAuth: true,
  },
  {
    os: "iOS",
    app: "Slack",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1",
    isSupportedByGoogleOAuth: true,
  },
  {
    os: "iOS",
    app: "Facebook Messenger",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/478.0.0.46.111;FBBV/647759259;FBDV/iPhone12,8;FBMD/iPhone;FBSN/iOS;FBSV/17.6.1;FBSS/2;FBCR/;FBID/phone;FBLC/fr_FR;FBOP/80]",
    isSupportedByGoogleOAuth: false,
  },
  {
    os: "iOS",
    app: "Twitter",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1",
    isSupportedByGoogleOAuth: true,
  },
  {
    os: "iOS",
    app: "LinkedIn",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [LinkedInApp]/9.30.2698",
    isSupportedByGoogleOAuth: false,
  },
  {
    os: "iOS",
    app: "reddit",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1",
    isSupportedByGoogleOAuth: true,
  },
  {
    os: "iOS",
    app: "YouTube",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1",
    isSupportedByGoogleOAuth: true,
  },
  {
    os: "iOS",
    app: "Discord",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1",
    isSupportedByGoogleOAuth: true,
  },
  {
    os: "iOS",
    app: "Facebook App",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/21G93 [FBAN/FBIOS;FBAV/484.0.0.53.115;FBBV/648018468;FBDV/iPhone12,8;FBMD/iPhone;FBSN/iOS;FBSV/17.6.1;FBSS/2;FBID/phone;FBLC/fr_FR;FBOP/5;FBRV/0;IABMV/1]",
    isSupportedByGoogleOAuth: false,
  },
];

export const browserUserAgents: {
  os: "Mac OS" | "iOS" | "Android" | "Windows";
  browser:
    | "Chrome"
    | "Edge"
    | "Firefox"
    | "Safari"
    | "Samsung Internet"
    | "Opera";
  userAgent: string;
}[] = [
  /* Mac OS */
  {
    os: "Mac OS",
    browser: "Chrome",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
  },
  {
    os: "Mac OS",
    browser: "Firefox",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:130.0) Gecko/20100101 Firefox/130.0",
  },
  {
    os: "Mac OS",
    browser: "Safari",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15",
  },
  /* iOS */
  {
    os: "iOS",
    browser: "Chrome",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/129.0.6668.69 Mobile/15E148 Safari/604.1",
  },
  {
    os: "iOS",
    browser: "Firefox",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/131.0 Mobile/15E148 Safari/605.1.15",
  },
  {
    os: "iOS",
    browser: "Safari",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1",
  },
  /* Android */
  {
    os: "Android",
    browser: "Chrome",
    userAgent:
      "Mozilla/5.0 (Linux; Android 7.1.1; SM-T550 Build/NMF26X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Safari/537.36",
  },
  {
    os: "Android",
    browser: "Firefox",
    userAgent:
      "Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0",
  },
  {
    os: "Android",
    browser: "Samsung Internet",
    userAgent:
      "Mozilla/5.0 (Linux; Android 7.1.1; SAMSUNG SM-T550) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/21.0 Chrome/110.0.5481.154 Safari/537.36",
  },
  /* Windows */
  {
    os: "Windows",
    browser: "Chrome",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
  },
  {
    os: "Windows",
    browser: "Edge",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0",
  },
  {
    os: "Windows",
    browser: "Firefox",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0",
  },
];
