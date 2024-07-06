import express from 'express';
import { categoryinsert, getcategoryform } from '../../controllers/admin/categorycontroller';
 const categoryroute = express.Router()

 categoryroute.get("/" , getcategoryform)
 .post("/" , categoryinsert )