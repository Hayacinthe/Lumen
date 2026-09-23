const WORDS = [
  "amber", "anchor", "basin", "cedar", "cipher", "coast", "copper", "delta",
  "ember", "field", "flint", "forge", "grove", "harbor", "hearth", "inlet",
  "iron", "lantern", "ledger", "lumen", "maple", "meadow", "mirror", "north",
  "olive", "paper", "pebble", "quill", "ridge", "river", "sable", "sage",
  "signal", "slate", "spark", "stone", "tide", "timber", "vale", "wick",
];

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeSeedPhrase(seed: number) {
  const rand = mulberry32(seed);
  const used = new Set<string>();
  const words: string[] = [];
  while (words.length < 12) {
    const w = WORDS[Math.floor(rand() * WORDS.length)]!;
    if (used.has(w)) continue;
    used.add(w);
    words.push(w);
  }
  return words;
}

export async function sha256Hex(text: string) {
  const data = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function addressFromPhrase(words: string[]) {
  const hex = await sha256Hex(`lumen-sim:${words.join(" ")}`);
  return `0x${hex.slice(0, 40)}`;
}

export function shortAddr(addr: string) {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

export function formatEth(n: number, digits = 4) {
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString(undefined, { maximumFractionDigits: digits, minimumFractionDigits: 0 });
}

export type Pool = { x: number; y: number };

export function swapXForY(pool: Pool, dx: number, fee = 0.003) {
  const x = pool.x;
  const y = pool.y;
  const k = x * y;
  const dxEff = dx * (1 - fee);
  const x2 = x + dxEff;
  const y2 = k / x2;
  const dy = y - y2;
  const spotBefore = y / x;
  const spotAfter = y2 / x2;
  const ideal = dx * spotBefore;
  const impact = ideal <= 0 ? 0 : (1 - dy / ideal) * 100;
  return {
    dx,
    dy,
    x2,
    y2,
    k,
    feePaid: dx * fee,
    spotBefore,
    spotAfter,
    impact,
  };
}
