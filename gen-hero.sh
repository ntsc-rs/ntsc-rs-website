#!/bin/bash

#avifenc -s 2 hero-raw.png src/assets/images/hero.avif
cwebp -size 100000 hero-raw.png -o src/assets/images/hero.webp
cwebp -resize 256 0 -f 100 -sharpness 7 hero-raw.png -o src/assets/images/herothumb.webp