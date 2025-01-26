/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */

const config = {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    ".*styles.css$",
    "",
    "^react$",
    "^next$",
    "^next/.*$",
    "^next-intl",
    "^next-intl/.*$",
    "<BUILTIN_MODULES>",
    "^@mantine/(.*)$",
    "^@mantinex/(.*)$",
    "^@tabler/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "",
    "^../(?!.*.css$).*$",
    "^./(?!.*.css$).*$",
    "\\.css$",
  ],
};

export default config;
