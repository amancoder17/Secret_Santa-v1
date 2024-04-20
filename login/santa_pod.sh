#!/bin/bash


podman pod create --name santapod1 \
       	-p 3001:3000 -p 9003:9002 

podman run -idt \
       	--pod santapod1 \
       	--name santacontfront2 santafront

podman run -itd \
       	--pod santapod1\
       	-v $(pwd):/app \
       	--env DATABASE_URL=\
       	--name santacontback santaback 
