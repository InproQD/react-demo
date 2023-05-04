import { useState } from 'react'
import { Input, Divider, Checkbox } from 'antd'
import { CustomerAuthApi, CustomerDataRetrievalApi } from '@/api'
import React from 'react'
import Crypto from '@/utils/crypto'
import './index.css'
import AccountLayout from '@/layout/account-layout/index'
import { connect } from 'react-redux'

function SingIn(props: any) {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [errMessage, setErrMessage] = useState('')
  const onClickAccount = () => {
    CustomerDataRetrievalApi.getCustomerAccount(
      {
        identifier: account,
        portfolioId: 110
      },
      () => {
        setShowPasswordInput(true)
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
        console.log(1)
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
        <img alt={''} src={props.portfolioJson.iconUrl} width={200} />
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
          <Input.Password
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="my-3"
            suffix={<i className="fa fa-solid fa-long-arrow-right" onClick={onClickSignIn}></i>}
          ></Input.Password>
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
export default connect((state: any) => {
  return state.portfolio
})(SingIn)
