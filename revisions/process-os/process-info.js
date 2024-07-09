console.log('process.cwd = ', process.cwd());
console.log('process.platform = ', process.platform);
console.log('process.env.PWD = ', process.env.PWD);
// process.env.PWD = '/home'
// console.log('process.env.PWD prop descriptor = ', Object.getOwnPropertyDescriptors(process.env))
console.log('process uptime ', process.uptime());
console.log('process memoryUsage ', process.memoryUsage());
console.log('process cpuUsage ', process.cpuUsage());
