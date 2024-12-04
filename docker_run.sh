#!/usr/bin/env bash
docker build -t tesla-vin .
docker run -p 3000:3000 tesla-vin