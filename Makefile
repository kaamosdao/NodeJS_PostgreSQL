setup:
	npm install

start:
	npm start

dev:
	npm run dev

push:
	git add .
	git commit -m "$(ARGS)"
	git push
