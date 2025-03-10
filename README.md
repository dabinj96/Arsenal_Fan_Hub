# Arsenal Fan Hub

A web application that displays Arsenal’s upcoming fixtures, recent results, player stats, and simple analytics. This project demonstrates a modern DevSecOps workflow by integrating CI/CD automation, containerization, and security scans into the development process.

---

## Table of Contents
1. [Project Overview](#project-overview)  
2. [Architecture](#architecture)  
3. [Features](#features)  
4. [Tech Stack](#tech-stack)  
5. [Roadmap / Future Enhancements](#roadmap--future-enhancements)
6. [Contact](#contact)

---

## Project Overview

**Goal**: Create a dedicated Arsenal Football Club fan hub that aggregates live (or periodically updated) data, such as upcoming fixtures, past results, and player stats. The project is deployed with cloud infrastructure while integrating security scans and automated testing to exemplify DevSecOps best practices.

**Key Objectives**:
- Demonstrate a full-stack development process: from data ingestion to front-end UI.
- Showcase secure, automated build and deployment pipelines.
- Provide Infrastructure as Code (IaC) for consistent, reproducible environments.
- Incorporate basic observability (logging and monitoring) to ensure reliability.

---

## Architecture

Here's a high-level overview of how the components fit together:

1. **Front-End** (e.g., React / Vue / Angular) – Presents upcoming fixtures, match results, player stats, and analytics.
2. **Back-End** (Node.js / Express, or Python / Flask) – Exposes RESTful APIs to fetch data from the database.
3. **Database** (PostgreSQL / MongoDB) – Stores match and player details fetched from a football data API.
4. **CI/CD** – Automated pipelines (GitHub Actions) handle build, test, and deploy steps.
5. **Security Scans** – Tools like Dependabot, Semgrep, or Trivy run within the pipeline to detect vulnerabilities.
6. **IaC** (Terraform, AWS) – Automates provisioning of servers/containers, networking, and databases in the cloud.
7. **Observability** – Logging, monitoring, and alerts (e.g., CloudWatch, Prometheus/Grafana) for application health.

---

## Features

1. **Fixtures & Results**: Displays upcoming matches (date, opponent, location) and past match results.
2. **Player Stats**: Show goals, assists, appearances, and other details for each Arsenal player.
3. **Simple Analytics**: Summaries like win/loss streaks, goals scored/conceded, or top scorers.
4. **Automated CI/CD**: Runs tests, lints code, builds a Docker image, and deploys changes to the cloud.
5. **Security Integration**: Static analysis (SAST), dependency scanning, and container image scanning to ensure security from development to deployment.
6. **Infrastructure as Code**: Terraform scripts to provision AWS (or another cloud) resources for consistent deployments.
7. **Observability**: Logging and monitoring solutions to track application performance and detect errors.

---

## Tech Stack

- **Front-End**: React (or Vue / Angular)
- **Back-End**: Node.js/Express (or Python/Flask)
- **Database**: PostgreSQL (or MongoDB)
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions (or Jenkins/GitLab CI)
- **Security Tools**: Dependabot, Semgrep, Trivy, etc.
- **IaC**: Terraform (AWS or another cloud provider)
- **Monitoring**: AWS CloudWatch, Prometheus, or similar

---

## Roadmap / Future Enhancements

---

## Contact

- **Author**: https://www.linkedin.com/in/dabin-david-jang-70750a166/
- **Email**: david12jang@gmail.com
