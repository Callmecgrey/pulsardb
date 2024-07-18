# pulsardb

```
pulserdb/
├── server/
│   ├── nodejs/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── utils/
│   │   │   ├── app.js
│   │   │   └── server.js
│   │   ├── config/
│   │   ├── tests/
│   │   ├── package.json
│   │   ├── .eslintrc.json
│   │   └── README.md
│   │
│   ├── cpp/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── utils/
│   │   │   ├── main.cpp
│   │   │   └── CMakeLists.txt
│   │   ├── include/
│   │   ├── tests/
│   │   ├── cpplint.py
│   │   └── README.md
│   │
│   └── python/
│       ├── src/
│       │   ├── controllers/
│       │   ├── models/
│       │   ├── routes/
│       │   ├── services/
│       │   ├── utils/
│       │   ├── app.py
│       │   └── server.py
│       ├── config/
│       ├── tests/
│       ├── requirements.txt
│       ├── pylintrc
│       └── README.md
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
│   ├── tests/
│   ├── package.json
│   ├── .eslintrc.json
│   └── README.md
│
├── common/
│   ├── utils/
│   ├── models/
│   └── README.md
│
├── deployment/
│   ├── aws/
│   │   ├── scripts/
│   │   ├── templates/
│   │   └── README.md
│   ├── digital_ocean/
│   │   ├── scripts/
│   │   ├── templates/
│   │   └── README.md
│   ├── cloudflare_r2/
│   │   ├── scripts/
│   │   ├── templates/
│   │   └── README.md
│   └── README.md
│
├── docs/
│   ├── api/
│   ├── database_schema/
│   ├── deployment_guides/
│   └── README.md
│
├── scripts/
│   ├── database_init/
│   ├── migration/
│   └── README.md
│
├── tests/
│   ├── load/
│   └── README.md
│
├── static/
│   └── README.md
│
├── .gitignore
├── docker-compose.yml
├── Dockerfile
└── README.md
```