// doc: https://github.com/raineorshine/npm-check-updates/tree/v16.14.6#readme
const path = require('path');

const rcOrg = ['@rc-component/', 'rc-'];
const check = ['@ant-design/', ...rcOrg];

// rules: https://github.com/ant-design/ant-design/pull/45593#issuecomment-1784891887
module.exports = {
  packageFile: path.resolve(__dirname, './package.json'),
  upgrade: false, // use `npx npm-check-updates -u` to upgrade
  packageManager: 'npm',
  dep: ['prod'], // check only prod dependencies
  // https://github.com/raineorshine/npm-check-updates#filter
  filter: (name) => {
    if (name === '@ant-design/cssinjs') {
      return false;
    }
    return check.some((prefix) => name.startsWith(prefix));
  },
  // https://github.com/raineorshine/npm-check-updates#target
  target: (name, semver) => {
    const { operator } = semver[0] ?? {};

    // rc-component
    if (rcOrg.some((prefix) => name.startsWith(prefix))) {
      // `^` always upgrade latest, otherwise follow semver.
      if (operator === '^') {
        return 'latest';
      }
    }

    return 'semver';
  },
};

/* 这段配置代码是为npm-check-updates（ncu）工具定制的，用于管理和更新Node.js项目的依赖包。npm-check-updates是一个命令行工具，用于检查、更新和安装项目的依赖项到最新版本。下面是对这段配置代码的详细解读：

路径设置：
const path = require('path'); 引入Node.js的path模块，用于处理文件和目录的路径。
packageFile: path.resolve(__dirname, './package.json'), 指定了npm-check-updates将操作的package.json文件的位置，即当前目录下的package.json文件。
依赖前缀定义：
const rcOrg = ['@rc-component/', 'rc-']; 定义了一个数组，包含两个前缀，用于识别rc-component组织或rc-开头的依赖包。
const check = ['@ant-design/', ...rcOrg]; 扩展了rcOrg数组，增加了@ant-design/前缀，表示同时检查@ant-design/和rc-相关的依赖包。
更新控制：
upgrade: false, 设置为false表示默认情况下不自动更新依赖包，需要通过命令行npx npm-check-updates -u来手动执行更新。
packageManager: 'npm', 指定使用的包管理器为npm。
dep: ['prod'], 指定只检查生产环境（prod）的依赖项。
过滤器：
filter: (name) => {...}, 定义了一个过滤器函数，用于决定哪些依赖包应该被检查。这里特别排除了@ant-design/cssinjs包，并且只包括以@ant-design/或rc-开头的依赖包。
版本目标策略：
target: (name, semver) => {...}, 定义了一个函数，用于决定依赖包的更新策略。对于以rc-开头的依赖包，如果版本号前缀为^（表示总是升级到最新兼容版本），则将其更新为latest（即最新版本）；否则，遵循semver（语义化版本控制）规则来更新。
总结来说，这段配置代码为npm-check-updates定制了特定的行为，包括指定要检查的package.json文件、只检查生产环境的依赖项、过滤掉不需要检查的依赖包（如@ant-design/cssinjs），以及对特定前缀的依赖包（如@ant-design/和rc-）应用不同的版本更新策略。这样的配置有助于更精确地管理和更新项目的依赖包。 */
