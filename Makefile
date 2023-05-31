run:
	npm run dev

start: run

build:
	npm run build

deploy: build
	firebase deploy --only hosting