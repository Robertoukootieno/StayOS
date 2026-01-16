#!/bin/bash

# StayOS API - SDK Generation Script
# Generates client libraries for multiple languages

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SPEC_FILE="docs/api/openapi-bundled.yaml"
SDK_DIR="sdks"
GENERATOR_VERSION="latest"

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║         StayOS API - SDK Generation Tool                  ║${NC}"
echo -e "${BLUE}║         Version 4.0.0 | 202 Endpoints                      ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Check if spec file exists
if [ ! -f "$SPEC_FILE" ]; then
    echo -e "${RED}❌ Error: OpenAPI spec not found at $SPEC_FILE${NC}"
    echo -e "${YELLOW}💡 Run 'npm run api:bundle' first${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Found OpenAPI spec: $SPEC_FILE${NC}"
echo ""

# Function to generate SDK
generate_sdk() {
    local lang=$1
    local generator=$2
    local output_dir="$SDK_DIR/$lang"
    local config_file="$SDK_DIR/$lang/config.yaml"
    
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${YELLOW}📦 Generating $lang SDK...${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    
    # Create output directory
    mkdir -p "$output_dir"
    
    # Check if config exists
    if [ -f "$config_file" ]; then
        echo -e "${GREEN}✅ Using config: $config_file${NC}"
        config_arg="-c $config_file"
    else
        echo -e "${YELLOW}⚠️  No config file found, using defaults${NC}"
        config_arg=""
    fi
    
    # Generate SDK
    npx @openapitools/openapi-generator-cli generate \
        -i "$SPEC_FILE" \
        -g "$generator" \
        -o "$output_dir" \
        $config_arg \
        --skip-validate-spec \
        --global-property=apiTests=false,modelTests=false
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ $lang SDK generated successfully!${NC}"
        echo -e "${GREEN}   Location: $output_dir${NC}"
    else
        echo -e "${RED}❌ Failed to generate $lang SDK${NC}"
        return 1
    fi
    
    echo ""
}

# Parse command line arguments
if [ $# -eq 0 ]; then
    echo -e "${YELLOW}Usage: $0 [all|typescript|python|java|go|csharp|php|ruby]${NC}"
    echo ""
    echo -e "${BLUE}Available SDKs:${NC}"
    echo "  - typescript  (TypeScript/JavaScript with Axios)"
    echo "  - python      (Python with asyncio)"
    echo "  - java        (Java with OkHttp)"
    echo "  - go          (Go)"
    echo "  - csharp      (C# .NET Standard 2.0)"
    echo "  - php         (PHP)"
    echo "  - ruby        (Ruby)"
    echo "  - all         (Generate all SDKs)"
    echo ""
    exit 1
fi

# Generate requested SDKs
case "$1" in
    typescript)
        generate_sdk "typescript" "typescript-axios"
        ;;
    python)
        generate_sdk "python" "python"
        ;;
    java)
        generate_sdk "java" "java"
        ;;
    go)
        generate_sdk "go" "go"
        ;;
    csharp)
        generate_sdk "csharp" "csharp"
        ;;
    php)
        generate_sdk "php" "php"
        ;;
    ruby)
        generate_sdk "ruby" "ruby"
        ;;
    all)
        echo -e "${BLUE}🚀 Generating all SDKs...${NC}"
        echo ""
        generate_sdk "typescript" "typescript-axios"
        generate_sdk "python" "python"
        generate_sdk "java" "java"
        generate_sdk "go" "go"
        generate_sdk "csharp" "csharp"
        generate_sdk "php" "php"
        generate_sdk "ruby" "ruby"
        ;;
    *)
        echo -e "${RED}❌ Unknown SDK: $1${NC}"
        echo -e "${YELLOW}Run without arguments to see available options${NC}"
        exit 1
        ;;
esac

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ SDK Generation Complete!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${YELLOW}📚 Next Steps:${NC}"
echo "  1. Review generated SDKs in the sdks/ directory"
echo "  2. Test the SDKs with your application"
echo "  3. Publish to package registries (npm, PyPI, Maven, etc.)"
echo ""

