# 🏥 FYP App - Healthcare Management System

<div align="center">

[![Node.js][nodejs-shield]][nodejs-url]
[![Angular][angular-shield]][angular-url]
[![TypeScript][typescript-shield]][typescript-url]
[![JavaScript][javascript-shield]][javascript-url]
[![HTML5][html5-shield]][html5-url]
[![CSS3][css3-shield]][css3-url]
[![License][license-shield]][license-url]
[![Build Status][build-shield]][build-url]
[![PRs Welcome][prs-shield]][prs-url]

**A comprehensive healthcare management system built with Angular frontend and Node.js backend**

[🚀 Demo](#demo) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://github.com/AliOding12/PatientCare_AI_MIS_/issues) • [✨ Request Feature](https://github.com/AliOding12/PatientCare_AI_MIS_/issues)

</div>

---

## 📋 Table of Contents

- [🎯 About The Project](#about-the-project)
  - [✨ Key Features](#key-features)
  - [🏗️ Built With](#built-with)
  - [🎨 Screenshots](#screenshots)
- [🚀 Getting Started](#getting-started)
  - [📋 Prerequisites](#prerequisites)
  - [⚡ Quick Start](#quick-start)
  - [🔧 Installation](#installation)
- [💻 Usage](#usage)
  - [👨‍⚕️ For Doctors](#for-doctors)
  - [👥 For Patients](#for-patients)
  - [🔒 For Admins](#for-admins)
- [🏗️ Project Architecture](#project-architecture)
  - [📁 Directory Structure](#directory-structure)
  - [🔄 API Endpoints](#api-endpoints)
- [🧪 Testing](#testing)
- [📈 Roadmap](#roadmap)
- [🤝 Contributing](#contributing)
- [📄 License](#license)
- [👥 Contact](#contact)
- [🙏 Acknowledgments](#acknowledgments)

---

## 🎯 About The Project

**FYP App** is a comprehensive healthcare management system designed to streamline interactions between doctors, patients, and administrators. Built as a Final Year Project (FYP), this full-stack application provides a modern, user-friendly interface for managing medical appointments, patient records, and healthcare workflows.

### ✨ Key Features

#### 🏥 **Core Healthcare Features**
- 📅 **Appointment Management** - Schedule, reschedule, and manage medical appointments
- 👨‍⚕️ **Doctor Dashboard** - Comprehensive interface for healthcare providers
- 👤 **Patient Portal** - Easy-to-use patient interface for medical services
- 📊 **Reports & Analytics** - Generate and view medical reports
- 💬 **Chat System** - Real-time communication between doctors and patients
- 🔒 **Secure Authentication** - Multi-role authentication system

#### 🚀 **Technical Features**
- 📱 **Responsive Design** - Mobile-first, cross-platform compatibility
- 🔄 **Real-time Updates** - Live data synchronization
- 📄 **File Upload** - Secure document and image handling
- 🎨 **Modern UI/UX** - Clean, intuitive interface design
- 🔐 **Role-based Access** - Admin, Doctor, and Patient roles
- 📈 **Performance Optimized** - Fast loading and smooth interactions

### 🏗️ Built With

<div align="center">

| Frontend | Backend | Database | Tools |
|----------|---------|----------|-------|
| [![Angular][angular-shield]][angular-url] | [![Node.js][nodejs-shield]][nodejs-url] | [![Database][database-shield]][database-url] | [![VS Code][vscode-shield]][vscode-url] |
| [![TypeScript][typescript-shield]][typescript-url] | [![Express.js][express-shield]][express-url] | | [![Git][git-shield]][git-url] |
| [![HTML5][html5-shield]][html5-url] | [![JavaScript][javascript-shield]][javascript-url] | | |
| [![CSS3][css3-shield]][css3-url] | | | |

</div>

### 🎨 Screenshots

> *Screenshots will be added here showcasing the main interfaces*

---

## 🚀 Getting Started

### 📋 Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v18+ recommended)
  ```bash
  node --version
  ```
- **npm** or **yarn**
  ```bash
  npm --version
  ```
- **Angular CLI**
  ```bash
  npm install -g @angular/cli
  ```

### ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/AliOding12/PatientCare_AI_MIS_.git
cd FYP_App

# Install dependencies and start both frontend and backend
npm run dev
```

### 🔧 Installation

#### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/AliOding12/PatientCare_AI_MIS_.git
cd FYP_App
```

#### 2️⃣ **Setup Backend Server**
```bash
cd server_side
npm install
npm start
```

#### 3️⃣ **Setup Frontend Client**
```bash
cd client_side
npm install
ng serve
```

#### 4️⃣ **Access the Application**
- **Frontend**: http://localhost:4200
- **Backend API**: http://localhost:3000
- **API Documentation**: http://localhost:3000/api-docs

---

## 💻 Usage

### 👨‍⚕️ For Doctors

```javascript
// Doctor login and dashboard access
const doctorFeatures = {
  dashboard: "Comprehensive patient overview",
  appointments: "Manage and schedule patient appointments",
  reports: "Generate and review medical reports",
  chat: "Communicate with patients in real-time",
  sessions: "Manage consultation sessions"
};
```

### 👥 For Patients

```javascript
// Patient portal features
const patientFeatures = {
  appointments: "Book and manage appointments",
  profile: "Update personal and medical information",
  chat: "Communicate with healthcare providers",
  reports: "View medical reports and history",
  notifications: "Receive updates and reminders"
};
```

### 🔒 For Admins

```javascript
// Admin panel capabilities
const adminFeatures = {
  userManagement: "Manage doctors and patients",
  systemSettings: "Configure application settings",
  reports: "Generate system-wide analytics",
  dataManagement: "CRUD operations on all entities"
};
```

---

## 🏗️ Project Architecture

### 📁 Directory Structure

```
FYP_App/
├── 📄 test.js                    # Main test file
├── ⚙️  .vscode/                  # VS Code configuration
│   └── settings.json
├── 🖥️  client_side/              # Angular Frontend
│   ├── 📦 package.json           # Frontend dependencies
│   ├── ⚙️  angular.json          # Angular configuration
│   ├── 🅰️  src/                  # Source code
│   │   ├── 🏠 index.html         # Main HTML file
│   │   ├── 🎨 styles.css         # Global styles
│   │   └── 📱 app/               # Angular app components
│   │       ├── 🧩 components/    # Reusable components
│   │       ├── 🔧 services/      # Data services
│   │       └── 📊 data.json      # Mock data
│   └── 🌐 public/                # Static assets
└── 🖧  server_side/               # Node.js Backend
    ├── 📦 package.json           # Backend dependencies
    ├── 🚀 server.js              # Main server file
    ├── 🎮 Controllers/           # Business logic
    │   ├── 👑 Admin_controllers/ # Admin operations
    │   ├── 👨‍⚕️ doctor_controllers/ # Doctor operations
    │   ├── 👤 patient_controller/# Patient operations
    │   └── 📱 app_controller/    # App-wide operations
    ├── 💾 Database/              # Database configuration
    ├── 🛡️  middleware/           # Authentication & validation
    ├── 🛣️  Routes/               # API routes
    ├── 📤 uploads/               # File uploads
    └── 🌐 views/                 # Frontend templates
        ├── 🎨 dashboard/         # Dashboard views
        ├── 💬 chatpage/          # Chat interface
        ├── 📅 calender/          # Calendar component
        └── 📊 reportinterface/   # Reports interface
```

### 🔄 API Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| `POST` | `/api/auth/login` | User authentication | Public |
| `GET` | `/api/doctor/dashboard` | Doctor dashboard data | Doctor |
| `POST` | `/api/appointments` | Create appointment | Patient |
| `GET` | `/api/patients` | Get patient list | Doctor/Admin |
| `POST` | `/api/upload` | File upload | Authenticated |
| `GET` | `/api/reports` | Generate reports | Doctor/Admin |

---

## 🧪 Testing

```bash
# Run backend tests
cd server_side
npm test

# Run frontend tests
cd client_side
ng test

# Run end-to-end tests
ng e2e

# Run all tests
npm run test:all
```

---

## 📈 Roadmap

### 🎯 **Phase 1: Core Features** ✅
- [x] User authentication system
- [x] Basic appointment management
- [x] Doctor and patient dashboards
- [x] File upload functionality

### 🚀 **Phase 2: Enhanced Features** 🔄
- [ ] Real-time chat system
- [ ] Advanced reporting and analytics
- [ ] Mobile app development
- [ ] Payment integration
- [ ] Video consultation feature

### 🌟 **Phase 3: Advanced Features** 📅
- [ ] AI-powered diagnosis assistance
- [ ] Telemedicine capabilities  
- [ ] Integration with wearable devices
- [ ] Multi-language support
- [ ] Advanced security features

See the [open issues](https://github.com/AliOding12/PatientCare_AI_MIS_/issues) for a full list of proposed features and known issues.

---

## 🤝 Contributing

We love your input! We want to make contributing to FYP App as easy and transparent as possible.

### 🌟 **Ways to Contribute**

1. 🐛 **Report Bugs** - Submit bug reports
2. 💡 **Suggest Features** - Propose new features
3. 📝 **Improve Documentation** - Help with docs
4. 🔧 **Submit Pull Requests** - Contribute code

### 🚀 **Quick Contribution Guide**

```bash
# 1. Fork the project
# 2. Create your feature branch
git checkout -b feature/AmazingFeature

# 3. Commit your changes
git commit -m '✨ Add some AmazingFeature'

# 4. Push to the branch
git push origin feature/AmazingFeature

# 5. Open a Pull Request
```

### 📋 **Development Guidelines**

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Test your changes thoroughly

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👥 Contact

**Project Team**
- 👨‍💻 **Developer**: Abbas Ali - [abbasali1214313@gmail.com](mailto:abbasali1214313@gmail.com)
- 🔗 **LinkedIn**: [linkedin.com/in/abbasali](https://linkedin.com/in/abbasali)
- 📂 **Project Link**: [https://github.com/yourusername/FYP_App](https://github.com/AliOding12/PatientCare_AI_MIS_.git)

---

## 🙏 Acknowledgments

- 🏥 **Healthcare Industry Professionals** - For domain expertise and guidance
- 👨‍🏫 **Academic Supervisors** - For project mentorship and support
- 🌐 **Open Source Community** - For the amazing tools and libraries
- 📚 **Documentation Resources** - Angular, Node.js, and related technologies
- 🎨 **Design Inspiration** - Modern healthcare UI/UX patterns
- 🧪 **Testing Community** - For testing frameworks and best practices

---

<div align="center">

### 🌟 **Star this repository if you found it helpful!** 🌟

[![GitHub stars](https://img.shields.io/github/stars/AliOding12/PatientCare_AI_MIS_.svg?style=social&label=Star&maxAge=2592000)](https://github.com/AliOding12/PatientCare_AI_MIS_/stargazers/)

**[⬆ Back to Top](#-fyp-app---healthcare-management-system)**

</div>

<!-- MARKDOWN LINKS & IMAGES -->
[nodejs-shield]: https://img.shields.io/badge/Node.js-18+-green.svg?style=for-the-badge&logo=node.js&logoColor=white
[nodejs-url]: https://nodejs.org/
[angular-shield]: https://img.shields.io/badge/Angular-18+-red.svg?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[typescript-shield]: https://img.shields.io/badge/TypeScript-5+-blue.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[javascript-shield]: https://img.shields.io/badge/JavaScript-ES6+-yellow.svg?style=for-the-badge&logo=javascript&logoColor=black
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[html5-shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[html5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[css3-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[css3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[express-shield]: https://img.shields.io/badge/Express.js-black?style=for-the-badge&logo=express&logoColor=white
[express-url]: https://expressjs.com/
[database-shield]: https://img.shields.io/badge/Database-MongoDB-green?style=for-the-badge&logo=mongodb&logoColor=white
[database-url]: https://www.mongodb.com/
[vscode-shield]: https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white
[vscode-url]: https://code.visualstudio.com/
[git-shield]: https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white
[git-url]: https://git-scm.com/
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge
[license-url]: https://github.com/yourusername/FYP_App/blob/main/LICENSE
[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=for-the-badge
[build-url]: https://github.com/AliOding12/PatientCare_AI_MIS_/actions
[prs-shield]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge
[prs-url]: https://github.com/AliOding12/PatientCare_AI_MIS_/pulls