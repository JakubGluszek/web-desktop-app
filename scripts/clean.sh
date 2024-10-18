#!/bin/bash

# Remove all node_modules directories recursively
echo "Removing all node_modules directories..."
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +

# Remove all dist directories recursively
echo "Removing all dist directories..."
find . -name 'dist' -type d -prune -exec rm -rf '{}' +

# Remove all .turbo directories recursively
echo "Removing all .turbo directories..."
find . -name '.turbo' -type d -prune -exec rm -rf '{}' +

# Remove the first out directory found
echo "Removing the out directory..."
DIST_ELECTRON_DIR=$(find . -name 'out' -type d | head -n 1)
if [ -n "$DIST_ELECTRON_DIR" ]; then
  rm -rf "$DIST_ELECTRON_DIR"
  echo "Removed: $DIST_ELECTRON_DIR"
else
  echo "No out directory found."
fi

# Remove the first build directory found
echo "Removing the build directory..."
RELEASES_DIR=$(find . -name 'build' -type d | head -n 1)
if [ -n "$RELEASES_DIR" ]; then
  rm -rf "$RELEASES_DIR"
  echo "Removed: $RELEASES_DIR"
else
  echo "No build directory found."
fi

echo "Cleanup complete!"
