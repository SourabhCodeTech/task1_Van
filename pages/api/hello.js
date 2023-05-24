// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [

      {

        "name": "Justice Campos",

        "points": 23,

        "avatar": "https://i.pravatar.cc/300"

      },

      {

        "name": "Miranda Carpenter",

        "points": 32,

        "avatar": "https://i.pravatar.cc/300"

      },

      {

        "name": "Kailyn Estes",

        "points": 34,

        "avatar": "https://i.pravatar.cc/300"

      },

      {

        "name": "Iliana Carson",

        "points": 12,

        "avatar": "https://i.pravatar.cc/300"

      }
    ]
  )
}
