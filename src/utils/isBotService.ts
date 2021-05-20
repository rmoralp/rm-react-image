const BOTS_USER_AGENTS = [
  'googlebot',
  'google-structured-data-testing-tool',
  'bingbot',
  'linkedinbot',
  'mediapartners-google',
  'googlebot-image',
  'googlebot-news',
  'googlebot-video'
]

type IsBotServiceFn = (userAgent: string | undefined) => boolean

export const isBotService: IsBotServiceFn = userAgent => {
  return BOTS_USER_AGENTS.some(ua => userAgent.toLowerCase().includes(ua))
}
