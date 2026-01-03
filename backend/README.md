используем Feature-based Layered Architecture 

src/
├─ app.ts
├─ server.ts
│
├─ config/
│   ├─ env.ts
│   ├─ jwt.ts
│   ├─ telegram.ts
│   └─ database.ts
│
├─ db/
│   ├─ sequelize.ts
│   ├─ models.ts
│   └─ migrations/
│
├─ modules/
│   ├─ auth/
│   │   ├─ auth.controller.ts
│   │   ├─ auth.service.ts
│   │   ├─ auth.routes.ts
│   │   └─ auth.types.ts
│   │
│   └─ users/
│       ├─ user.model.ts
│       ├─ user.repository.ts
│       ├─ user.service.ts
│       ├─ user.controller.ts
│       └─ user.routes.ts
│
├─ shared/
│   ├─ middlewares/
│   │   ├─ auth.middleware.ts
│   │   └─ error.middleware.ts
│   │
│   ├─ utils/
│   │   └─ telegram.ts
│   │
│   └─ errors/
│       └─ ApiError.ts
│
└─ types/
    └─ express.d.ts