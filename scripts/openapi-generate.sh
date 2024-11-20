docker run --rm \
  -v $PWD/src/api:/open-api-out \
  -v $PWD/docs/swagger.json:/docs \
  openapitools/openapi-generator-cli:v7.10.0 generate \
  -i docs \
  -g typescript-fetch \
  -o /open-api-out/
