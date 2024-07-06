import express from 'express';
import { brandinsert, getbrandform } from '../../controllers/admin/brandcontroller.js';
const brandroute = express.Router()

brandroute.get("/" , getbrandform)
.post("/" , brandinsert)


export default brandroute