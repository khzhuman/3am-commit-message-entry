import { mkdirSync, writeFileSync } from 'node:fs';

function resolveOutputPath() {
  return process.env.ENTRY_OUT ?? '/output/entry.txt';
}

const entry = "revert: the fix. the fix was the bug. the bug was me. merging anyway, it's 3 AM";
const output = resolveOutputPath();
const separator = output.lastIndexOf('/');
if (separator >= 0) {
  mkdirSync(output.slice(0, separator) || '/', { recursive: true });
}
writeFileSync(output, entry, 'utf8');
