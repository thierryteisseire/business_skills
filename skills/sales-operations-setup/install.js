#!/usr/bin/env node

/**
 * Automatic installation script for Sales Operations Setup skill
 * Installs the skill to Claude Code's skills directory
 */

import { existsSync, mkdirSync, cpSync, symlinkSync, readlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { homedir } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

function logInfo(message) {
  log(`ℹ️  ${message}`, 'blue');
}

/**
 * Main installation function
 */
async function install() {
  try {
    log('\n🎯 Installing Sales Operations Setup Skill...', 'bright');
    log('='.repeat(50) + '\n');

    const homeDir = homedir();
    const agentsSkillsDir = join(homeDir, '.agents', 'skills');
    const claudeSkillsDir = join(homeDir, '.claude', 'skills');
    const targetDir = join(agentsSkillsDir, 'sales-operations-setup');
    const symlinkPath = join(claudeSkillsDir, 'sales-operations-setup');

    // Step 1: Create .agents/skills directory
    logInfo('Step 1/4: Creating directories...');
    if (!existsSync(agentsSkillsDir)) {
      mkdirSync(agentsSkillsDir, { recursive: true });
      logSuccess(`Created ${agentsSkillsDir}`);
    } else {
      logInfo(`Directory already exists: ${agentsSkillsDir}`);
    }

    if (!existsSync(claudeSkillsDir)) {
      mkdirSync(claudeSkillsDir, { recursive: true });
      logSuccess(`Created ${claudeSkillsDir}`);
    } else {
      logInfo(`Directory already exists: ${claudeSkillsDir}`);
    }

    // Step 2: Copy skill files
    logInfo('\nStep 2/4: Copying skill files...');
    if (existsSync(targetDir)) {
      logWarning(`Skill already exists at ${targetDir}, updating...`);
    }

    cpSync(__dirname, targetDir, {
      recursive: true,
      force: true,
      filter: (src) => {
        // Exclude node_modules and package files
        const exclude = ['node_modules', 'package-lock.json', '.DS_Store'];
        return !exclude.some(pattern => src.includes(pattern));
      }
    });
    logSuccess(`Copied skill files to ${targetDir}`);

    // Step 3: Create symlink
    logInfo('\nStep 3/4: Creating symlink...');
    if (existsSync(symlinkPath)) {
      try {
        const linkTarget = readlinkSync(symlinkPath);
        if (linkTarget === targetDir) {
          logInfo('Symlink already exists and is correct');
        } else {
          logWarning('Existing symlink points to different location, updating...');
          // Remove and recreate
          try {
            const { unlinkSync } = await import('fs');
            unlinkSync(symlinkPath);
            symlinkSync(targetDir, symlinkPath);
            logSuccess('Updated symlink');
          } catch (err) {
            logWarning(`Could not update symlink: ${err.message}`);
          }
        }
      } catch (err) {
        // Not a symlink, it's a directory
        logWarning(`${symlinkPath} exists but is not a symlink`);
        logInfo('Please manually remove it and reinstall');
      }
    } else {
      symlinkSync(targetDir, symlinkPath);
      logSuccess(`Created symlink at ${symlinkPath}`);
    }

    // Step 4: Verify installation
    logInfo('\nStep 4/4: Verifying installation...');
    const requiredFiles = [
      'SKILL.md',
      'README.md',
      'references/lead-scoring-frameworks.md',
      'references/pipeline-stages.md',
      'references/sales-metrics-kpis.md',
      'templates/forecasting-model.md'
    ];

    let allFilesExist = true;
    for (const file of requiredFiles) {
      const filePath = join(targetDir, file);
      if (existsSync(filePath)) {
        logSuccess(`Found ${file}`);
      } else {
        logError(`Missing ${file}`);
        allFilesExist = false;
      }
    }

    // Installation complete
    log('\n' + '='.repeat(50));
    if (allFilesExist) {
      log('\n🎉 Installation completed successfully!', 'green');
      log('\n📚 What you can do now:', 'bright');
      log('\n1. Open Claude Code');
      log('2. Use the skill with: /sales-operations-setup');
      log('3. Or invoke via the Skill tool\n');
      log('📖 Documentation:', 'bright');
      log(`   ${join(targetDir, 'README.md')}\n`);
      log('💡 Example commands:', 'bright');
      log('   • "Set up lead management for my B2B SaaS"');
      log('   • "Create a revenue forecasting model"');
      log('   • "Build a sales playbook for enterprise sales"');
      log('   • "Design a sales metrics dashboard"\n');
    } else {
      logError('\nInstallation completed with warnings');
      logWarning('Some files are missing. Please check the installation.');
    }

  } catch (error) {
    logError(`\nInstallation failed: ${error.message}`);
    logError(error.stack);
    process.exit(1);
  }
}

// Run installation
install().catch(error => {
  logError(`Fatal error: ${error.message}`);
  process.exit(1);
});
