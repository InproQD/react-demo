import { useState } from 'react'
import { Input, Button } from 'antd'
import { CustomerAuthApi } from '@/api/fss/customerAuth'
import React from 'react'
import AccountLayout from '@/layout/account-layout/index'

export default function SingIn() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const onClickSignIn = () => {
    const request = {
      accountValue: account
    }
    CustomerAuthApi.signIn(request, () => {
      console.log(111)
      setAccount('1')
      setPassword('2')
    })
  }
  return (
    <AccountLayout>
      <Input defaultValue={account}></Input>
      <Input defaultValue={password} bordered={false}></Input>
      <Button onClick={onClickSignIn}>Sign In</Button>
    </AccountLayout>
  )
}
