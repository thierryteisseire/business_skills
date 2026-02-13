#!/bin/bash

# Business Skills Installer
# Usage: curl -fsSL https://raw.githubusercontent.com/thierryteisseire/business_skills/main/install-skill.sh | bash -s SKILL_NAME

set -e

SKILL_NAME="${1:-sales-operations-setup}"
REPO_URL="https://github.com/thierryteisseire/business_skills.git"
BRANCH="main"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
log_success() { echo -e "${GREEN}✅ $1${NC}"; }
log_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }

echo ""
log_info "Business Skills Installer"
echo "================================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    log_warning "git is not installed. Please install git first."
    exit 1
fi

# Determine home directory
HOME="${HOME:-$USERPROFILE}"
TEMP_DIR=$(mktemp -d)
AGENTS_SKILLS_DIR="$HOME/.agents/skills"
CLAUDE_SKILLS_DIR="$HOME/.claude/skills"

log_info "Installing skill: $SKILL_NAME"
log_info "Repository: $REPO_URL"
echo ""

# Clone repository to temp directory
log_info "Cloning repository..."
git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$TEMP_DIR" &> /dev/null

SKILL_SOURCE="$TEMP_DIR/skills/$SKILL_NAME"

if [ ! -d "$SKILL_SOURCE" ]; then
    log_warning "Skill '$SKILL_NAME' not found in repository"
    log_info "Available skills:"
    ls -1 "$TEMP_DIR/skills" 2>/dev/null || echo "  (none found)"
    rm -rf "$TEMP_DIR"
    exit 1
fi

log_success "Repository cloned"

# Run the skill's install script if it exists
if [ -f "$SKILL_SOURCE/install.sh" ]; then
    log_info "Running skill installation script..."
    cd "$SKILL_SOURCE"
    bash install.sh
else
    # Manual installation
    log_info "Installing skill manually..."

    mkdir -p "$AGENTS_SKILLS_DIR"
    mkdir -p "$CLAUDE_SKILLS_DIR"

    TARGET_DIR="$AGENTS_SKILLS_DIR/$SKILL_NAME"
    SYMLINK_PATH="$CLAUDE_SKILLS_DIR/$SKILL_NAME"

    # Copy files
    if [ -d "$TARGET_DIR" ]; then
        rm -rf "$TARGET_DIR"
    fi
    cp -R "$SKILL_SOURCE" "$TARGET_DIR"
    log_success "Copied skill files"

    # Create symlink
    if [ -L "$SYMLINK_PATH" ]; then
        rm "$SYMLINK_PATH"
    fi
    ln -s "$TARGET_DIR" "$SYMLINK_PATH"
    log_success "Created symlink"
fi

# Cleanup
rm -rf "$TEMP_DIR"

echo ""
log_success "Installation complete!"
log_info "Use the skill in Claude Code with: /$SKILL_NAME"
echo ""
