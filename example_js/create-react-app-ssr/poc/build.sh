docker buildx build --platform wasi/wasm -t local/react-render-wasm .
docker buildx build -f Dockerfile.node -t local/react-render-node .
docker image ls | grep "local/react-render*"
