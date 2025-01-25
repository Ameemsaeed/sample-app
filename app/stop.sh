#!/bin/bash
for dir in */; do
  dir=${dir%/}

  docker stop "${dir}"> /dev/null 2>&1
  docker rm "${dir}"
done
