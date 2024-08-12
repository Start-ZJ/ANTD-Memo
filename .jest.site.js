const { moduleNameMapper, transformIgnorePatterns } = require('./.jest');

// jest config for server render environment
module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'md'],
  moduleNameMapper,
  transform: {
    '\\.tsx?$': './node_modules/@ant-design/tools/lib/jest/codePreprocessor',
    '\\.js$': './node_modules/@ant-design/tools/lib/jest/codePreprocessor',
    '\\.md$': './node_modules/@ant-design/tools/lib/jest/demoPreprocessor',
    '\\.(jpg|png|gif|svg)$': './node_modules/@ant-design/tools/lib/jest/imagePreprocessor',
  },
  testRegex: 'check-site\\.(j|t)s$',
  testEnvironment: 'node',
  transformIgnorePatterns,
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.test.json',
    },
  },
};
/* 这个配置文件是为 Jest 测试框架定制的，特别是为了在一个服务端渲染的环境中运行测试。它定义了一系列关于如何处理和转换测试文件、模块解析规则、测试环境设置等的关键配置。下面是对这个配置文件主要部分的详细解释：

moduleFileExtensions:
指定了 Jest 应该解析的模块文件扩展名。这里包括了 TypeScript (ts, tsx)、JavaScript (js) 以及 Markdown (md) 文件。这意味着 Jest 会尝试加载这些扩展名的文件作为模块。
moduleNameMapper:
这个配置项从 ./.jest 文件中导入，它通常用于映射模块名称到文件系统中的实际路径。这对于模拟或别名模块特别有用，尤其是在处理大型项目或需要模拟 Node.js 内置模块时。
transform:
定义了 Jest 应该如何转换不同的文件类型。这里为 TypeScript/JavaScript 文件、Markdown 文件以及图片文件指定了不同的预处理器。
对于 .tsx? 和 .js 文件，使用了 @ant-design/tools/lib/jest/codePreprocessor 预处理器，这很可能是为了处理 TypeScript 编译、Babel 转换等。
对于 .md 文件，使用了 @ant-design/tools/lib/jest/demoPreprocessor，这可能是为了解析 Markdown 文件中的特定语法或结构，以便在测试中使用。
对于图片文件（.jpg, .png, .gif, .svg），使用了 @ant-design/tools/lib/jest/imagePreprocessor，这可能是为了将这些文件转换为 Jest 可以理解的格式，或者简单地忽略它们。
testRegex:
定义了 Jest 应该查找的测试文件的正则表达式。在这个例子中，它只查找文件名以 check-site. 开头，且扩展名为 .js 或 .ts 的文件。
testEnvironment:
指定了 Jest 测试的运行环境。这里设置为 'node'，意味着测试将在 Node.js 环境中运行，而不是默认的浏览器环境。这对于服务端渲染的测试特别有用。
transformIgnorePatterns:
这个配置项也是从 ./.jest 文件中导入的，用于指定 Jest 应该忽略转换的文件模式。这通常用于性能优化，避免转换大型库或 Node.js 内置模块。
globals:
定义了全局变量。这里，它配置了 ts-jest（一个 TypeScript 转换器），指定了 TypeScript 配置文件的位置（./tsconfig.test.json）。这对于确保 TypeScript 测试文件使用正确的编译选项很重要。
总的来说，这个配置文件为 Jest 测试框架提供了一个定制化的服务端渲染测试环境，包括文件处理、模块解析、测试文件匹配、测试环境设置以及全局变量配置等方面的详细设置。 */
