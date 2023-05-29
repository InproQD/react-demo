// 这里书写auth相关模块数据的所有action操作
import { Dispatch } from 'redux'
import { CustomerInfrastructureApi } from '@/api'
const authActions = {
  getPortfolio() {
    return async (dispatch: Dispatch) => {
      const result = await CustomerInfrastructureApi.getPortfolioParameters(110, (res: object) => {
        return res
      }).then()
      dispatch({
        type: 'GET_PORTFOLIO_JSON',
        payload: result
      })
    }
  }
}
export default authActions
