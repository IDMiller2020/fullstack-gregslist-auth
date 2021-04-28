import mongoose from 'mongoose'
import AccountSchema from '../models/Account'
import CarSchema from '../models/Car'

class DbContext {
  Cars = mongoose.model('Car', CarSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
