import esbuild from 'esbuild';
import fs from 'fs'
import path from 'path'
import NodeResolve from '@esbuild-plugins/node-resolve'
import { nodeExternalsPlugin } from 'esbuild-node-externals'
import { strings, webServerInit } from "./helpers.js";

let makeAllPackagesExternalPlugin = {
  name: 'make-all-packages-external',
  setup(build) {
    console.log('wtf')
    let filter = /^[^.\/]|^\.[^.\/]|^\.\.[^\/]/ // Must not start with "/" or "./" or "../"
    build.onResolve({ filter }, args => {
      console.log('-----------------')
      console.log(args)
      console.log('-----------------')
      return { path: args.path, external: true }
    })
  },
}

console.log(NodeResolve)

async function start() {
  let nodeInstance

  esbuild.build({
    entryPoints: ["./src/index.ts"],
    outdir: "./dist",
    bundle: true,
    platform: 'node',
    target: 'node14',
    format: "esm",
    plugins: [
      makeAllPackagesExternalPlugin
    ],
    watch: {
      onRebuild(error, result) {

        if (error)
          return strings.dev.error(error)

        nodeInstance.kill()
        nodeInstance = undefined
        nodeInstance = webServerInit()

        strings.dev.changes()
      },
    }
  }).then(e => {
    nodeInstance = webServerInit()

    // strings.dev.start()

  }).catch(error => {
    strings.dev.error(error)
  })
}

start()