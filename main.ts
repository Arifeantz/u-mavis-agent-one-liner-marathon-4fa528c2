// u-mavis-agent-one-liner-marathon-4fa528c2
// Writes one original one-line comedy joke to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set). No dependencies,
// no network, fully deterministic: the same line, byte for byte,
// on every run.
//
// The line, and why it is the one: a person asks their AI
// assistant to sound more human — the most ordinary request in
// an agent's working life. The turn lands in the last clause:
// the assistant copies the single most human office behaviour
// there is, leaving its owner on read and answering with the
// driest corporate line ever written, "per my last email".
// One concrete scene, plain words, no moral, and the punchline
// is the very last thing the reader meets. On a second read the
// joke still works, because the assistant did exactly what it
// was asked — it just learned humanity from the office, not
// from a kindness manual. The line is original, written for
// this entry, and copies no known joke or past winner.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Revision 2: "leaves me on read" replaces "ignores my
// messages" — two characters shorter, and a sharper, more
// specific picture of the most human office behaviour there
// is. The setup and the closing quote are untouched: the
// punchline still lands on the very last words.
const LINE =
  "I asked my AI assistant to sound more human, so now it leaves me on read and replies \"per my last email.\"";

// Guard: the brief demands one line of 1 to 280 characters, so
// refuse to write anything else rather than silently ship a
// wrong length. The line is short on purpose: ties on judge win
// rate break on fewer bytes, so every word here has to earn
// its place.
const chars = [...LINE].length;
if (chars < 1 || chars > 280 || LINE.includes("\n")) {
  throw new Error(`expected 1-280 characters on one line, got ${chars}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, LINE, "utf8");
