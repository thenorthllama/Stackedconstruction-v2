// Kitchen remodel cost estimation engine.
// Every rate below should be recalibrated against actual closed-job costs
// on a regular cadence — see the "keeping this accurate" notes in the
// kitchen-cost-calculator page for the process.

export type KitchenSize = "small" | "standard" | "large" | "xl";
export type LayoutChange = "keep" | "move" | "remove_wall";
export type CabinetStyle = "stock" | "semicustom" | "custom";
export type Countertop = "laminate" | "quartz" | "granite" | "stone";
export type Flooring = "lvp" | "tile" | "hardwood";
export type Backsplash = "none" | "ceramic" | "designer" | "stone";
export type AppliancePackage = "keep" | "midrange" | "premium" | "luxury";
export type HomeAge = "new" | "mid" | "old";
export type Timeline = "asap" | "soon" | "later" | "exploring";
export type Region =
  | "fort-myers"
  | "cape-coral"
  | "bonita-springs"
  | "naples"
  | "lehigh-acres"
  | "estero"
  | "north-fort-myers"
  | "sanibel-captiva"
  | "other";

export type StyleTier = "budget" | "mid" | "luxury";

export interface KitchenCalcState {
  kitchenSize: KitchenSize | null;
  cabLf: number;
  layout: LayoutChange | null;
  cabinetStyle: CabinetStyle | null;
  countertop: Countertop | null;
  flooring: Flooring | null;
  backsplash: Backsplash | null;
  appliances: AppliancePackage | null;
  addons: Record<string, boolean>;
  region: Region;
  homeAge: HomeAge | null;
  timeline: Timeline | null;
}

export const INITIAL_STATE: KitchenCalcState = {
  kitchenSize: null,
  cabLf: 22,
  layout: null,
  cabinetStyle: null,
  countertop: null,
  flooring: null,
  backsplash: null,
  appliances: null,
  addons: {},
  region: "fort-myers",
  homeAge: null,
  timeline: null,
};

// ─── Reference dimensions per kitchen size ─────────────────────────────────
// floor/counter/backsplash sqft scale with the cabinet linear-footage slider
// so a homeowner only ever has to estimate the one number they can actually
// see (cabinet run), not square footages they'd be guessing at.
export const SIZE_PROFILES: Record<
  KitchenSize,
  { lf: number; floor: number; counter: number; backsplash: number; label: string; desc: string }
> = {
  small: { lf: 16, floor: 90, counter: 30, backsplash: 24, label: "Galley / Small", desc: "Under 100 sq ft, ~16 ft of cabinets" },
  standard: { lf: 22, floor: 150, counter: 42, backsplash: 32, label: "Standard", desc: "100–200 sq ft, ~22 ft of cabinets" },
  large: { lf: 30, floor: 250, counter: 60, backsplash: 45, label: "Large / Open-Concept", desc: "200–300 sq ft, ~30 ft of cabinets" },
  xl: { lf: 40, floor: 340, counter: 80, backsplash: 60, label: "Chef's / XL", desc: "300+ sq ft, island + ~40 ft of cabinets" },
};

export const LAYOUT_OPTIONS: Record<LayoutChange, { label: string; desc: string; fee: number }> = {
  keep: { label: "Keep the current layout", desc: "Sink, range & appliances stay put — the most budget-friendly option.", fee: 0 },
  move: { label: "Move plumbing or gas", desc: "Relocating the sink, range, or adding a gas line within the room.", fee: 4500 },
  remove_wall: { label: "Remove a wall / open concept", desc: "Structural work to open the kitchen to another room.", fee: 9500 },
};

export const CABINET_STYLES: Record<
  CabinetStyle,
  { label: string; desc: string; perLf: number; tier: StyleTier }
> = {
  stock: { label: "Stock / Laminate", desc: "Pre-built boxes, quality laminate fronts. Clean and affordable.", perLf: 300, tier: "budget" },
  semicustom: { label: "Semi-Custom Wood", desc: "Painted shaker or wood fronts, made-to-fit sizing.", perLf: 550, tier: "mid" },
  custom: { label: "Full Custom", desc: "Built for your exact space, premium hardwood & finishes.", perLf: 950, tier: "luxury" },
};

export const COUNTERTOPS: Record<Countertop, { label: string; desc: string; perSqft: number }> = {
  laminate: { label: "Laminate", desc: "Budget-friendly, huge color range.", perSqft: 35 },
  quartz: { label: "Quartz", desc: "Non-porous, low-maintenance — the SWFL favorite.", perSqft: 85 },
  granite: { label: "Granite", desc: "Natural stone, heat-resistant, one-of-a-kind pattern.", perSqft: 75 },
  stone: { label: "Quartzite / Marble", desc: "Premium natural stone, showpiece veining.", perSqft: 150 },
};

export const FLOORING: Record<Flooring, { label: string; desc: string; perSqft: number }> = {
  lvp: { label: "Luxury Vinyl Plank", desc: "Waterproof, scratch-resistant, budget-friendly.", perSqft: 7 },
  tile: { label: "Porcelain Tile", desc: "Durable and classic for Florida homes.", perSqft: 12 },
  hardwood: { label: "Hardwood", desc: "Warm, high-end look throughout the home.", perSqft: 18 },
};

export const BACKSPLASH: Record<Backsplash, { label: string; desc: string; perSqft: number }> = {
  none: { label: "Skip it / keep existing", desc: "", perSqft: 0 },
  ceramic: { label: "Ceramic Tile", desc: "Classic subway or patterned tile.", perSqft: 18 },
  designer: { label: "Designer Tile", desc: "Handmade, mosaic, or statement patterns.", perSqft: 38 },
  stone: { label: "Natural Stone / Slab", desc: "Full-height stone slab or marble mosaic.", perSqft: 58 },
};

export const APPLIANCES: Record<AppliancePackage, { label: string; desc: string; price: number }> = {
  keep: { label: "Keep current appliances", desc: "No appliance budget needed.", price: 0 },
  midrange: { label: "Mid-Range Package", desc: "New fridge, range, dishwasher & microwave.", price: 6000 },
  premium: { label: "Premium Package", desc: "Upgraded stainless, larger capacity, pro-style range.", price: 12000 },
  luxury: { label: "Luxury / Pro Package", desc: "Built-in fridge, pro range, wine storage & more.", price: 24000 },
};

export interface AddonDef {
  id: string;
  label: string;
  desc: string;
  basePrice: number; // priced at "mid" tier — scaled by styleMultiplier
}

export const ADDONS: AddonDef[] = [
  { id: "island", label: "Kitchen island", desc: "Extra cabinetry, counter space & seating", basePrice: 5500 },
  { id: "lighting", label: "Recessed & under-cabinet lighting", desc: "Brighten the whole space", basePrice: 1800 },
  { id: "pantry", label: "Walk-in / custom pantry", desc: "Built-in storage", basePrice: 3200 },
  { id: "hood", label: "Upgraded range hood", desc: "Statement or high-CFM ventilation", basePrice: 2400 },
  { id: "potfiller", label: "Pot filler", desc: "Faucet mounted above the range", basePrice: 1200 },
  { id: "windowsink", label: "New window over the sink", desc: "Add or enlarge a window", basePrice: 3200 },
  { id: "smart", label: "Smart kitchen upgrades", desc: "Smart faucet, outlets & controls", basePrice: 2200 },
];

export const STYLE_MULTIPLIER: Record<StyleTier, number> = { budget: 0.85, mid: 1, luxury: 1.3 };
export const LABOR_RATE: Record<StyleTier, number> = { budget: 0.38, mid: 0.45, luxury: 0.52 };
export const BASE_FEE: Record<KitchenSize, number> = { small: 2800, standard: 3400, large: 4200, xl: 5200 };
export const AGE_CONTINGENCY: Record<HomeAge, number> = { new: 0.05, mid: 0.1, old: 0.15 };

export const REGIONS: Record<Region, { label: string; mult: number }> = {
  "fort-myers": { label: "Fort Myers", mult: 1.0 },
  "cape-coral": { label: "Cape Coral", mult: 1.0 },
  "lehigh-acres": { label: "Lehigh Acres", mult: 0.97 },
  "north-fort-myers": { label: "North Fort Myers", mult: 0.98 },
  estero: { label: "Estero", mult: 1.06 },
  "bonita-springs": { label: "Bonita Springs", mult: 1.08 },
  naples: { label: "Naples", mult: 1.25 },
  "sanibel-captiva": { label: "Sanibel / Captiva", mult: 1.28 },
  other: { label: "Other SWFL area", mult: 1.0 },
};

export const HOME_AGE_LABELS: Record<HomeAge, string> = {
  new: "2000 or newer",
  mid: "1980–1999",
  old: "Before 1980",
};

export const TIMELINE_LABELS: Record<Timeline, string> = {
  asap: "ASAP / under 1 month",
  soon: "1–3 months",
  later: "3–6 months",
  exploring: "Just exploring",
};

export function styleTierOf(state: KitchenCalcState): StyleTier {
  if (!state.cabinetStyle) return "mid";
  return CABINET_STYLES[state.cabinetStyle].tier;
}

export function addonPrice(addon: AddonDef, tier: StyleTier): number {
  return Math.round((addon.basePrice * STYLE_MULTIPLIER[tier]) / 50) * 50;
}

export interface EstimateLine {
  label: string;
  value: number;
}

export interface Estimate {
  point: number;
  low: number;
  high: number;
  lines: EstimateLine[];
  materialSubtotal: number;
  labor: number;
  laborRate: number;
  regionMult: number;
  regionLabel: string;
  contingency: number;
  contPct: number;
  pickedAddons: string[];
  styleTier: StyleTier;
}

export function roundTo(n: number, step: number) {
  return Math.round(n / step) * step;
}

export function computeEstimate(state: KitchenCalcState): Estimate | null {
  if (
    !state.kitchenSize ||
    !state.layout ||
    !state.cabinetStyle ||
    !state.countertop ||
    !state.flooring ||
    !state.backsplash ||
    !state.appliances ||
    !state.homeAge
  ) {
    return null;
  }

  const profile = SIZE_PROFILES[state.kitchenSize];
  const lf = state.cabLf || profile.lf;
  const scale = lf / profile.lf;
  const counterSqft = profile.counter * scale;
  const floorSqft = profile.floor * scale;
  const backsplashSqft = profile.backsplash * scale;

  const tier = styleTierOf(state);

  const cabinets = lf * CABINET_STYLES[state.cabinetStyle].perLf;
  const counters = counterSqft * COUNTERTOPS[state.countertop].perSqft;
  const floor = floorSqft * FLOORING[state.flooring].perSqft;
  const backsplash = backsplashSqft * BACKSPLASH[state.backsplash].perSqft;

  const materialSubtotal = cabinets + counters + floor + backsplash;
  const laborRate = LABOR_RATE[tier];
  const labor = materialSubtotal * laborRate;
  const appliances = APPLIANCES[state.appliances].price;
  const layoutFee = LAYOUT_OPTIONS[state.layout].fee;
  const baseFee = BASE_FEE[state.kitchenSize];

  const pickedAddons: string[] = [];
  let addonsTotal = 0;
  for (const addon of ADDONS) {
    if (state.addons[addon.id]) {
      addonsTotal += addonPrice(addon, tier);
      pickedAddons.push(addon.label);
    }
  }

  let subtotal = materialSubtotal + labor + appliances + layoutFee + baseFee + addonsTotal;

  const region = REGIONS[state.region];
  subtotal *= region.mult;

  const contPct = AGE_CONTINGENCY[state.homeAge];
  const contingency = subtotal * contPct;
  const point = subtotal + contingency;

  const lines: EstimateLine[] = [
    { label: "Cabinetry", value: cabinets },
    { label: "Countertops", value: counters },
    { label: "Flooring", value: floor },
  ];
  if (backsplash > 0) lines.push({ label: "Backsplash", value: backsplash });
  lines.push({ label: "Installation labor", value: labor });
  if (appliances > 0) lines.push({ label: "Appliance package", value: appliances });
  if (layoutFee > 0) lines.push({ label: "Layout changes", value: layoutFee });
  lines.push({ label: "Permits, demo & project management", value: baseFee });
  if (addonsTotal > 0) lines.push({ label: "Selected upgrades", value: addonsTotal });

  return {
    point,
    low: roundTo(point * 0.88, 500),
    high: roundTo(point * 1.15, 500),
    lines,
    materialSubtotal,
    labor,
    laborRate,
    regionMult: region.mult,
    regionLabel: region.label,
    contingency,
    contPct,
    pickedAddons,
    styleTier: tier,
  };
}

export function scoreLead(state: KitchenCalcState, point: number): { score: number; band: "hot" | "warm" | "nurture" } {
  let score = 0;
  if (state.timeline === "asap") score += 40;
  else if (state.timeline === "soon") score += 25;
  else if (state.timeline === "later") score += 12;

  const tier = styleTierOf(state);
  if (tier === "luxury") score += 20;
  else if (tier === "mid") score += 12;

  if (point > 70000) score += 15;
  else if (point > 40000) score += 8;

  const band = score >= 55 ? "hot" : score >= 32 ? "warm" : "nurture";
  return { score, band };
}

export function formatCurrency(n: number): string {
  return "$" + Math.round(n).toLocaleString();
}
