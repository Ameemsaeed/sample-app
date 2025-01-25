#!/bin/bash
port=8080
for dir in */; do
  dir=${dir%/}

  docker run -d -p $((port++)):80 --name "${dir}" "${dir}-app"
done
