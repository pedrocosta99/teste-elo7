all: images maestro

images:
	docker build -t teste-copia landing-copycat
	docker build -t teste-redesign landing-redesign

maestro:
	docker-compose up