/*
 * @Description: 正则
 * @Author: Xiaowen丶
 * @Date: 2020-03-11 17:00:00
 * @LastEditors  : Xiaowen丶
 * @LastEditTime : 2020-03-11 17:00:00
 */

const regPhone = /^1[3456789]\d{9}$/ // 手机号验证
const regIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/ // 身份证号验证
const regDate = /^(\d{4})(\d{2})(\d{2})$/ // 日期转换yyyymmdd=>yyyy-mm-dd
const regNumber = /^[0-9]+.?[0-9]*$/ // 是否包含数字
const regMoney = /(^[1-9](\d+)?(\.\d{1,2})?$)|(^\d\.\d{1,2}$)/ // 金额正则
const regNumber6 = /^\d{6}$/

export {
  regPhone,
  regIdCard,
  regDate,
  regNumber,
  regMoney,
  regNumber6
}
