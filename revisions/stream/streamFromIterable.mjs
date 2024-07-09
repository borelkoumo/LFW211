import { Readable } from "stream"
const data = '1KLC5SOznuHA0VTmBUMH461WkW00kvjsTbK70FNQwpqQxP5TWmnE9sUqohsF7VXwXcNJZrf9lYZIQQfj36RuAgBf4Z2UXzkpiYrlFlpFdDf7I7CULrWqVns8LEu04pNyKDFdz67PabXA1UyNWw5LRPE4YKXOpDXEE8AfRWshiZ1YtA4P4WA5lPlbFNgO0sMx65yKNHid2mTAb3W511axckoTfcXOAbTrLkxPhDrgGIWflm8AKT3ehkjIAjDfhBqguAP5Whzsj8FHF6T9gu1KZHHcwBdK7mHWSISz63lMOEGoZtLos4CgZRS3eui7bWmjJNU1bs1DfNprAOpH6g4CscTAwl7vKdGL4qzcshONoKsCqLg56GHYKnFkeBBoonbVIbWuDmrbVcuPrayajZ'.split('E')


const myStream = Readable.from(data)
myStream.on('data', (chunk) => {
  console.log(`a chunk: ${chunk}`)
})
.on('end', ()=> {})