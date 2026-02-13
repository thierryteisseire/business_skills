#!/bin/bash

# Sales Operations Setup Skill Installer
# Compatible with: npx skills add https://github.com/thierryteisseire/business_skills

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Detect OS
detect_os() {
    case "$(uname -s)" in
        Darwin*)    echo "macos" ;;
        Linux*)     echo "linux" ;;
        CYGWIN*|MINGW*|MSYS*) echo "windows" ;;
        *)          echo "unknown" ;;
    esac
}

# Main installation function
install_skill() {
    echo ""
    log_info "Installing Sales Operations Setup Skill..."
    echo "================================================"
    echo ""

    # Determine home directory
    if [ -z "$HOME" ]; then
        HOME="$USERPROFILE"  # Windows fallback
    fi

    # Set installation paths
    AGENTS_SKILLS_DIR="$HOME/.agents/skills"
    CLAUDE_SKILLS_DIR="$HOME/.claude/skills"
    SKILL_NAME="sales-operations-setup"
    TARGET_DIR="$AGENTS_SKILLS_DIR/$SKILL_NAME"
    SYMLINK_PATH="$CLAUDE_SKILLS_DIR/$SKILL_NAME"

    # Get the directory where this script is located
    SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

    log_info "Step 1/4: Creating directories..."

    # Create .agents/skills directory
    if [ ! -d "$AGENTS_SKILLS_DIR" ]; then
        mkdir -p "$AGENTS_SKILLS_DIR"
        log_success "Created $AGENTS_SKILLS_DIR"
    else
        log_info "Directory already exists: $AGENTS_SKILLS_DIR"
    fi

    # Create .claude/skills directory
    if [ ! -d "$CLAUDE_SKILLS_DIR" ]; then
        mkdir -p "$CLAUDE_SKILLS_DIR"
        log_success "Created $CLAUDE_SKILLS_DIR"
    else
        log_info "Directory already exists: $CLAUDE_SKILLS_DIR"
    fi

    log_info ""
    log_info "Step 2/4: Copying skill files..."

    # Copy skill files
    if [ -d "$TARGET_DIR" ]; then
        log_warning "Skill already exists at $TARGET_DIR, updating..."
        rm -rf "$TARGET_DIR"
    fi

    cp -R "$SCRIPT_DIR" "$TARGET_DIR"
    log_success "Copied skill files to $TARGET_DIR"

    log_info ""
    log_info "Step 3/4: Creating symlink..."

    # Create symlink
    if [ -L "$SYMLINK_PATH" ]; then
        # Symlink exists, check if it points to the right place
        CURRENT_TARGET=$(readlink "$SYMLINK_PATH")
        if [ "$CURRENT_TARGET" = "$TARGET_DIR" ]; then
            log_info "Symlink already exists and is correct"
        else
            log_warning "Existing symlink points to different location, updating..."
            rm "$SYMLINK_PATH"
            ln -s "$TARGET_DIR" "$SYMLINK_PATH"
            log_success "Updated symlink"
        fi
    elif [ -e "$SYMLINK_PATH" ]; then
        log_warning "$SYMLINK_PATH exists but is not a symlink"
        log_warning "Please manually remove it and reinstall"
    else
        ln -s "$TARGET_DIR" "$SYMLINK_PATH"
        log_success "Created symlink at $SYMLINK_PATH"
    fi

    log_info ""
    log_info "Step 4/4: Verifying installation..."

    # Verify required files
    REQUIRED_FILES=(
        "SKILL.md"
        "README.md"
        "skill.json"
        "references/lead-scoring-frameworks.md"
        "references/pipeline-stages.md"
        "references/sales-metrics-kpis.md"
        "templates/forecasting-model.md"
    )

    ALL_FILES_EXIST=true
    for FILE in "${REQUIRED_FILES[@]}"; do
        if [ -f "$TARGET_DIR/$FILE" ]; then
            log_success "Found $FILE"
        else
            log_error "Missing $FILE"
            ALL_FILES_EXIST=false
        fi
    done

    echo ""
    echo "================================================"
    if [ "$ALL_FILES_EXIST" = true ]; then
        log_success "Installation completed successfully!"
        echo ""
        log_info "📚 What you can do now:"
        echo ""
        echo "1. Open Claude Code"
        echo "2. Use the skill with: /sales-operations-setup"
        echo "3. Or invoke via the Skill tool"
        echo ""
        log_info "📖 Documentation:"
        echo "   $TARGET_DIR/README.md"
        echo ""
        log_info "💡 Example commands:"
        echo "   • Set up lead management for my B2B SaaS"
        echo "   • Create a revenue forecasting model"
        echo "   • Build a sales playbook for enterprise sales"
        echo "   • Design a sales metrics dashboard"
        echo ""
    else
        log_error "Installation completed with warnings"
        log_warning "Some files are missing. Please check the installation."
        exit 1
    fi
}

# Run installation
install_skill
