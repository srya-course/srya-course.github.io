import fs from "fs";
import path from "path";
import YAML from "yaml";

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "content");
const OUT_DIR = path.join(ROOT, "attached_assets", "content");

function ensureOutDir() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

function writeJson(name, data) {
  const file = path.join(OUT_DIR, `${name}.json`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf-8");
  console.log(`wrote ${file}`);
}

function loadDiary() {
  const diaryDir = path.join(CONTENT_DIR, "diary");
  if (!fs.existsSync(diaryDir)) return [];
  const files = fs.readdirSync(diaryDir).filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"));
  const entries = [];
  for (const file of files) {
    if (file === "example.yaml" || file === "example.yml") continue;
    try {
      const content = fs.readFileSync(path.join(diaryDir, file), "utf-8");
      const data = YAML.parse(content);
      if (data && data.id) entries.push(data);
    } catch (e) {
      console.warn(`failed to parse diary ${file}: ${e}`);
    }
  }
  return entries.sort((a, b) => (a.date && b.date ? new Date(b.date) - new Date(a.date) : 0));
}

function loadNotes() {
  const notesDir = path.join(CONTENT_DIR, "notes");
  if (!fs.existsSync(notesDir)) return [];
  const files = fs.readdirSync(notesDir).filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"));
  const entries = [];
  for (const file of files) {
    if (file === "example.yaml" || file === "example.yml") continue;
    try {
      const content = fs.readFileSync(path.join(notesDir, file), "utf-8");
      const data = YAML.parse(content);
      if (data && data.id) entries.push(data);
    } catch (e) {
      console.warn(`failed to parse note ${file}: ${e}`);
    }
  }
  return entries.sort((a, b) => (a.date && b.date ? new Date(b.date) - new Date(a.date) : 0));
}

function loadGallery() {
  const file = path.join(CONTENT_DIR, "gallery", "gallery.yaml");
  if (!fs.existsSync(file)) return [];
  try {
    const content = fs.readFileSync(file, "utf-8");
    const data = YAML.parse(content);
    return Array.isArray(data?.images) ? data.images : [];
  } catch (e) {
    console.warn(`failed to parse gallery: ${e}`);
    return [];
  }
}

function loadVideos() {
  const file = path.join(CONTENT_DIR, "videos", "videos.yaml");
  if (!fs.existsSync(file)) return [];
  try {
    const content = fs.readFileSync(file, "utf-8");
    const data = YAML.parse(content);
    return Array.isArray(data?.videos) ? data.videos : [];
  } catch (e) {
    console.warn(`failed to parse videos: ${e}`);
    return [];
  }
}

function main() {
  ensureOutDir();
  writeJson("diary", loadDiary());
  writeJson("notes", loadNotes());
  writeJson("gallery", loadGallery());
  writeJson("videos", loadVideos());
}

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

if (process.argv[1] === __filename) {
  main();
}

export default { main };
