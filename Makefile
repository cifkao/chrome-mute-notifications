ICONS=logo-128.png logo-48.png icon-on-38.png icon-on-19.png icon-off-38.png icon-off-19.png

zip: dist/notifications.zip

dist/notifications.zip: manifest.json background.js $(ICONS)
	mkdir -p dist
	cp -t dist $^
	cd dist; rm -f notifications.zip; zip notifications.zip *

clean:
	rm -rf dist
