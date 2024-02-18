const { Worker, isMainThread, workerData } = require("worker_threads")

if (isMainThread) {
  console.log(`Main Thread...${process.pid}`)
  new Worker(__filename, {
    workerData: [7, 6, 8, 1],
  })
  new Worker(__filename, {
    workerData: [1, 6, 2, 5],
  })
} else {
  console.log(`Worker Thread...${process.pid}`)
  console.log(`${workerData} sorted is ${workerData.sort()}`)
}
