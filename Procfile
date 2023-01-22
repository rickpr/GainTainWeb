envoy: docker run -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro --network=host envoyproxy/envoy:v1.22.0
backend: cd backend && zsh -c 'ruby server.rb'
frontend: python3 -m http.server --directory frontend
