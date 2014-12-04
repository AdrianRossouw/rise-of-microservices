.PHONY: dev clean build push deploy

all: clean build push deploy

install:
	npm install
	bower install
	webpack -p

clean:
	rm -rf dist

dev:
	webpack-dev-server --colors

build:
	webpack -p

push:
	git add dist
	git commit -m 'deploy to gh-pages'

deploy:
	git subtree push --prefix dist origin gh-pages  
