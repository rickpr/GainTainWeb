---
envoy: docker run -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro --network=host envoyproxy/envoy:v1.22.0
backend: cd backend && ruby server.rb
frontend: cd frontend && docker run -p 80:80 -v $(pwd):/var/www/html gaintain
