# deno_restapi

## Installation
1. clone repo.
2. open database/db.ts(denodb.ts for lib **deno_db**) change <<font color=#008000>MONGO_URL</font>> to connect your own mongo db.
3. run ```deno run --allow-net --allow-write --allow-read --allow-plugin --unstable index.ts```

## Uasge
access the following endpoint on <http://localhost:7000>


| METHOD | URL            | Description    |
|--------|----------------|----------------|
| GET    | /api/cars      | Return all cars|
| POST   | /api/cars      | Create a car   |
| PUT    | /api/cars/:id  | Update car     |
| DELETE | /api/cars/:id  | Delete car     |