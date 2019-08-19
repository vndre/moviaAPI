# Movia API🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️🎞️ 📼

[public playground](http://moviadb.cerberus.ansky.sh)

## Run locally

1) rename `.env.example` to `.env` and configure variables
2) install dependencies

```bash🎞️🎞️
yarn start
yarn test
yarn build
```

## Usage

Queries:

```graphql
{
  movies {
    title
    year
    rating
    actors {
      name
      birthday
      country
      directors {
        name
        birthday
        country
      }
    }
  }
}
```

Mutations:

```graphql
mutation {
  createUser(username: $username, password: $password) {
    token
    user {
      id
      name
    }
  }
}
```

```graphql
mutation {
  login(username: $username, password: $password) {
    token
    user {
      id
      name
    }
  }
}
```

Both, creating and login a user returns a JWT used to authorize the user to query more information.

By sending the token in the header of the request with the next format the user is able to query private fields:

```
{
  "authorization": "<returned token>"
}
```

```graphql
{
  movies {
    scoutbase_rating
  }
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)