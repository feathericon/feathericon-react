const fs = require('fs');
const glob = require('glob');
const uppercamelcase = require('uppercamelcase');
const path = require('path');

const rootDir = path.join(__dirname, '..');

glob(`${rootDir}/src/svg/**.svg`, (err, icons) => {
  fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8');

  icons.forEach(i => {
    const svg = fs.readFileSync(i, 'utf-8');
    const id = path.basename(i, '.svg');
    const ComponentName = uppercamelcase(id);


    const exportString = `export ${ComponentName} from './icons/${id}';\r\n`;
    fs.appendFileSync(
      path.join(rootDir, 'src', 'index.js'),
      exportString,
      'utf-8'
    );

    const exportTypeString = `export const ${ComponentName}: Icon;\n`;
    fs.appendFileSync(
      path.join(rootDir, 'src', 'index.d.ts'),
      exportTypeString,
      'utf-8'
    );
  });
});
