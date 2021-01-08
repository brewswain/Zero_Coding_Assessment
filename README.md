# Project startup

## Pre-requisites


This project currently assumes that you have Yarn installed. If you're using npm instead:

### **package.json**

- Delete the root `package.json` file
- Rename `package.json_npm` to `package.json`

### **package-lock.json**

- Delete the root `yarn.lock` file
- Rename `package-lock.json_bak` to `package-lock.json`

---

## Installing Dependencies

Please begin by using `yarn install` in the root directory. If you have npm, use `npm install` instead.

Once that's done, feel use `yarn add-all`  if you have Yarn installed.

If you're using npm, use `npm run add-all`.

If the installs give problems, please navigate into both the client/ and the server/ folders and manually run your install scripts.

---



## Starting up Project

If you have Yarn installed, please use the following commands as needed for testing:

- `yarn start` - This concurrently runs the server and client, allowing for easy spooling up. 
- `yarn client` - If you want to view the front-end only, use this script! Please note that the shop items won't render as it's reliant on pulling data from the server to populate them.
- `yarn server` - If you wish to test the back-end only, use this script!

If however, you're using npm, please use the following commands as needed:

- `npm run start`
- `npm run client`
- `npm run server`

---

## Backend Testing

- If you wish to use Postman to make some API requests to the backend, I recommend this data shape for the '/addItems' endpoint if you're testing to pass:

```
{
    "id": 125,
    "title": "Test title",
    "subtitle": "Test 2",
    "price": 10,
    "imageUrl": "https://i.ibb.co/2S6GW5q/cocktail.png",
    "backgroundColor": "#bfb0de"
}
```

Please keep in mind that this means that an item will be added to the backend. If by the time I send this project I added a delete functionality (Hopefully I will but not high on priorities), this means that the frontend will render a new Item with the 'Test title' information added.

If you were to make the shape incorrect for testing purposes, mongoose _should_ catch them and return errors in a readable format.

---

## Frontend Testing

Please note that I haven't done any UI work yet so it looks pretty messy 😳 

Here we can test the Cart functionality (Click the cart icon in the header to play with it!) as well as item population. Depending on time constraints I may add a super simple checkout page for fun later down the line, but for now what you see is what you get!

---

## Feedback appreciated!

While this is a WIP, any criticisms or observations made would be super useful, so please lemme know if you have any questions, concerns, comments, etc!
