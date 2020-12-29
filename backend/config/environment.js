const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/sei-project-3-tripsavvy'
const port = process.env.PORT || 8081
const secret = process.env.SECRET || 'shhhh its a secret'

module.exports = {
  dbURI,
  port,
  secret
}
