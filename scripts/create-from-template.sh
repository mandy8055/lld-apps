#!/bin/bash

# Check if a project name is provided
if [ -z "$1" ]; then
    echo "Please provide a project name"
    exit 1
fi

PROJECT_NAME=$1
TEMPLATE_NAME="template"
TEMPLATE_PATH="apps/$TEMPLATE_NAME"
PROJECT_PATH="apps/$PROJECT_NAME"

# Check if template exists
if [ ! -d "$TEMPLATE_PATH" ]; then
    echo "Template $TEMPLATE_NAME does not exist"
    exit 1
fi

# Check if project already exists
if [ -d "$PROJECT_PATH" ]; then
    echo "Project $PROJECT_NAME already exists"
    exit 1
fi

# Copy template
cp -R "$TEMPLATE_PATH" "$PROJECT_PATH"

# Update package.json for the new project
cd "$PROJECT_PATH"

# Use jq to update package.json
TEMP_FILE=$(mktemp)
jq --arg name "$PROJECT_NAME" '
    # Set the project name
    .name = $name
' package.json > "$TEMP_FILE"
mv "$TEMP_FILE" package.json

# Go back to root directory
cd ../..

# Install dependencies
pnpm install

echo "Project $PROJECT_NAME created successfully!"
echo "To get started:"
echo "  cd apps/$PROJECT_NAME"
echo "  pnpm dev"