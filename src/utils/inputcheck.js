export const pwdCheck = val => {
    // 密码正则表达式 密码为6-16位且是字母、数字、字符两种以上组合
    const pattern = /(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[^\x00-\xff].*$)^\S{6,16}$/
    return pattern.test(val)
  }
  
  export const codeCheck = val => {
    // 验证码正则表达式 6位纯数字
    const pattern = /^[0-9]{6}$/
    return pattern.test(val)
  }
  
  export const emailCheck = val => {
    // 邮箱正则表达式
    const pattern = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    return pattern.test(val)
  }
  
  export const mobileCheck = val => {
    // 手机正则表达式
    const pattern = /^1[0-9]{10}$/
    return pattern.test(val)
  }
  
  export const telephoneCheck = val => {
    // 座机正则表达式
    // const pattern = /^((0\d{2,3}))(\d{7,8})(-(\d{3,})) | ((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/
    const pattern = /^0\d{2,3}(\-)?\d{7,8}$/
    return pattern.test(val)
  }
  
  export const nicknameCheck = val => {
    // 昵称正则表达式
    const special = '~￥#&*<>《》()[]{}【】^@/￡¤|§¨「」『』￠￢￣（）——+|$_€¥'
    const result = val.indexOf(special) === -1
    const result2 = val.length > 0
    return result && result2
  }
  
  export const numberCheck = val => {
    // 数字检测
    const pattern = /^[0-9]*$/
    return pattern.test(val)
  }
  
  export const telCheck = val => {
    // 数字检测
    const pattern = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/
    return pattern.test(val)
  }
  