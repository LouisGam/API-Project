import express from "express";
import db from "../mockdb/";


const router = express.Router();

//requests will reach these routes already matching /api/users

//Read user data
router.get("/:id?", async (req, res, next) => {
    try {
       //get user data and respond
       // destructure id from req.params
       const {id} = req.params || {};

       //Declare variable to hold retrieved data
       let data;

       //Conditional logic to fetch data based on id presence
       if (id) {
        //Fetch data for a specific user using id
        data = await db.getOne(id); //replace with your actual data retrieval function
        if (!data) {
            //Handle case where user with specfic id is not found
            return res.status(404).json({message: 'User not found'});
        }
       } else {
        //Fetch all users (if applicable)
        data = await db.getAll(); //Replace with your actual data retrieval function
       }

       //send retrieved data as JSON reponse
       res.json(data);

    } catch (error) {
       next(error);
    }
 });

 //Create a new user, data is sent with request body 
router.post("/", async (req, res, next) => {
    try {
        //Extract user data from request body
        const newUser = req.body;

        //Validation user data (optional but recommended)
        const validationErrors = validateUserData(newUser);//Replace with your validation function
        if (validationErrors) {
            return res.status(400).json({Message: 'Validation failed', errors: validationErrors});
        }
       //create user in database
       const data = await db.add(newUser);//Replace with your actual storage function

       //Send successful creation response
       res.status(201).json(data); // 201 Created status code for successful creation

    } catch (error) {
       next(error);
    }
 });



//Update an existing user
//Update user data is sent with request body
//User to be updated is id url parameter
router.put("/:id", async (req, res, next) => {
    try {
        //Destructure id from request parameters
        const { id } = req.params;

        //Extract update user data from request body

        const updateUser = req.body;

        //Validate update user data(optional but recommended)
        const validationErrors = validateUserData(updateUser); //Replace with validation function

        //Handle successful update or error response
        if (data) {
            //User update successfully, send update data
            res.json(data);
        } else {
            //User not found or other error(handle appropriately)
            res.status(404).json({message: 'User not found'}); // Example error response
        }

       //update user data and respond
    } catch (error) {
       next(error);
    }
 });

 //Delete an existing user
 //User to deleted is id url params

router.delete("/:id", async (req, res, next) => {
    try {
        //Destructure id from request parameters
        const { id } = req.params;

        //Delete user in database
        const data = await db.remove(id); //Replace with actual data storage function

        //Handle successful deletion or error response
        if (data) {
            //User deleted successfully, send a message(optional)
            res.json({message: 'User deleted'}); //Example succes response
        } else {
            //User not found or other error(handle appropiately)
            res.status(404).json({message: 'User not found'}); //Example error response
        }
       // get user data and respond
    } catch (error) {
       next(error);
    }
 });

export default router;