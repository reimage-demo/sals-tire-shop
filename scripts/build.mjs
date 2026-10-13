import { cp, mkdir, copyFile } from "node:fs/promises";
await mkdir("dist", { recursive: true });
for (const file of ["index.html", "styles.css", "app.js"])
  await copyFile(file, `dist/${file}`);
await cp("assets", "dist/assets", {
  recursive: true,
  filter: (path) => !path.endsWith(".jpg") && !path.endsWith(".png"),
});
console.log("Static site copied to dist. Source lives in the project root.");
