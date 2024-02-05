import { Configuration } from "@/api"

export const BaseApiConfig = new Configuration({
  basePath: "https://www.fastmock.site/mock/cc8a908c6c1e5651000fb34608fb1aa5/mock",
  headers: {
    myheader: "123456",
  },
})
