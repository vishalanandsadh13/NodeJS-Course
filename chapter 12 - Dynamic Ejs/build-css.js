const tailwind = require('tailwindcss');
const postcss = require('postcss');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'views', 'input.css');
const outputPath = path.join(__dirname, 'public', 'output.css');

const input = fs.readFileSync(inputPath, 'utf8');

postcss([tailwind])
  .process(input, { from: inputPath, to: outputPath })
  .then(result => {
    fs.writeFileSync(outputPath, result.css);
    console.log('CSS compiled successfully');
  })
  .catch(err => {
    console.error('Error compiling CSS:', err);
    process.exit(1);
  });
