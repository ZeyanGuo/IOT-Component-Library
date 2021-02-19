const { spawn } = require("child_process");
const path = require("path");
const iconv = require("iconv-lite");
const chalk = require("chalk");
const command =
  process.platform === "win32"
    ? '".\\node_modules\\.bin\\webpack.cmd"'
    : "./node_modules/.bin/webpack";
const webpack = spawn(
  //监听component是否修改
  command,
  ["--config", "./build/webpack.component.watch.js"],
  {
    cwd: path.resolve(__dirname, "../"),
    shell: true,
  }
);

spawn("npm", ["run", "start:storybook"], {
  //启动storybook
  cwd: path.resolve(__dirname, "../"),
  shell: true,
  stdio: "inherit",
});

/**
 * windows terminal 的默认编码格式是gbk，因此需要使用gbk进行解码
 * @param {Buffer} data 需解码数据
 */
const decodeData = (data) => {
  const decodeData =
    process.platform === "win32" ? iconv.decode(data, "gbk") : data;

  return decodeData;
};

webpack.stdout.on("data", (data) => {
  console.log(`${chalk.green("webapck")}: ${decodeData(data)}`);
});

webpack.stderr.on("data", (data) => {
  console.error(
    `${chalk.red("Error webapck:")} ${chalk.red(decodeData(data))}`
  );
});

webpack.on("close", (code) => {
  console.log(`${chalk.green("webapck")}: exit ${code}`);
});
