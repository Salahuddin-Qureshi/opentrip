import fs from "fs";

let css = fs.readFileSync("src/pages/Home/Home.css", "utf8");

const oldStyleRegex = /\.packages-view-all-row\s*\{\r?\n\s*display:\s*flex\s*!important;\r?\n\s*justify-content:\s*center\s*!important;\r?\n\s*margin-top:\s*36px\s*!important;\r?\n\}/;

const newStyle = `.packages-view-all-row {
  display: flex !important;
  justify-content: center !important;
  margin-top: 32px !important;
  margin-bottom: 8px !important;
}

.packages-view-all-row .button {
  background: var(--coral, #ff805f) !important;
  color: #ffffff !important;
  border: none !important;
  box-shadow: 0 6px 18px rgba(255, 128, 95, 0.32) !important;
  font-weight: 700 !important;
  padding: 12px 30px !important;
  min-height: 48px !important;
  transition: all 0.25s ease !important;
}

.packages-view-all-row .button:hover {
  background: var(--coral-hover, #ed6d4e) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 10px 24px rgba(255, 128, 95, 0.45) !important;
}`;

css = css.replace(oldStyleRegex, newStyle);
fs.writeFileSync("src/pages/Home/Home.css", css, "utf8");
console.log("Updated Home.css button styling!");

