#!/bin/bash

# Navigate to the directory of the script
cd "$(dirname "$0")"

# Iterate through each directory
for dir in */; do
    # Check if it's a directory
    if [ -d "$dir" ]; then
        # Remove all files in the directory
        rm -rf "$dir"*
    fi
done