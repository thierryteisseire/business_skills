#!/usr/bin/env node

/**
 * Automatic installation script for Goals & KPIs skill
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
        log('\n🎯 Installing Goals & KPIs Skill...', 'bright');
        log('='.repeat(50) + '\n');

        const homeDir = homedir();
        const agentsSkillsDir = join(homeDir, '.agents', 'skills');
        const claudeSkillsDir = join(homeDir, '.claude', 'skills');
        const targetDir = join(agentsSkillsDir, 'goals-and-kpis');
        const symlinkPath = join(claudeSkillsDir, 'goals-and-kpis');

        // Step 1: Create directories
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
            'CHANGELOG.md',
            'references/kpi-library.md',
            'references/framework-comparison.md',
            'references/leading-vs-lagging.md',
            'references/small-company-quick-start.md',
            'references/okr-anti-patterns.md',
            'references/case-studies.md',
            'references/tool-integrations.md',
            'templates/okr-template.md',
            'templates/review-agendas.md',
            'templates/goal-map.md'
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
            log('2. Use the skill with: /goals-and-kpis');
            log('3. Or invoke via the Skill tool\n');
            log('📖 Documentation:', 'bright');
            log(`   ${join(targetDir, 'README.md')}\n`);
            log('💡 Example commands:', 'bright');
            log('   • "Set Q2 OKRs for my 30-person B2B SaaS startup"');
            log('   • "Design a KPI dashboard for our marketing team"');
            log('   • "Cascade our $10M ARR goal into team objectives"');
            log('   • "Run a goal-setting workshop for our leadership offsite"\n');
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
