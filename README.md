# BitOps - Bitbucket Repo Provisioning

BitOps is a self-service internal developer platform (IDP) that automates Bitbucket repository creation with predefined configurations like branch protections. It uses **FastAPI (Python)** for the backend and **Vite + React (TypeScript)** for the frontend.

---

## 📜 Features
- ✅ **Provision New Repositories** in Bitbucket
- ✅ **Enforce Branch Protections** automatically
- ✅ **Vault Integration** for secure API token management
- ✅ **PostgreSQL** database for tracking repo requests
- ✅ **Dockerized & Deployable** with Docker Compose

---

## 🛠 Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-org/bitops.git
cd bitops
```

### 2️⃣ Set Up Vault Secrets
Make sure you have **HashiCorp Vault** running. Store your Bitbucket API token in Vault:
```sh
vault kv put secret/bitbucket token="your_bitbucket_api_token"
```

### 3️⃣ Start the Application
```sh
docker-compose up --build
```

### 4️⃣ Access the App
- **Frontend (React UI):** [http://localhost:5173](http://localhost:5173)  
- **Backend (FastAPI API):** [http://localhost:8000](http://localhost:8000)  

---

## 🚀 How to Use
1. Open the **frontend UI** at `http://localhost:5173`
2. Enter the **Bitbucket workspace** and **repository name**
3. Click **"Create Repo"**
4. 🎉 Your repo is provisioned with branch protections!

---

## ⚙️ Environment Variables

| Variable            | Description                      | Default |
|---------------------|--------------------------------|---------|
| `DATABASE_URL`      | PostgreSQL connection string  | `postgresql://postgres:password@db:5432/repos` |
| `VAULT_ADDR`        | Vault server URL             | `http://vault:8200` |
| `BITBUCKET_API_URL` | Bitbucket API base URL       | `https://api.bitbucket.org/2.0` |

---

## 🛠 Troubleshooting

### 1️⃣ Frontend Not Loading?
Run:
```sh
docker-compose logs frontend
```
Check if Vite is running on **port 5173**.

### 2️⃣ Backend Not Responding?
Try:
```sh
curl http://localhost:8000
```
If it fails, restart:
```sh
docker-compose down --volumes
docker-compose up --build
```

### 3️⃣ Docker Issues?
Force clean everything:
```sh
docker system prune -a --volumes
```

---

## 💡 Next Steps
- **✅ Implement branch protection rules** (`PUT /branch-restrictions`)
- **✅ Add Vault secret requests** via UI
- **✅ Automate user provisioning in Bitbucket**
- **✅ Deploy to AWS with ECS/Fargate**

---

## 📜 License
MIT License - use freely and improve it!

---

## 🎯 Contributors
👨‍💻 **Your Name** - *Project Lead*  
💬 **Want to contribute?** Open a PR!

---

🔥 Happy coding, and let's make **BitOps** the best internal DevOps tool ever! 🚀

