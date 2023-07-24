
# Airport Backend System
**currently under development**

This is Airport Backend System - 


## Tech Stack

**Server:** Node, Express, MySQL, Sequelize




## API Reference

#### Get all items

```http
  GET /api/v1/airplane
```

#### Post item

```http
  POST /api/v1/airplane
```

| body parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `modelNumber`      | `String` | **Required**. it cant be empty |
| `capacity`      | `Integer` | it should be Integer |
