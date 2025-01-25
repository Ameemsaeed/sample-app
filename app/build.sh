#!/bin/bash
for dir in */; do
  dir=${dir%/}

  # Get the current timestamp in the format YYYYMMDD-HHMMSS
  timestamp=$(date +"%Y%m%d-%H%M%S")

  # Build the Docker image with a tag that includes the directory name and timestamp
  docker build -t "${dir}-app:${timestamp}" -t "${dir}-app:latest" "${dir}"
done
