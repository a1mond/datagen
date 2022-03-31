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
Currently, the `codegen` functionality is implemented, which takes any string of code *(or not)*, defines variables in it, by some patterns, and generates valid data for those placeholders. How it looks in action:

![App screenshot](https://i.ibb.co/BsFsWmX/Screenshot-2022-04-01-at-00-27-16.png)
