#!/bin/bash

export PGPASSWORD='node_password'

database="blogdb"

echo = "Configuring database: $database"

dropdb -U node_user blogdb
createdb -U node_user blogdb

psql -U node_user blogdb < ./bin/sql/blog.sql

echo = "$database configured"