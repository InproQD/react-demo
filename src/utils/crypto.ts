import CryptoJS from 'crypto-js'

const AES_KEY = CryptoJS.enc.Utf8.parse('1234123412ABCDEF')
const OFFSET = CryptoJS.enc.Utf8.parse('ABCDEF1234123412')

const Crypto = {
  md5(source: any) {
    const hash = CryptoJS.MD5(source)
    return hash.toString()
  },

  decrypt(data: any) {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(data)
    const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    const originalDecrypt = CryptoJS.AES.decrypt(srcs, AES_KEY, {
      iv: OFFSET,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    const decryptedStr = originalDecrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
  },

  encrypt(data: any) {
    const srcs = CryptoJS.enc.Utf8.parse(data)
    const encrypted = CryptoJS.AES.encrypt(srcs, AES_KEY, {
      iv: OFFSET,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    return encrypted.ciphertext.toString().toUpperCase()
  }
}
export default Crypto
