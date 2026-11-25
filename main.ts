// A single sentence that replaces the whole meeting — no agenda, no follow-up, no survivors.
import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, no context, no explanation — the line that kills the meeting.
const LINE = "This meeting could have been an email — and the email could have been nothing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE);
