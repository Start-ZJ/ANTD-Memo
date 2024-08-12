const config = {
  plugins: [
    'remark-preset-lint-recommended',
    ['remark-lint-no-undefined-references', { allow: [' ', /RFC/] }],
  ],
};

module.exports = config;
//.remarkrc.js 文件是一个配置文件，用于配置 remark，这是一个 Markdown 处理器，它可以用来解析 Markdown 文本，并根据你的配置进行转换、校验或格式化。.remarkrc.js 文件通常是一个 JavaScript 模块，它导出一个对象，该对象定义了 remark 的配置选项。
