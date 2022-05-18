
/**
 * @param {string} str
 * @returns {boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str) >= 0
}

/**
 * @param {string} str
 * @returns {boolean}
 */
export function validPassword(str) {
  const regexp = /[a-zA-Z0-9]{6,}/
  return regexp.test(str)
}