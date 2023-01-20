#!/usr/bin/env sh

set -euxo

cd "$(dirname "$0")"
for filename in ../proto/*.proto
do
    # Backend
    grpc_tools_ruby_protoc -I ../proto \
        --ruby_out=../backend/grpc \
        --grpc_out=../backend/grpc \
        "$filename"
    # Frontend
    protoc -I ../proto \
        --js_out=import_style=commonjs:../frontend/grpc \
        --grpc-web_out=import_style=commonjs,mode=grpcwebtext:../frontend/grpc \
        "$filename"
done
