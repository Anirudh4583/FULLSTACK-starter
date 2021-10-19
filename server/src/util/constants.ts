import dotenv from 'dotenv'

dotenv.config()

export const __prod__ = process.env.NODE_ENV === 'production'
export const __port__ = process.env.PORT || 4000

export const DB_USER = process.env.DB_USER
export const DB_PASS = process.env.DB_PASS
