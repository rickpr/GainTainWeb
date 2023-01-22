#!/usr/bin/env sh

set -euxo

cd "$(dirname "$0")"

BACKEND_OUTPUT_DIRECTORY=../backend/grpc
FRONTEND_OUTPUT_DIRECTORY=../frontend/src/grpc

for filename in ../proto/*.proto
do
    # Backend
    grpc_tools_ruby_protoc -I ../proto \
        --ruby_out="$BACKEND_OUTPUT_DIRECTORY" \
        --grpc_out="$BACKEND_OUTPUT_DIRECTORY" \
        "$filename"
    # Frontend
    protoc -I ../proto \
        --js_out=import_style=commonjs:"$FRONTEND_OUTPUT_DIRECTORY" \
        --grpc-web_out=import_style=typescript,mode=grpcwebtext:"$FRONTEND_OUTPUT_DIRECTORY" \
        "$filename"
done
