#/bin/bash

#docker compose -f poc/compose.yml down
sleep 5
docker compose -f poc/compose.yml up --scale app=2  -d
# echo "CLI Benchmark"
# hyperfine --warmup 3 "wasmedge --dir .:. wasmedge_quickjs.wasm ./server-build/renderer.mjs" "node server-build/renderer.node.js"
sleep 5
echo "Warmup"
curl -s http://localhost:4000/ > /dev/null
curl -s http://localhost:4001/ > /dev/null
echo "HTTP Benchamrk"
rm -rf poc/output*
echo "Running wasm runtime benchmark"
wrk http://localhost:4000/ > poc/output_wasm.txt
sleep 5
echo "Running node runtime benchmark"
wrk http://localhost:4001/ > poc/output_node.txt
cat poc/output*