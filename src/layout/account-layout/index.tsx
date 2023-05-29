import React, { ReactNode, useEffect, useState, useRef } from 'react'
import { Row, Col, Divider } from 'antd'
import { CustomerInfrastructureApi } from '@/api'
import './index.css'
import { useDispatch } from 'react-redux'
import portfolioActions from '@/redux/actions/portfolioActions'

//-----------类型定义写外面（如果写在函数里面，那么每次render都会重新定义给值）
interface AccountLayoutProps {
  children: ReactNode
}
interface Portfolio {
  reverseLogoUrl: string
  description: string
  phone: string
  domain: string
  fssBackgroundUrl: string
}

// 一般函数组件+ts的规范写法，需要定义 props 类型方便检查
const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
  const portfolioValue: Portfolio = {
    reverseLogoUrl: '',
    description: '',
    phone: '',
    domain: '',
    fssBackgroundUrl: ''
  }

  const [portfolio, setPortfolio] = useState<Portfolio>(portfolioValue)
  const [portfolioWebsite, setPortfolioWebsite] = useState('')
  const backgroundRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const getPortfolio = () => {
    CustomerInfrastructureApi.getPortfolioParameters(110, (result: Portfolio) => {
      setPortfolio(result)
      dispatch(portfolioActions.getPortfolio(result))
    }).then()
  }

  useEffect(() => {
    getPortfolio()
    setPortfolioWebsite(portfolio.domain.toUpperCase().substring(4))
  }, [])

  useEffect(() => {
    if (backgroundRef.current) {
      backgroundRef.current.style.backgroundImage = `url(${portfolio.fssBackgroundUrl})`
    }
  }, [portfolio])

  return (
    <div className="panel" ref={backgroundRef}>
      <Row>
        <Col span={6} offset={4}>
          <div className="left-panel">
            <div className="left-panel-img">
              <img src={portfolio.reverseLogoUrl} alt={''} width={150} />
              <div className="text-white f-s-12 py-6">{portfolio.description}</div>
              <div className="left-content-footer">
                <div className="f-s-14 text-white">
                  Need some help?
                  <a href={`tel:${portfolio.phone}`} className="text-white text-decoration-none">
                    Call Us at {portfolio.phone}
                  </a>
                </div>
                <Divider dashed style={{ background: 'white', margin: '12px 0' }} />
                <div className="text-white">
                  <div className="f-s-10">&copy; {portfolioWebsite}, ALL RIGHTS RESERVED.</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={10}>
          <div className="right-panel px-8">
            <div className="right-head-panel f-w-700">
              <div className="f-s-16">Sign In</div>
              <div className="text-gray">Sign In</div>
            </div>
            <Divider dashed style={{ background: 'gray', margin: '0' }} />
            <main className="pb-12">{children}</main>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default AccountLayout
// connect 有两个参数，均为回调函数，
// 第一个参数是用于获取store中的state, 第二个参数是用于获取redux的actionCreators中的方法
// export default connect((state: { auth: object }) => {
//   return state.auth
// })(AccountLayout)
