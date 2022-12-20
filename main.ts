import PocketBase from "npm:pocketbase";

const pb = new PocketBase('https://pb-avdo.fly.dev');

const record = await pb.collection('users').getOne('jkyehf2bnd7qy5f');

console.log(record);