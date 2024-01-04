docker buildx build --platform wasi/wasm -t secondstate/node-example-server .
docker buildx build -f Dockerfile_node -t secondstate/node-example-server_node .
docker image ls | grep "secondstate*"
