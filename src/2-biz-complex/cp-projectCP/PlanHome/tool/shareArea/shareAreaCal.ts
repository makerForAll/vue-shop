/**
 * 计算并返回每期金额的详情
 *
 * @param {number[]} amountArr - 金额周期
 * @param {number} increase_rate - 增长率
 * @param {number} totalAmount - 总金额
 * @param {number} area - 总面积
 * @return {Object} 返回值包含以下字段：
 * @return {number} return.average_price - 每平方米的平均单价
 * @return {number} return.initial_monthly_price - 初期每个月的费用
 * @return {number[]} return.payment_detail_itemsAmount - 包含每一期金额的数组
 */
export const shareAreaFun = (
  amountArr: number[],
  increase_rate: number,
  totalAmount: number,
  area: number,
  payment_interval_months: number
) => {
  const use_rate = increase_rate * 0.01
  let store_rate = 0

  // 递增用的 年数
  const yearValue = (payment_interval_months / 12) * amountArr.length

  // 计算每一期合计的百分比值
  for (let index = 0; index < yearValue; index++) {
    store_rate += Math.pow(1 + use_rate, index)
  }

  // 根据 总比率 和 总金额 ，可以得到 初期 的费用。 totalAmount/store_rate
  // 分摊后的初期 单价
  const shareAreaPrice = totalAmount / store_rate

  // for (let index = 0; index < amountArr.length; index++) {
  //   store_rate += Math.pow(1 + use_rate, index)
  // }

  let countValue = 0
  let rateValue = 0
  // 计算每一期金额的数组
  const payment_detail_itemsAmount: number[] = []
  // if (rateValue < yearValue) {
  for (let index = 0; index < yearValue; index++) {
    // 计算 每1期的金额  要得到每一期的比率 Math.pow(1 + use_rate, index) * 初期
    // 小数点后面的值 要四舍五入算入 个位 Math.round 方法
    for (let index2 = 0; index2 < 2; index2++) {
      payment_detail_itemsAmount[countValue] = Math.round(
        Math.pow(1 + use_rate, rateValue) * shareAreaPrice * (payment_interval_months / 12)
      )
      countValue += 1
      console.log('@@@:', Math.pow(1 + use_rate, rateValue) * shareAreaPrice)
    }
    console.log('rateValue :', rateValue)
    rateValue += 1
  }

  // 初期每个月费用
  const initial_monthly_price = payment_detail_itemsAmount[0] / 12

  // 平均单价
  const average_price = initial_monthly_price / area

  return {
    average_price,
    initial_monthly_price,
    payment_detail_itemsAmount
  }
}
