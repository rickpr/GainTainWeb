# Setup
First, install [overmind](https://github.com/DarthSim/overmind).
## Backend
Install Ruby 3.2.0. I recommend [rbenv](https://github.com/rbenv/rbenv) with `ruby-build`.

``` shell
cd frontend
bundle
```

## Frontend
The frontend is all static HTML. For the local development server, install Python 3.

## Envoy
Docker is required.

## GRPC
To make GRPC changes, you need:
- `protoc`
- `grpc-web`
- GRPC ruby gems should be installed with backend.

# Starting the server
```
overmind s
```

# Saving updates
When changing gRPC protocol buffers, use `scripts/update_grpc.sh`
To update the frontend:

``` shell
cd frontend
npm run build
```
