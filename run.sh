#!/bin/bash
pkill -f test.py


python flask/test.py & npm start --prefix next/electron-next-skeleton/
