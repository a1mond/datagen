# Datagen

The greatest data generation tool (probably)

## How to run
The application requires [additional module](https://github.com/a1mond/datagen-backend) to be cloned into the directory. Down below is step-by-step guide for starting.

Prerequisites:
- Installed `docker`

```bash
# clone 'datagen' project
git clone https://github.com/a1mond/datagen.git

# open the folder
cd datagen

# clone additional module
git clone https://github.com/a1mond/datagen-backend.git

# start it, using docker
docker-compose up
```

## What it actually does
The `codegen` part is generating data, based on the pattern the user has defined. The pattern could be a JSON object, an SQL query, or any other string. As the pattern is defined, place the dynamic variables into the pattern created. Those variables will be replaced with an actual data later, and repeated as many times as you would love :)

![App screenshot](https://i.ibb.co/BsFsWmX/Screenshot-2022-04-01-at-00-27-16.png)

## Plans
In the future plan, there is an idea to implement a full-featured automatic SQL generation tool, which, based on the database schema, will generate data accordingly. 
