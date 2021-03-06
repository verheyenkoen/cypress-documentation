const rawRender = require('../raw_render')

module.exports = function usageOptions (hexo, args) {
  const opt = args[0]
  const type = args[1]

  const render = (str) => {
    return rawRender.call(this, hexo, str)
  }

  const blurbs = {
    log: () => {
      /* eslint-disable quotes */
      const url = `{% url 'Command log' test-runner#Command-Log %}`

      return render(`Displays the command in the ${url}`)
    },

    force: () => {
      /* eslint-disable quotes */
      const url = `{% urlHash 'waiting for actionability' Assertions %}`

      return render(`Forces the action, disables ${url}`)
    },

    timeout: () => {
      /* eslint-disable quotes */
      const url = `{% urlHash 'timing out' Timeouts %}`

      return render(`Time to wait for <code>${type}()</code> to resolve before ${url}`)
    },

    multiple: () => {
      return 'Serially click multiple elements'
    },

    retryOnStatusCodeFailure: () => {
      return 'Whether Cypress should automatically retry status code errors under the hood. Cypress will retry a request up to 4 times if this is set to true.'
    },

    retryOnNetworkFailure: () => {
      return 'Whether Cypress should automatically retry transient network errors under the hood. Cypress will retry a request up to 4 times if this is set to true.'
    },

    withinSubject: () => {
      return 'Element to search for children in. If null, search begins from root-level DOM element'
    },
  }

  const blurb = blurbs[opt]

  if (!blurb) {
    throw new Error(`{% usage_options %} tag helper was provided an invalid option: ${opt}`)
  }

  return blurb()
}
