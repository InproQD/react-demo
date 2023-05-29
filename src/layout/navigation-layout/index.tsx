import React, { ReactNode } from 'react'
import { Avatar } from 'antd'
import { useSelector } from 'react-redux'

interface NavigationLayoutProps {
  children: ReactNode
}
export const NavigationLayout: React.FC<NavigationLayoutProps> = ({ children }) => {
  const avatarUrl = useSelector((state: any) => state.portfolio.portfolioJson.iconUrl)
  console.log(avatarUrl)
  return (
    <>
      <div className="navigation-layout">
        <div className="navigation-panel">
          <Avatar shape="square" size={64} src={avatarUrl}></Avatar>
        </div>
        <div className="content-panel">
          <main className="pb-12">{children}</main>
        </div>
      </div>
    </>
  )
}
