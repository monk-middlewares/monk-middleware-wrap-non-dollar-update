# monk-middleware-wrap-non-dollar-update
A monk middleware to wrap the update not in $ with $set

```bash
npm install --save monk-middleware-wrap-non-dollar-update
```

## Usage

```js
db.addMiddleware(require('monk-middleware-wrap-non-dollar-update'))

// this would usually replace the document
db.users.update({_id: 'userId'}, {
  username: 'foo'
})

// but with the middleware, it's equivalent to
db.users.update({_id: 'userId'}, {
  $set: {
    username: 'foo'
  }
})
// which only update the username field
```

## License

  MIT
