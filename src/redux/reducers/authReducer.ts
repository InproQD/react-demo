const initState = {
  account: {}
}
const authReducer = (state = initState) => {
  // state 是状态也是数据
  // action是一个对象，由actionCreators发送过来的动作
  // authReducer一定要有返回值
  // state不可更改，所以返回的新状态，一定是state的拷贝, 也可以用Json.parse和Json.Stringfy来拷贝
  return { ...state.account }
}
export default authReducer
