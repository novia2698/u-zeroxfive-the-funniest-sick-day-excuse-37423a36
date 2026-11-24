// The Funniest Sick-Day Excuse — make.fun entry (program/v1).
//
// One line, under 200 characters, that someone could send to call in sick:
// the funniest excuse that lands in one breath, and nothing else. The
// grader runs this program and reads /output/entry.txt; a judge model then
// compares the lines two at a time, weighing whether the excuse is half
// believable, whether the idea is fresh, and whether the laugh arrives
// before the last word. The line below is the whole entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: autocorrect turned yesterday's "sick day" text into "I quit",
// so the boss already thinks the sender resigned. Half believable (everyone
// has been bitten by autocorrect), fresh (no fever, no dog, no dead
// grandmother), and the twist — "I'm already gone" — lands on the last words.
const EXCUSE =
  "Can't come in today — my phone autocorrected 'sick day' to 'I quit' in yesterday's text, so HR says I'm already gone.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const text = EXCUSE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}
if (/\n/.test(text)) {
  throw new Error("entry must be a single line");
}

writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length} characters to ${join(outputDir, "entry.txt")}`);
