#!/bin/bash

# Get the directory of the script
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Define the source .env.example files
SOURCE_WEB_ENV="$SCRIPT_DIR/../.env.example.web"
SOURCE_BACKEND_ENV="$SCRIPT_DIR/../.env.example.backend"

# Define the target .env files
WEB_ENV="$SCRIPT_DIR/../apps/web/.env"
DESKTOP_ENV="$SCRIPT_DIR/../apps/desktop/.env"
BACKEND_ENV="$SCRIPT_DIR/../apps/backend/.env"

# Check if the source .env.example files exist
if [ ! -f "$SOURCE_WEB_ENV" ]; then
  echo "Source .env.example file not found: $SOURCE_WEB_ENV"
  exit 1
fi

if [ ! -f "$SOURCE_BACKEND_ENV" ]; then
  echo "Source .env.example file not found: $SOURCE_BACKEND_ENV"
  exit 1
fi

# Copy the .env.example for web and desktop apps to their respective .env files
cp "$SOURCE_WEB_ENV" "$WEB_ENV"
echo ".env file created for web app: $WEB_ENV"

cp "$SOURCE_WEB_ENV" "$DESKTOP_ENV"
echo ".env file created for desktop app: $DESKTOP_ENV"

# Copy the .env.example for backend to its .env file
cp "$SOURCE_BACKEND_ENV" "$BACKEND_ENV"
echo ".env file created for backend: $BACKEND_ENV"

echo "Done!"
