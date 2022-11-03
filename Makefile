all: images containers

images:
	docker build landing-copycat -t teste-copia
	docker build landing-redesign -t teste-redesign 

containers:
	docker run -d --network=host teste-copia
	docker run -d --network=host teste-redesign

maestro:
	docker-compose up

kill-images:
	docker rm -f (docker ps -aq)
