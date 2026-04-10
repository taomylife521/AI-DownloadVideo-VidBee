const NON_ACTIONABLE_SUBSCRIPTION_ERROR_PATTERNS = [
  'Attribute without value',
  'Non-whitespace before first tag.',
  'Unexpected close tag',
  'Feed not recognized as RSS 1 or 2.',
  'Invalid character in entity name',
  'Invalid character in tag name',
  'Status code 403',
  'Status code 404',
  'Status code 429',
  'Status code 502',
  'Request timed out after 60000ms',
  'AggregateError',
  'read ECONNRESET',
  'socket hang up',
  'getaddrinfo ENOTFOUND',
  'connect EACCES',
  'net::ERR_CONNECTION_RESET',
  'net::ERR_TIMED_OUT',
  'net::ERR_NAME_NOT_RESOLVED',
  'net::ERR_PROXY_CONNECTION_FAILED',
  'net::ERR_INTERNET_DISCONNECTED',
  'Client network socket disconnected before secure TLS connection was established'
] as const

/**
 * Returns true when a subscription check failure should be reported to Sentry.
 */
export const shouldCaptureSubscriptionCheckError = (message: string): boolean =>
  !NON_ACTIONABLE_SUBSCRIPTION_ERROR_PATTERNS.some((pattern) => message.includes(pattern))
