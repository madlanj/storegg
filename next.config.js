/** @type {import('next').NextConfig} */
require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["storegg-bwa.herokuapp.com"],
  },
  env: true,
};
