import React, { ReactNode } from 'react'
import { Row, Col } from 'antd'
// import { OamApi } from '@/api/oam/oam'
import './index.css'

export default function AccountLayout({ children }: { children: ReactNode }) {
  // const [portfolio] = useState({})
  // const getPortfolio = () => {
  //   OamApi.getPortfolioByCondition({ value: document.domain }, (result: object) => {
  //     setPortfolio(result)
  //   })
  // }
  // useEffect(() => {
  //   getPortfolio()
  // }, [])
  return (
    <div className="panel">
      <Row>
        <Col span={6} offset={4}>
          <div className="left-panel">
            <div className="left-panel-img">{/*<img src={portfolio.reverseLogoUrl} alt={''} />*/}</div>
          </div>
        </Col>
        <Col span={10}>
          <main>{children}</main>
        </Col>
      </Row>
    </div>
  )
}
