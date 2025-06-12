# 🏥 Hospital App (React Native Monorepo)

This repository contains the main mobile application for a hospital system. It uses a **modular architecture powered by Git submodules** to include independently maintained features:

- `About Us` module
- `Donate` module
- `Community` module

Each of these is a separate repository and integrated via Git submodules to support separation of concerns, code reuse, and independent deployment cycles.

---

## 📦 Monorepo Structure

```
hospital-app/
├── App.js # Root app component
├── index.js # Entry point for React Native
├── package.json # Project dependencies
├── babel.config.js
├── metro.config.js
├── navigation/
│ └── AppNavigator.js # Navigation stack using React Navigation
├── screens/ # Screens rendered in the main app
│ ├── HomeScreen.js
│ ├── AboutUsScreen.js
│ ├── DonateScreen.js
│ └── CommunityScreen.js
├── modules/ # Submodules live here
│ ├── about-us/ # Submodule: About Us feature
│ ├── donate/ # Submodule: Donation feature
│ └── community/ # Submodule: Community feature
├── .gitmodules # Git submodule config
└── README.md # Project overview and instructions
```
