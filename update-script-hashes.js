import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDir = path.join(__dirname, 'build');
const jsDir = path.join(buildDir, 'static', 'js');
const cssDir = path.join(buildDir, 'static', 'css');

// Read the contents of the js directory
const files = fs.readdirSync(jsDir);

// Find the main JS file (it should be the largest one)
const mainJs = files
  .filter(file => file.endsWith('.js') && !file.endsWith('.chunk.js'))
  .sort((a, b) => fs.statSync(path.join(jsDir, b)).size - fs.statSync(path.join(jsDir, a)).size)[0];

if (!mainJs) {
  console.error('Could not find main JS file');
  process.exit(1);
}

// Define the source and target paths
const sourcePath = path.join(jsDir, mainJs);
const targetPath = path.join(jsDir, 'main.js');

// Copy the file
fs.copyFileSync(sourcePath, targetPath);

// Read the contents of the css directory
const cssFiles = fs.readdirSync(cssDir);
const mainCss = cssFiles.find(file => file.endsWith('.css'));

if (mainCss) {
  const sourceCssPath = path.join(cssDir, mainCss);
  const targetCssPath = path.join(cssDir, 'main.css');
  fs.copyFileSync(sourceCssPath, targetCssPath);
  console.log('Successfully created a copy of', mainCss, 'as main.css');
}


console.log('Successfully created a copy of', mainJs, 'as main.js');
