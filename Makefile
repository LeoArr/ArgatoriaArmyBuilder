run:
	npm run dev

build:
	npm run build

deploy: build
	firebase deploy --only hosting