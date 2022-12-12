export interface Page<T> {
  list: T[]
  total: number
  pageNum: number
  pageSize: number
  totalPage: number
}

export interface PageParams {
  pageNum: number
  pageSize: number
}
