#!/bin/bash

# Fix URI format errors in OpenAPI spec
# Replace relative paths with absolute URIs

FILE="docs/api/openapi.yaml"

# Backup original file
cp "$FILE" "$FILE.backup"

# Fix instance fields in error responses (remaining ones)
sed -i 's|instance: "/|instance: "https://api.stayos.com/v1/|g' "$FILE"

# Fix self link examples
sed -i 's|self: "/|self: "https://api.stayos.com/v1/|g' "$FILE"
sed -i 's|next: "/|next: "https://api.stayos.com/v1/|g' "$FILE"

echo "✅ Fixed URI format errors in $FILE"
echo "📦 Backup saved to $FILE.backup"

