# Angular Installation & Project Setup Guide

### 1. Prerequisites: Node.js and npm
Angular requires an active LTS or maintenance LTS version of Node.js.

#### On Windows:
1. Download Node.js LTS from the official website:
   - [Node.js Official Downloads](https://nodejs.org/)
2. Run the installer (.msi) and follow on-screen instructions.
3. Open PowerShell as Administrator and configure execution policy if script execution is restricted:
   ```powershell
   Get-ExecutionPolicy
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

#### On Linux (Ubuntu):
```bash
# Update repository index
sudo apt update && sudo apt upgrade -y

# Add NodeSource PPA (Node.js 20.x LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Install Node.js and build tools
sudo apt install -y nodejs build-essential

# Verify versions
node -v
npm -v
```

---

### 2. Angular CLI Installation
The Angular CLI simplifies app development with code generation, building, and serving:
```bash
npm install -g @angular/cli

# Verify Angular CLI installation
ng version
```

---

### 3. Creating & Running Your First Angular App
```bash
# Generate a new project
ng new my-angular-app --routing --style=css

# Navigate to project directory
cd my-angular-app

# Run live development server
ng serve --open
```
Application will be hosted at `http://localhost:4200/`.

---

### 4. Useful Angular CLI Commands
| Command | Purpose |
| :--- | :--- |
| `ng new <project-name>` | Creates a new Angular workspace |
| `ng serve` | Runs dev server with live-reload |
| `ng generate component <name>` | Generates a new component (`ng g c <name>`) |
| `ng generate service <name>` | Generates a new service (`ng g s <name>`) |
| `ng generate module <name>` | Generates a new module (`ng g m <name>`) |
| `ng build` | Compiles the application into `dist/` bundle for production |
