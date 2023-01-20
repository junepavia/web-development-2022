import {Router} from 'express';
import express from "express";
import { Key } from 'readline';
import CreateReminderDto from '../dtos/create-reminder';
import Reminder from '../dtos/models/reminder';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users: any[]=[];

//all routes in here are starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

router.post('/',(req, res) => {
  const user = req.body;
   // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  users.push({ ...user, id: uuidv4() });
 res.send(user.firstName);
});

//users/2 => req.params { id: 2}
router.get('/:id',(req,res)=>{
  const { id }=req.params;

  const foundUser =users.find((user)=> user.id===id);
  res.send(foundUser);
});

router.delete('/:id',(req,res)=>{
  const { id }=req.params;

   users =users.filter((user)=> user.id !== id);
   res.send ('Deleted');
});

router.patch('/:id',(req,res)=>{
  const { id }=req.params;
  const { firstName, lastName, Age } = req.body;

  const user= users.find((user)=> user.id === id);

  if(firstName) user.firstName = firstName;
  
  if(lastName) user.lastName = lastName;
  
  if(Age) user.Age = Age;
  
 res.send('Updated');
});

/*let users: any[] = [];

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const foundUser = users.find((user) => user.id == id);

  res.send(foundUser);
});

router.post("/", (req, res) => {
  const user = req.body;

  const Id = uuidv4();
  const UserId = { ...user, id: Id };

  users.push(UserId);
  res.send(`User with the name ${user.firstName} added!`);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  users = users.filter((user) => user.id != id);

  res.send(`User with the id ${id} deleted.`);
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, city } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (city) user.city = city;

  res.send(`User with the id ${id} has been changed!`);
}); */

/*
const router = Router();
const reminders: Reminder[]=[];

router.get('/', (req,res) => {
    res.json(reminders);
});

router.post('/', (req, res) => {
    const {title} = req.body as CreateReminderDto;
    const reminder = new Reminder(title);
    reminders.push(reminder);
    res.status(201).json(reminder);
    
}); */




export default router;