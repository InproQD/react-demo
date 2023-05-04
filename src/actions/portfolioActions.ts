// 这里书写auth相关模块数据的所有action操作

const portfolioActions = {
  getPortfolio(payload: any) {
    return {
      type: 'GET_PORTFOLIO_JSON',
      payload: payload
    }
  }
}
export default portfolioActions
