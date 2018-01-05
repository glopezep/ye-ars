'use strict'

module.exports = function years (options = {}) {
  let currentYear = options.initialYear || new Date().getFullYear()
  let years = Array(options.count).fill(true)

  years = years.map(() => {
    const current = currentYear
    currentYear = currentYear + 1
    return current
  })

  return years
}