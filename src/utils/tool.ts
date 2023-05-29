export const Tool = {
  isNotEmpty(value: unknown): boolean {
    // if (_.isBoolean(value) || _.isNumber(value) || _.isFunction(value)) {
    //   return true
    // }
    // return !_.isEqual(value, 'N/A') && !_.isEmpty(value)
    return (
      value !== undefined &&
      value !== '' &&
      value !== null &&
      value !== 'N/A' &&
      JSON.stringify(value) !== '{}' &&
      JSON.stringify(value) !== '[]'
    )
  },

  isEmpty(value: unknown): boolean {
    // if (_.isBoolean(value) || _.isNumber(value) || _.isFunction(value)) {
    //   return false
    // }
    // return _.isEqual(value, 'N/A') || _.isEmpty(value)
    return (
      value === undefined ||
      value === null ||
      value === 'N/A' ||
      value === '' ||
      JSON.stringify(value) === '{}' ||
      JSON.stringify(value) === '[]'
    )
  },

  isPC(): any {
    const userAgentInfo = navigator.userAgent
    const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
    let flag = true
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false
        break
      }
    }
    return flag
  }
}
