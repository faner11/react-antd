export const transformTableData = (data: unknown[] | unknown) => {
  if (Array.isArray(data)) {
    return {
      data,
      total: data.length,
    }
  }
  return data
}
