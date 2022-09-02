import { jsonPost } from './request'

export const getTableData = (url: string) => {
  const fun = async (parmas: any) => {
    const res = await jsonPost<any>(url, {
      json: {
        ...parmas,
        pageNum: parmas.current,
        current: undefined
      }
    })
    if (res.list != null) {
      return {
        total: res.total,
        data: res.list
      }
    } else {
      return {
        total: res?.length,
        data: res
      }
    }
  }
  return fun
}
