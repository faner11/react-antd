// oxlint-disable no-explicit-any
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { SortOrder } from 'antd/es/table/interface'
import { camelCase, isNil } from 'es-toolkit'

const transformTableParams = (
  params: any,
  sort?: Record<string, SortOrder>,
  filter?: Record<string, (string | number)[] | null>,
) => {
  const { current, pageSize, ...rest } = params
  const sortObj: Record<string, SortOrder> = {}
  for (const key in sort) {
    if (Object.prototype.hasOwnProperty.call(sort, key)) {
      const element = sort[key]
      if (isNil(element)) continue
      const keyStr = camelCase(`sort_${key}`)
      sortObj[keyStr] = element
    }
  }
  const filterObj: Record<string, (string | number)[] | null> = {}
  for (const key in filter) {
    if (Object.prototype.hasOwnProperty.call(filter, key)) {
      const element = filter[key]
      if (isNil(element)) continue
      const keyStr = camelCase(`filter_${key}`)
      filterObj[keyStr] = element
    }
  }

  return {
    ...rest,
    pageNum: current,
    pageSize,
    ...sortObj,
    ...filterObj,
  }
}
const transformTableDataSource = (data: any[] | any) => {
  if (Array.isArray(data)) {
    return {
      data,
      total: data.length,
    }
  }
  return {
    data: data.list,
    total: data.total,
  }
}

export const tableQueryFun = (callback: any) => {
  return async (params: any, sort?: Record<string, SortOrder>, filter?: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const obj = transformTableParams(params, sort, filter)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const data = await callback(obj)
    return transformTableDataSource(data)
  }
}
