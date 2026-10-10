import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

const server = await createServer({
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
});

try {
  const { default: Home } = await server.ssrLoadModule(
    "/src/pages/Home/Home.jsx",
  );
  const html = renderToStaticMarkup(createElement(Home));
  for (const id of [
    "home",
    "trip-search",
    "destinations",
    "experiences",
    "packages",
    "about",
    "journal",
    "contact",
  ]) {
    assert.ok(html.includes(`id="${id}"`), `Missing section: ${id}`);
  }
  for (const [, src] of html.matchAll(/src="(\/images\/[^\"]+)"/g)) {
    assert.ok(existsSync(`public${src}`), `Missing local image: ${src}`);
  }
  for (const [, target] of html.matchAll(/href="#([^\"]+)"/g)) {
    assert.ok(
      html.includes(`id="${target}"`),
      `Broken section link: ${target}`,
    );
  }
  const { default: PackagesSection } = await server.ssrLoadModule(
    "/src/components/home/PackagesSection.jsx",
  );
  const renderPackages = (props) =>
    renderToStaticMarkup(
      createElement(PackagesSection, {
        onCategoryChange() {},
        onClearSearch() {},
        onSelect() {},
        ...props,
      }),
    );
  const beach = renderPackages({ category: "Beach" });
  assert.ok(
    beach.includes("Bali Getaway") &&
      beach.includes("Maldives Escape") &&
      !beach.includes("Swiss Explorer"),
  );
  const dubai = renderPackages({
    category: "All",
    search: { destination: "dubai", travelers: "2" },
  });
  assert.ok(
    dubai.includes("Dubai City Break") && !dubai.includes("Bali Getaway"),
  );
  const unmatched = renderPackages({
    category: "All",
    search: { destination: "Hunza", travelers: "2" },
  });
  assert.ok(unmatched.includes("Plan a Custom Trip"));
  const mismatch = renderPackages({
    category: "Adventure",
    search: { destination: "Bali", travelers: "2" },
  });
  assert.ok(
    mismatch.includes("Plan a Custom Trip") &&
      !mismatch.includes("Bali Getaway"),
  );
  console.log(
    "PASS: homepage rendering, navigation targets, image assets, package filters, search and empty states.",
  );
} finally {
  await server.close();
}
