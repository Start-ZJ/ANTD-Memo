const compileModules = [
  'react-sticky-box',
  'rc-tween-one',
  '@babel',
  '@ant-design',
  'countup.js',
  '.pnpm',
];

const ignoreList = [];

// cnpm use `_` as prefix
['', '_'].forEach((prefix) => {
  compileModules.forEach((module) => {
    ignoreList.push(`${prefix}${module}`);
  });
});

const transformIgnorePatterns = [
  // Ignore modules without es dir.
  // Update: @babel/runtime should also be transformed
  `[/\\\\]node_modules[/\\\\](?!${ignoreList.join('|')})[^/\\\\]+?[/\\\\](?!(es)[/\\\\])`,
];

function getTestRegex(libDir) {
  if (['dist', 'lib', 'es', 'dist-min'].includes(libDir)) {
    return 'demo\\.test\\.(j|t)sx?$';
  }
  return '.*\\.test\\.(j|t)sx?$';
}

module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFiles: ['./tests/setup.ts', 'jest-canvas-mock'],
  setupFilesAfterEnv: ['./tests/setupAfterEnv.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'md'],
  modulePathIgnorePatterns: ['/_site/'],
  moduleNameMapper: {
    '/\\.(css|less)$/': 'identity-obj-proxy',
    '^antd$': '<rootDir>/components/index',
    '^antd/es/(.*)$': '<rootDir>/components/$1',
    '^antd/lib/(.*)$': '<rootDir>/components/$1',
    '^antd/locale/(.*)$': '<rootDir>/components/locale/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', 'dekko', 'node', 'image.test.js', 'image.test.ts'],
  transform: {
    '\\.tsx?$': './node_modules/@ant-design/tools/lib/jest/codePreprocessor',
    '\\.(m?)js$': './node_modules/@ant-design/tools/lib/jest/codePreprocessor',
    '\\.md$': './node_modules/@ant-design/tools/lib/jest/demoPreprocessor',
    '\\.(jpg|png|gif|svg)$': './node_modules/@ant-design/tools/lib/jest/imagePreprocessor',
  },
  testRegex: getTestRegex(process.env.LIB_DIR),
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!components/*/style/index.tsx',
    '!components/style/index.tsx',
    '!components/*/locale/index.tsx',
    '!components/*/__tests__/type.test.tsx',
    '!components/**/*/interface.{ts,tsx}',
    '!components/*/__tests__/image.test.{ts,tsx}',
    '!components/__tests__/node.test.tsx',
    '!components/*/demo/*.tsx',
    '!components/*/design/**',
  ],
  transformIgnorePatterns,
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json',
    },
  },
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  // bail: true,
  maxWorkers: '50%',
};
/* 在讨论.jest.node.js、.jest.site.js、.jest.js和.jest.image.js这四个文件时，首先需要注意的是，Jest本身是一个JavaScript测试框架，而通常我们不会直接看到以.jest.xx.js这样命名的文件后缀，除非是在特定项目或配置中自定义了这样的命名约定。不过，基于这些名称，我们可以尝试从一般性的角度来解释它们可能代表的含义或用途。

1. .jest.js
通用配置：这个文件名很可能表示一个通用的Jest配置文件。在Jest项目中，通常会有一个jest.config.js或jest.config.ts文件来存储Jest的配置选项，如测试环境、模拟(mock)设置、转换器等。虽然这里用的是.jest.js，但可能只是命名习惯上的不同，其核心作用仍然是配置Jest。
作用：用于定义Jest的运行配置，包括测试文件的位置、测试环境的设置、模拟依赖等。
2. .jest.node.js
Node.js环境配置：这个文件名可能表示一个专门用于Node.js环境的Jest配置文件。在一些项目中，可能会根据不同的运行环境（如Node.js后端和浏览器前端）使用不同的Jest配置。
作用：为Node.js环境下的测试提供特定的配置，如不同的模拟设置、测试路径等。
3. .jest.site.js
网站或前端项目配置：这个文件名可能表示一个针对网站或前端项目的Jest配置文件。它可能包含了与网站或前端应用相关的特定测试配置，如模拟浏览器环境、测试DOM元素等。
作用：为网站或前端项目中的测试提供配置，确保测试能够在类似浏览器的环境中运行，并测试DOM交互等。
4. .jest.image.js
图像处理相关配置：虽然Jest本身不直接处理图像测试（除非是通过某种形式的模拟或快照测试），但.jest.image.js这个文件名可能表示一个与图像处理相关的Jest配置或测试脚本。它可能包含了对图像文件进行测试的特殊逻辑，如使用图像处理库来验证图像属性、生成快照等。
作用：可能用于配置或执行与图像处理相关的测试，如验证图像加载、图像处理函数的结果等。但需要注意的是，Jest通常不直接用于图像内容的详细测试，而是通过模拟或快照测试来验证与图像相关的代码行为。
总结
需要注意的是，上述解释都是基于文件名和Jest测试框架的一般性理解进行的推测。实际上，这些文件的具体内容和作用可能完全取决于项目的具体需求和配置。如果确实存在这样的文件，并且你想要了解它们的详细内容和作用，建议直接查看这些文件本身以及项目的相关文档和配置。

此外，Jest作为一个强大的测试框架，提供了丰富的配置选项和插件支持，使得它可以根据项目的不同需求进行灵活的配置和扩展。因此，在不同的项目中，你可能会看到不同命名和配置的Jest相关文件。 */
