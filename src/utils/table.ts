// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const transformTableData = (data: any) => {
  if (Array.isArray(data)) {
    return {
      data,
      total: data.length,
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data
}
