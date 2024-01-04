#/bin/bash

docker compose -f poc/compose.yml up --scale app=2 -d
echo "sleep 10s for docker up"
sleep 10
rm -rf poc/output*
echo "Running wasm runtime benchmark"
wrk -c50 -t5 -d10s http://localhost:4000/echo -s poc/req_post.lua > poc/output_wasm.txt
echo "Running node runtime benchmark"
wrk -c50 -t5 -d10s http://localhost:4001/echo -s poc/req_post.lua > poc/output_node.txt
cat poc/output*
docker stop $(docker ps -aq)
