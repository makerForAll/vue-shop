export const shareAreaFun = (
  amountArr: number[],
  increase_rate: number,
  totalAmount: number,
  area: number
) => {
  const use_rate = increase_rate * 0.01
  let store_rate = 0

  // 计算每一期合计的百分比值
  for (let index = 0; index < amountArr.length; index++) {
    store_rate += Math.pow(1 + use_rate, index)
  }

  // 计算每一期金额的数组
  const payment_detail_itemsAmount: number[] = []
  for (let index = 0; index < amountArr.length; index++) {
    // 根据 总比率 和 总金额 ，可以得到 初期 的费用。 totalAmount/store_rate
    // 计算 每1期的金额  要得到每一期的比率 Math.pow(1 + use_rate, index) * 初期
    // 小数点后面的值 要四舍五入算入 个位 Math.round 方法
    payment_detail_itemsAmount[index] = Math.round(
      Math.pow(1 + use_rate, index) * (totalAmount / store_rate)
    )
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
