export const transformTableData = (data: Array<any> | any) => {
  if (Array.isArray(data)) {
    return {
      data,
      total: data.length,
    }
  }
  return data
}
