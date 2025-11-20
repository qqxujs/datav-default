<script setup lang="ts">
import * as datavDefaultConfig from "../lib/index.js";
import { getDefaultConfig } from "../lib/index.js";

import datavConfig  from "./package.json";


console.log(datavDefaultConfig,datavConfig,getDefaultConfig);
const value = datavDefaultConfig.getDefaultConfig(datavConfig.datav.config)
console.log(value);
</script>

<template>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
