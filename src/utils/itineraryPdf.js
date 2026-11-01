// Pure client-side PDF 1.4 generator for OpenTrip destination guides & itineraries.
function cleanPdfText(value) {
  return String(value ?? "")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/·/g, "-")
    .replace(/[^\x20-\x7E]/g, "")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function wrapLines(text, maxChars = 78) {
  const words = String(text ?? "").split(/\s+/);
  const lines = [];
  let current = "";
  for (const word of words) {
    if (!word) continue;
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxChars) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : [""];
}

export function downloadDestinationPdf(destination) {
  const ops = [];

  // Deep teal header (#183e42)
  ops.push("0.094 0.243 0.259 rg");
  ops.push("0 740 612 102 re f");

  // Coral accent strip (#ff805f)
  ops.push("1.0 0.502 0.373 rg");
  ops.push("0 736 612 4 re f");

  // Header text
  ops.push("1 1 1 rg");
  ops.push("BT /F2 22 Tf 48 794 Td (OpenTrip Pvt. Ltd.) Tj ET");
  ops.push("0.84 0.92 0.92 rg");
  ops.push(
    "BT /F1 9 Tf 48 776 Td (DESTINATION GUIDE, DAYS/NIGHTS & PACKAGE TARIFF BRIEF) Tj ET",
  );
  ops.push(
    `BT /F2 12 Tf 48 754 Td (${cleanPdfText(destination.name)} - ${cleanPdfText(destination.country)}) Tj ET`,
  );

  // Overview box
  ops.push("0.955 0.972 0.968 rg");
  ops.push("48 624 516 90 re f");
  ops.push("0.82 0.88 0.87 RG 1 w 48 624 516 90 re S");

  const durationText = destination.daysNights || destination.duration;
  const priceText = destination.pricePkr
    ? `PKR ${Number(destination.pricePkr).toLocaleString("en-US")} ($${destination.priceFrom})`
    : `$${destination.priceFrom} / person`;

  ops.push("0.094 0.243 0.259 rg");
  ops.push("BT /F2 11 Tf 64 692 Td (PACKAGE & DESTINATION SNAPSHOT) Tj ET");
  ops.push("0.22 0.32 0.33 rg");
  ops.push(
    `BT /F2 9 Tf 64 672 Td (Region:) Tj /F1 9 Tf 65 0 Td (${cleanPdfText(destination.region)}) Tj ET`,
  );
  ops.push(
    `BT /F2 9 Tf 64 654 Td (Best Season:) Tj /F1 9 Tf 65 0 Td (${cleanPdfText(destination.bestTime)}) Tj ET`,
  );
  ops.push(
    `BT /F2 9 Tf 64 636 Td (Travel Vibe:) Tj /F1 9 Tf 65 0 Td (${cleanPdfText(destination.vibe)}) Tj ET`,
  );
  ops.push(
    `BT /F2 9 Tf 290 672 Td (Days / Nights:) Tj /F1 9 Tf 78 0 Td (${cleanPdfText(durationText)}) Tj ET`,
  );
  ops.push(
    `BT /F2 9 Tf 290 654 Td (Starting Rate:) Tj /F1 9 Tf 78 0 Td (${cleanPdfText(priceText)}) Tj ET`,
  );
  ops.push(
    `BT /F2 9 Tf 290 636 Td (Traveller Rating:) Tj /F1 9 Tf 78 0 Td (${cleanPdfText(destination.rating)} / 5.0) Tj ET`,
  );

  let y = 594;

  ops.push("0.094 0.243 0.259 rg");
  ops.push("BT /F2 12 Tf 48 594 Td (Editorial Overview) Tj ET");
  y -= 18;
  ops.push("0.25 0.33 0.34 rg");
  for (const line of wrapLines(
    destination.longDescription || destination.description,
    84,
  )) {
    ops.push(`BT /F1 10 Tf 48 ${y} Td (${cleanPdfText(line)}) Tj ET`);
    y -= 14;
  }

  if (destination.pricingTiers?.length) {
    y -= 10;
    ops.push("0.094 0.243 0.259 rg");
    ops.push(`BT /F2 12 Tf 48 ${y} Td (Package Tiers & Rates) Tj ET`);
    y -= 16;
    ops.push("0.22 0.32 0.33 rg");
    for (const tier of destination.pricingTiers) {
      const line = `${tier.label} (${tier.duration}): PKR ${Number(tier.pricePkr).toLocaleString("en-US")} / $${tier.priceUsd} - ${tier.notes}`;
      ops.push(`BT /F1 9.5 Tf 58 ${y} Td (-  ${cleanPdfText(line)}) Tj ET`);
      y -= 14;
    }
  }

  y -= 10;
  ops.push("0.094 0.243 0.259 rg");
  ops.push(`BT /F2 12 Tf 48 ${y} Td (Signature Highlights) Tj ET`);
  y -= 16;
  ops.push("0.22 0.32 0.33 rg");
  for (const h of destination.highlights || []) {
    ops.push(`BT /F1 10 Tf 58 ${y} Td (*  ${cleanPdfText(h)}) Tj ET`);
    y -= 14;
  }

  y -= 10;
  ops.push("0.094 0.243 0.259 rg");
  ops.push(`BT /F2 12 Tf 48 ${y} Td (Suggested Day-by-Day Route) Tj ET`);
  y -= 16;
  ops.push("0.22 0.32 0.33 rg");
  for (const step of destination.sampleItinerary || []) {
    for (const line of wrapLines(step, 82)) {
      if (y < 90) break;
      ops.push(`BT /F1 9.5 Tf 58 ${y} Td (${cleanPdfText(line)}) Tj ET`);
      y -= 13;
    }
    y -= 2;
  }

  ops.push("0.82 0.88 0.87 RG 0.7 w 48 68 516 0 re S");
  ops.push("0.45 0.52 0.53 rg");
  ops.push(
    "BT /F1 8 Tf 48 52 Td (Open Trip Pvt. Ltd. | Bukhari Commercial Phase 6 DHA Karachi | +92 310 1816191 | www.opentrip.pk) Tj ET",
  );

  const streamContent = ops.join("\n");
  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj",
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj",
    "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj",
    "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj",
    `6 0 obj\n<< /Length ${streamContent.length} >>\nstream\n${streamContent}\nendstream\nendobj`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (const obj of objects) {
    offsets.push(pdf.length);
    pdf += `${obj}\n`;
  }
  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  const blob = new Blob([pdf], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `OpenTrip-Destination-${destination.id || "guide"}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
