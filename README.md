# GDPR Compliance Support Tool


A simple web-based GDPR awareness and guidance tool designed to help organisations better understand and apply **GDPR Article 5** and **Article 6**.

## Overview

This project was created to provide a practical and interactive way for users to learn about key GDPR concepts. It focuses on:

- **Article 5** – Data protection principles
- **Article 6** – Lawfulness of processing

The website includes training modules, a quiz, a risk scan, and a lawful basis helper. It is designed to support awareness, improve understanding, and encourage better data protection decisions.

## Features

### 1. Article 5 Training
This section teaches the main GDPR data protection principles, including:

- Lawfulness, fairness and transparency
- Purpose limitation
- Data minimisation
- Accuracy
- Storage limitation
- Integrity and confidentiality
- Accountability

Users answer questions as they go through the module, receive instant feedback, and can track their progress with a progress bar.

### 2. Article 6 Training
This section explains the lawful bases for processing personal data, including:

- Consent
- Contract
- Legal obligation
- Vital interests
- Public task
- Legitimate interests

Like the Article 5 section, users answer interactive questions and can track completion.

### 3. GDPR Quiz
The quiz tests the user’s understanding of Articles 5 and 6 through 10 questions. At the end, the user receives:

- A final score
- Feedback based on performance

### 4. Risk Scan
The risk scan allows users to tick common GDPR weaknesses that may apply to their organisation, such as:

- No privacy notice
- Poor access controls
- Lack of staff training
- No retention process
- Unclear lawful basis

Based on the number of issues selected, the system gives a **Low**, **Medium**, or **High** risk result.

### 5. Lawful Basis Helper
This tool guides users through a series of dropdown questions to help identify the most likely lawful basis for a processing activity.

Possible results include:

- Legal obligation
- Contract
- Vital interests
- Public task
- Consent
- Legitimate interests

## Technologies Used

- **HTML** – for the structure of the website
- **CSS** – for layout, styling, and responsive design
- **JavaScript** – for interactive features and page logic

## Project Structure

```bash
project-folder/
│
├── index.html
├── article 5.html
├── article 6.html
├── quiz.html
├── risk.html
├── lawful-basis.html
│
├── css/
│   └── style.css
│
└── js/
    ├── article5.js
    ├── article6.js
    ├── quiz.js
    ├── risk.js
    └── lawful-basis.js
