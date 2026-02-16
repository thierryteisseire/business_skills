#!/usr/bin/env node

/**
 * Goals & KPIs Skill for Claude Code
 *
 * Strategic goal-setting and KPI design assistant — OKR, SMART,
 * Balanced Scorecard, V2MOM, 4DX, and EOS Rocks frameworks.
 *
 * @author Thierry Teisseire
 * @license MIT
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Get the skill metadata
 */
export function getSkillInfo() {
    const packageJson = JSON.parse(
        readFileSync(join(__dirname, 'package.json'), 'utf8')
    );

    return {
        name: 'goals-and-kpis',
        version: packageJson.version,
        description: packageJson.description,
        author: packageJson.author,
        skillPath: __dirname,
        files: {
            skill: join(__dirname, 'SKILL.md'),
            readme: join(__dirname, 'README.md'),
            references: join(__dirname, 'references'),
            templates: join(__dirname, 'templates')
        }
    };
}

/**
 * Get installation paths
 */
export function getInstallPaths() {
    const homeDir = process.env.HOME || process.env.USERPROFILE;

    return {
        agentsSkillsDir: join(homeDir, '.agents', 'skills', 'goals-and-kpis'),
        claudeSkillsDir: join(homeDir, '.claude', 'skills'),
        symlinkPath: join(homeDir, '.claude', 'skills', 'goals-and-kpis')
    };
}

/**
 * Display skill information
 */
export function displayInfo() {
    const info = getSkillInfo();

    console.log('\n🎯 Goals & KPIs Skill');
    console.log('================================\n');
    console.log(`Version: ${info.version}`);
    console.log(`Author: ${info.author}`);
    console.log(`\n${info.description}\n`);
    console.log('📚 Components:');
    console.log('  • 7 goal-setting frameworks (OKR, SMART, BSC, V2MOM, 4DX, EOS, Goal Map)');
    console.log('  • KPI libraries for Sales, Marketing, Product, Technology, CS, Finance, HR');
    console.log('  • Goal Map with Functional View + Metrics Map');
    console.log('  • Goal cascade & alignment tools');
    console.log('  • Dashboard blueprints with RAG thresholds');
    console.log('  • Review cadence agendas & scoring guides');
    console.log('  • Leading vs. lagging indicator reference');
    console.log('\n💡 Usage: /goals-and-kpis\n');
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    displayInfo();
}

export default {
    getSkillInfo,
    getInstallPaths,
    displayInfo
};
