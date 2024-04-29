export function takeOffDataFun<T, K extends keyof T>(obj: T) {
  const data = obj['data' as K]
  if (typeof data === 'object') {
    return data
  }
  throw new Error('数据格式错误')
}
export function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}
