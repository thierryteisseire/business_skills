#!/usr/bin/env node

/**
 * Sales Operations Setup Skill for Claude Code
 *
 * A comprehensive framework for implementing sales operations infrastructure
 * including lead management, forecasting, enablement, and analytics.
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
    name: 'sales-operations-setup',
    version: packageJson.version,
    description: packageJson.description,
    author: packageJson.author,
    skillPath: __dirname,
    files: {
      skill: join(__dirname, 'SKILL.md'),
      readme: join(__dirname, 'README.md'),
      references: join(__dirname, 'references'),
      templates: join(__dirname, 'templates'),
      examples: join(__dirname, 'examples')
    }
  };
}

/**
 * Get installation paths
 */
export function getInstallPaths() {
  const homeDir = process.env.HOME || process.env.USERPROFILE;

  return {
    agentsSkillsDir: join(homeDir, '.agents', 'skills', 'sales-operations-setup'),
    claudeSkillsDir: join(homeDir, '.claude', 'skills'),
    symlinkPath: join(homeDir, '.claude', 'skills', 'sales-operations-setup')
  };
}

/**
 * Display skill information
 */
export function displayInfo() {
  const info = getSkillInfo();

  console.log('\n🎯 Sales Operations Setup Skill');
  console.log('================================\n');
  console.log(`Version: ${info.version}`);
  console.log(`Author: ${info.author}`);
  console.log(`\n${info.description}\n`);
  console.log('📚 Components:');
  console.log('  • Lead scoring frameworks (BANT, MEDDIC, CHAMP)');
  console.log('  • Pipeline stage definitions');
  console.log('  • 32+ sales metrics and KPIs');
  console.log('  • Revenue forecasting models');
  console.log('  • Sales enablement templates');
  console.log('\n💡 Usage: /sales-operations-setup\n');
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
