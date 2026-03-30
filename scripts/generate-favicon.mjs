import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";
import pngToIco from "png-to-ico";

const repoRoot = process.cwd();

const inputPath = path.join(repoRoot, "public", "Favicon.png");
const outputIconPath = path.join(repoRoot, "src", "app", "icon.png");
const outputApplePath = path.join(repoRoot, "src", "app", "apple-icon.png");
const outputIcoPath = path.join(repoRoot, "public", "favicon.ico");
const outputAppIcoPath = path.join(repoRoot, "src", "app", "favicon.ico");

function parsePng(filePath) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(new PNG())
      .on("parsed", function parsed() {
        resolve(this);
      })
      .on("error", reject);
  });
}

function writePng(png, filePath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });
    png
      .pack()
      .pipe(fs.createWriteStream(filePath))
      .on("finish", resolve)
      .on("error", reject);
  });
}

function makeWhiteTransparent(png) {
  const threshold = 245;
  for (let y = 0; y < png.height; y += 1) {
    for (let x = 0; x < png.width; x += 1) {
      const idx = (png.width * y + x) << 2;
      const r = png.data[idx];
      const g = png.data[idx + 1];
      const b = png.data[idx + 2];
      const a = png.data[idx + 3];
      if (a === 0) continue;
      if (r >= threshold && g >= threshold && b >= threshold) {
        png.data[idx + 3] = 0;
      }
    }
  }
  return png;
}

async function main() {
  const iconPng = await parsePng(inputPath);
  makeWhiteTransparent(iconPng);
  await writePng(iconPng, outputIconPath);

  const applePng = await parsePng(inputPath);
  makeWhiteTransparent(applePng);
  await writePng(applePng, outputApplePath);

  const icoBuffer = await pngToIco(outputIconPath);
  fs.writeFileSync(outputIcoPath, icoBuffer);
  fs.writeFileSync(outputAppIcoPath, icoBuffer);

  console.log(`Wrote ${outputIconPath}`);
  console.log(`Wrote ${outputApplePath}`);
  console.log(`Wrote ${outputIcoPath}`);
  console.log(`Wrote ${outputAppIcoPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
