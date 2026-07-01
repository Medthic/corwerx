export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)

    if (response.status !== 404) {
      return response
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return response
    }

    const url = new URL(request.url)
    if (url.pathname.includes('.')) {
      return response
    }

    const fallbackRequest = new Request(new URL('/index.html', request.url), request)
    return env.ASSETS.fetch(fallbackRequest)
  },
}