import { createReadStream } from 'fs'
import { parse } from 'csv-parse'
import FilterByCountry from './lib/FilterByCountryStream.js'
import AggregateProfits from './lib/AggregateProfitsStream.js'
import Monitor from './lib/MonitorStream.js'

const csvParser = parse({
  columns: true
})

createReadStream('./data/salesByContries.csv')
  .pipe(csvParser)
  .pipe(new Monitor())
  .pipe(new FilterByCountry('Italy'))
  .pipe(new AggregateProfits())
  .pipe(process.stdout)