import { build } from "esbuild";

/** @type {import('esbuild').BuildOptions} */
const options = {
  entryPoints: ["./src/index.ts"],
  minify: true,
  bundle: true,
  outfile: "./dist/index.js",
  target: "node14.19",
  platform: "node",
  format: "esm",
  external: ["pretty-bytes"],
};

build(options).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
