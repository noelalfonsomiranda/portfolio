import type { Accent, MockType } from "@/data/portfolio";
import { ACCENT as C, TINT as tint } from "./stack";

/**
 * Illustrated mock screens for projects without a public screenshot (NDA work).
 * Abstract on purpose: they hint at the product without showing any real client UI.
 * Returns an SVG string built only from static values in this file.
 */
export function mockSvg(type: MockType, color: Accent): string {
  const col = C[color],
    bg = tint[color],
    ink = "#1E2A32",
    w = "#fff",
    l = "#E6DFD3";
  const each = <T>(xs: T[], f: (x: T, i: number) => string) => xs.map(f).join("");
  const frame = `<rect x="30" y="22" width="260" height="160" rx="10" fill="${w}" stroke="${ink}" stroke-width="2"/><rect x="30" y="22" width="260" height="18" rx="10" fill="${ink}"/><rect x="30" y="32" width="260" height="8" fill="${ink}"/><circle cx="42" cy="31" r="3" fill="${C.coral}"/><circle cx="52" cy="31" r="3" fill="${C.amber}"/><circle cx="62" cy="31" r="3" fill="${C.green}"/>`;

  const s: Record<MockType, () => string> = {
    dashboard:
      () => `${frame}<rect x="38" y="48" width="44" height="126" rx="5" fill="${bg}"/>${each([58, 72, 86, 100], (y) => `<rect x="45" y="${y}" width="30" height="5" rx="2.5" fill="${col}" opacity="${y === 58 ? 1 : 0.35}"/>`)}
      ${each([0, 1, 2], (i) => `<rect x="${90 + i * 64}" y="48" width="58" height="34" rx="5" fill="${i === 0 ? col : bg}"/><rect x="${96 + i * 64}" y="56" width="22" height="4" rx="2" fill="${i === 0 ? w : col}" opacity=".7"/><rect x="${96 + i * 64}" y="66" width="34" height="8" rx="3" fill="${i === 0 ? w : ink}"/>`)}
      <polyline points="92,150 112,136 132,142 152,118 172,126 192,104 212,112" fill="none" stroke="${col}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      ${each([0, 1, 2, 3], (i) => `<rect x="222" y="${94 + i * 20}" width="60" height="12" rx="3" fill="${l}"/><circle cx="276" cy="${100 + i * 20}" r="3" fill="${[C.green, C.amber, C.green, C.coral][i]}"/>`)}`,
    checkout:
      () => `${frame}<rect x="44" y="52" width="130" height="118" rx="8" fill="${bg}"/>${each([64, 86, 108], (y) => `<rect x="54" y="${y}" width="110" height="14" rx="4" fill="${w}" stroke="${l}"/>`)}<rect x="54" y="138" width="110" height="20" rx="10" fill="${col}"/><rect x="84" y="145" width="50" height="6" rx="3" fill="${w}"/>
      <rect x="188" y="58" width="90" height="56" rx="8" fill="${ink}"/><rect x="198" y="68" width="16" height="12" rx="2" fill="${C.amber}"/><rect x="198" y="96" width="60" height="5" rx="2.5" fill="${w}" opacity=".7"/><circle cx="266" cy="74" r="6" fill="${C.coral}" opacity=".9"/><circle cx="258" cy="74" r="6" fill="${C.amber}" opacity=".9"/>
      <circle cx="233" cy="146" r="18" fill="${C.green}"/><path d="M224 146 l6 6 l12 -12" stroke="${w}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    components:
      () => `${frame}<rect x="44" y="52" width="70" height="20" rx="10" fill="${col}"/><rect x="122" y="52" width="70" height="20" rx="10" fill="${w}" stroke="${col}" stroke-width="2"/><rect x="200" y="52" width="76" height="20" rx="4" fill="${bg}"/>
      <rect x="44" y="82" width="148" height="18" rx="4" fill="${w}" stroke="${l}" stroke-width="2"/><rect x="50" y="89" width="50" height="4" rx="2" fill="${l}"/>
      <rect x="200" y="82" width="34" height="18" rx="9" fill="${col}"/><circle cx="225" cy="91" r="6" fill="${w}"/><rect x="242" y="82" width="34" height="18" rx="9" fill="${l}"/><circle cx="251" cy="91" r="6" fill="${w}"/>
      ${each([0, 1, 2, 3], (i) => `<rect x="${44 + i * 59}" y="110" width="52" height="60" rx="6" fill="${[bg, tint.amber, tint.coral, tint.green][i]}"/><circle cx="${70 + i * 59}" cy="130" r="9" fill="${[col, C.amber, C.coral, C.green][i]}"/><rect x="${54 + i * 59}" y="148" width="32" height="4" rx="2" fill="${ink}" opacity=".5"/><rect x="${54 + i * 59}" y="157" width="22" height="4" rx="2" fill="${ink}" opacity=".25"/>`)}`,
    bank: () => `<rect x="110" y="14" width="100" height="176" rx="16" fill="${w}" stroke="${ink}" stroke-width="2"/><rect x="146" y="22" width="28" height="5" rx="2.5" fill="${ink}"/>
      <rect x="120" y="36" width="80" height="44" rx="8" fill="${col}"/><rect x="128" y="44" width="30" height="4" rx="2" fill="${w}" opacity=".7"/><rect x="128" y="56" width="50" height="9" rx="3" fill="${w}"/>
      ${each([0, 1, 2], (i) => `<circle cx="${134 + i * 26}" cy="96" r="9" fill="${bg}"/><rect x="${130 + i * 26}" y="92" width="8" height="8" rx="2" fill="${col}"/>`)}
      ${each([0, 1, 2, 3], (i) => `<rect x="120" y="${116 + i * 17}" width="80" height="12" rx="3" fill="${l}" opacity=".7"/><rect x="186" y="${119 + i * 17}" width="10" height="6" rx="2" fill="${i % 2 ? C.coral : C.green}"/>`)}
      <rect x="230" y="60" width="64" height="40" rx="8" fill="${w}" stroke="${ink}" stroke-width="2"/><path d="M244 80 l8 8 l16 -16" stroke="${C.green}" stroke-width="4" fill="none" stroke-linecap="round"/><text x="28" y="100" font-family="var(--font-body)" font-size="22" fill="${ink}">a11y ✓</text>`,
    migration:
      () => `<rect x="22" y="44" width="116" height="110" rx="10" fill="${w}" stroke="${ink}" stroke-width="2" stroke-dasharray="6 5"/><text x="50" y="106" font-family="var(--font-body)" font-weight="800" font-size="22" fill="${C.slate}">.NET</text>
      <path d="M146 100 h32" stroke="${ink}" stroke-width="3" stroke-linecap="round"/><path d="M172 90 l10 10 l-10 10" stroke="${ink}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="188" y="44" width="116" height="110" rx="10" fill="${w}" stroke="${ink}" stroke-width="2"/>
      <g transform="translate(246 99)" fill="none" stroke="${col}" stroke-width="3"><ellipse rx="30" ry="11"/><ellipse rx="30" ry="11" transform="rotate(60)"/><ellipse rx="30" ry="11" transform="rotate(120)"/></g><circle cx="246" cy="99" r="5" fill="${col}"/>
      ${each([0, 1, 2], (i) => `<circle cx="${130 + i * 30}" cy="178" r="10" fill="${[C.amber, C.coral, C.green][i]}" stroke="${ink}" stroke-width="2"/>`)}`,
    shop: () => `${frame}${each([0, 1, 2], (i) => `<rect x="${44 + i * 82}" y="50" width="72" height="76" rx="8" fill="${[bg, tint.amber, tint.coral][i]}"/><rect x="${60 + i * 82}" y="62" width="40" height="40" rx="20" fill="${[col, C.amber, C.coral][i]}" opacity=".85"/><rect x="${52 + i * 82}" y="110" width="40" height="5" rx="2.5" fill="${ink}" opacity=".6"/>`)}
      ${each([0, 1, 2], (i) => `<rect x="${44 + i * 82}" y="134" width="72" height="16" rx="8" fill="${i === 1 ? col : w}" stroke="${col}" stroke-width="2"/>`)}<rect x="44" y="158" width="154" height="16" rx="4" fill="${l}"/><circle cx="270" cy="166" r="9" fill="${col}"/><text x="266" y="170" font-size="11" font-weight="800" fill="${w}" font-family="var(--font-body)">3</text>`,
    matrix:
      () => `${frame}<rect x="40" y="48" width="240" height="16" rx="3" fill="${ink}"/>${each([0, 1, 2, 3], (c) => `<rect x="${110 + c * 44}" y="53" width="26" height="6" rx="3" fill="${w}" opacity=".8"/>`)}
      ${each([0, 1, 2, 3, 4], (r) => `<rect x="46" y="${72 + r * 20}" width="52" height="8" rx="3" fill="${ink}" opacity=".55"/>` + each([0, 1, 2, 3], (c) => `<rect x="${106 + c * 44}" y="${69 + r * 20}" width="36" height="14" rx="7" fill="${[col, C.amber, C.coral, C.green, C.purple][(r + c) % 5]}" opacity="${(r + c) % 3 ? 0.35 : 1}"/>`))}`,
    monitor: () => `${frame}${each([0, 1, 2, 3, 4, 5, 6, 7], (i) => {
      const x = 40 + (i % 4) * 48,
        y = 50 + Math.floor(i / 4) * 58;
      return `<rect x="${x}" y="${y}" width="42" height="50" rx="6" fill="${bg}"/><circle cx="${x + 21}" cy="${y + 18}" r="9" fill="${w}" stroke="${ink}" stroke-width="1.5"/><rect x="${x + 9}" y="${y + 33}" width="24" height="4" rx="2" fill="${ink}" opacity=".5"/><circle cx="${x + 35}" cy="${y + 8}" r="4" fill="${[C.green, col, C.amber, C.green, C.coral, C.green, col, C.amber][i]}"/>`;
    })}
      <rect x="236" y="50" width="46" height="108" rx="6" fill="${w}" stroke="${l}" stroke-width="2"/><rect x="242" y="60" width="30" height="12" rx="6" fill="${bg}"/><rect x="248" y="78" width="28" height="12" rx="6" fill="${col}"/><rect x="242" y="96" width="24" height="12" rx="6" fill="${bg}"/>`,
    queue:
      () => `<rect x="110" y="14" width="100" height="176" rx="16" fill="${w}" stroke="${ink}" stroke-width="2"/><rect x="146" y="22" width="28" height="5" rx="2.5" fill="${ink}"/>
      <rect x="122" y="38" width="76" height="58" rx="10" fill="${col}"/><text x="160" y="64" text-anchor="middle" font-family="var(--font-body)" font-weight="700" font-size="8" fill="${w}" opacity=".85">YOUR NUMBER</text><text x="160" y="86" text-anchor="middle" font-family="var(--font-body)" font-weight="800" font-size="20" fill="${w}">A12</text>
      ${each([0, 1, 2], (i) => `<rect x="122" y="${106 + i * 22}" width="76" height="16" rx="8" fill="${i === 1 ? bg : w}" stroke="${i === 1 ? col : l}" stroke-width="2"/><rect x="130" y="${111 + i * 22}" width="30" height="6" rx="3" fill="${ink}" opacity=".5"/>`)}
      <g transform="translate(250 70)"><circle r="26" fill="${w}" stroke="${ink}" stroke-width="2"/><path d="M0 -14 V0 L10 8" stroke="${ink}" stroke-width="3" fill="none" stroke-linecap="round"/></g><text x="222" y="130" font-family="var(--font-body)" font-size="20" fill="${ink}">skip the line</text>`,
    forecast: () => `${frame}${each([0, 1, 2, 3, 4, 5, 6, 7], (i) => {
      const h = [40, 58, 50, 72, 64, 86, 78, 96][i];
      return `<rect x="${48 + i * 22}" y="${168 - h}" width="12" height="${h}" rx="3" fill="${col}"/><rect x="${48 + i * 22}" y="${168 - h}" width="12" height="${Math.round(h * 0.35)}" rx="3" fill="${C.amber}"/>`;
    })}
      <rect x="230" y="50" width="52" height="30" rx="5" fill="${bg}"/><polyline points="236,72 246,64 256,68 266,58 276,60" fill="none" stroke="${col}" stroke-width="2.5" stroke-linecap="round"/><rect x="230" y="88" width="52" height="30" rx="5" fill="${tint.amber}"/><polyline points="236,110 246,104 256,108 266,96 276,100" fill="none" stroke="${C.amber}" stroke-width="2.5" stroke-linecap="round"/>`,
    aid: () => `${frame}${each([0, 1, 2, 3], (i) => `<circle cx="${60 + i * 40}" cy="60" r="9" fill="${i < 2 ? col : w}" stroke="${col}" stroke-width="2"/>${i < 3 ? `<rect x="${70 + i * 40}" y="59" width="20" height="2" fill="${col}"/>` : ""}`)}
      <g transform="translate(88 128)"><circle r="30" fill="none" stroke="${l}" stroke-width="12"/><circle r="30" fill="none" stroke="${col}" stroke-width="12" stroke-dasharray="130 200" transform="rotate(-90)"/></g>
      ${each([0, 1, 2, 3, 4, 5], (i) => `<path d="M${150 + (i % 3) * 42} ${116 + Math.floor(i / 3) * 34} l12 -10 l12 10 v14 h-24z" fill="${i < 4 ? col : l}" opacity="${i < 4 ? 0.85 : 1}"/>`)}<rect x="236" y="52" width="46" height="18" rx="9" fill="${tint.amber}"/><rect x="244" y="59" width="30" height="4" rx="2" fill="${C.amber}"/>`,
    hotel:
      () => `${frame}<rect x="38" y="46" width="244" height="80" rx="4" fill="${bg}"/><path d="M38 126 l50 -40 l40 26 l50 -46 l104 60z" fill="${col}" opacity=".55"/><circle cx="240" cy="68" r="10" fill="${C.amber}"/>
      <text x="160" y="80" text-anchor="middle" font-family="var(--font-body)" font-size="22" fill="${ink}">Country house hotel</text>
      <rect x="92" y="136" width="64" height="18" rx="9" fill="${col}"/><rect x="164" y="136" width="64" height="18" rx="9" fill="${w}" stroke="${col}" stroke-width="2"/>${each([0, 1, 2], (i) => `<rect x="${52 + i * 76}" y="162" width="64" height="12" rx="3" fill="${l}"/>`)}`,
    cms: () => `${frame}<rect x="38" y="46" width="160" height="56" rx="5" fill="${bg}"/><rect x="48" y="58" width="90" height="8" rx="4" fill="${ink}" opacity=".7"/><rect x="48" y="74" width="120" height="5" rx="2.5" fill="${ink}" opacity=".3"/><rect x="48" y="84" width="100" height="5" rx="2.5" fill="${ink}" opacity=".3"/>
      ${each([0, 1, 2], (i) => `<rect x="${38 + i * 55}" y="110" width="49" height="64" rx="5" fill="${w}" stroke="${l}" stroke-width="2"/><rect x="${44 + i * 55}" y="116" width="37" height="26" rx="3" fill="${[tint.amber, tint.green, bg][i]}"/><rect x="${44 + i * 55}" y="150" width="30" height="4" rx="2" fill="${ink}" opacity=".5"/>`)}
      <circle cx="244" cy="108" r="34" fill="${w}" stroke="${ink}" stroke-width="2"/><text x="244" y="122" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="38" fill="${col}">W</text>`,
  };

  return `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><rect width="320" height="200" fill="${bg}"/>${s[type]()}</svg>`;
}
