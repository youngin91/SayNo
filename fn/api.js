const axios = require("axios")
const express = require("express")
const cors = require("cors")
const serverless = require("serverless")

const app = express()
const router = express.Router()

app.use(
  cors({
    origion:"*"
  })
)

router.get("/", async (req,res) => {
  try{
    
  }catch(err){console.log(err)}
})

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);