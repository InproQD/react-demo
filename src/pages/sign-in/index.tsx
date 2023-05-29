import { useState } from 'react'
import { Input, Divider, Checkbox } from 'antd'
import { CustomerAuthApi, CustomerDataRetrievalApi } from '@/api'
import React from 'react'
import { Crypto, Tool } from '@/utils'
import './index.css'
import AccountLayout from '@/layout/account-layout/index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function SingIn() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [errMessage, setErrMessage] = useState('')
  const imgUrl = useSelector((state: any) => state.portfolio.portfolioJson.iconUrl)
  const navigate = useNavigate()

  const onClickAccount = () => {
    CustomerDataRetrievalApi.getCustomerAccount(
      {
        identifier: account,
        portfolioId: 110
      },
      (res: any) => {
        if (Tool.isNotEmpty(res)) {
          setShowPasswordInput(true)
        }
      },
      () => {
        setErrMessage('Account is incorrect')
      }
    ).then()
  }

  const onClickSignIn = () => {
    const request = {
      identifier: account,
      password: Crypto.md5(password),
      portfolioId: 110
    }
    CustomerAuthApi.signIn(
      request,
      () => {
        navigate('home')
      },
      () => {
        setErrMessage('Incorrect password')
      }
    ).then()
  }

  const handleKeyDown = (event: any) => {
    showPasswordInput ? event.key === 'Enter' && onClickSignIn() : event.key === 'Enter' && onClickAccount()
  }

  return (
    <AccountLayout>
      <div className="head-content">
        <img alt={''} src={imgUrl} width={200} />
        <div className="text-title py-3">Sign In</div>
        <div className="py-3">Manage Your Account</div>
        <Input
          defaultValue={account}
          onChange={(e) => {
            setAccount(e.target.value)
          }}
          className="mt-3"
          suffix={
            <i className="fa fa-solid fa-long-arrow-right" onClick={onClickAccount} onKeyDown={handleKeyDown}></i>
          }
        ></Input>
        {showPasswordInput && (
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="my-3"
            suffix={<i className="fa fa-solid fa-long-arrow-right" onClick={onClickSignIn}></i>}
          ></Input>
        )}
        {errMessage !== '' && <div className="mt-3 error-content width-full f-s-14">{errMessage}</div>}
      </div>
      <div className="footer-content">
        <div>
          <Checkbox>Remember Me</Checkbox>
        </div>
        <div style={{ width: '400px' }}>
          <Divider dashed style={{ background: 'gray', margin: '12px 0' }} />
        </div>
        <div className="py-3">
          <a className=""> Forgot Account ID or Password? </a>
          <i className="fa fa-solid fa-arrow-up"></i>
        </div>
      </div>
    </AccountLayout>
  )
}
export default SingIn
