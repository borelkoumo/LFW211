process.stdin
  .on('data', (chunk) => {
    console.log('New data available')
    console.log(`Chunk read ${chunk.length} bytes: ${chunk.toString()}`)
  })