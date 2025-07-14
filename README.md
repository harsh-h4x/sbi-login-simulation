# 🛡️ Phishing Simulation - Secure Login Awareness Project

Welcome to the **Phishing Simulation** project! This interactive web-based simulation is designed to educate users about phishing attacks, how to recognize them, and the dangers of falling victim to fake login pages. It mimics real-world email and banking interfaces to provide a hands-on learning experience.

---

## 🚀 Why This Project?

Phishing attacks are one of the most common and dangerous cyber threats today. They trick users into revealing sensitive information like usernames, passwords, and OTPs by impersonating trusted entities such as banks or popular services. This project aims to raise awareness by simulating phishing scenarios in a safe environment.

---

## 🎯 What Does It Do?

- **Simulates a Gmail-like email inbox** with various emails, including phishing attempts.
- **Displays detailed phishing emails** alongside legitimate emails for comparison.
- **Includes a fake login page** mimicking the State Bank of India (SBI) online banking portal.
- **Simulates OTP verification** to demonstrate how attackers can capture one-time passwords.
- **Shows a bank dashboard** that reveals stolen credentials and OTPs to highlight the risks.
- **Offers a phishing awareness quiz** to reinforce learning.
- **Responsive design** with a toggle for mobile and desktop views.

---

## 🛠️ How Is It Implemented?

- **HTML/CSS/JavaScript**: The entire simulation is built using standard web technologies for easy deployment and accessibility.
- **Multiple HTML pages**:
  - `index.html`: Main phishing email simulation and fake login flow.
  - `bank.html`: Simulated bank dashboard showing stolen data.
  - `otp.html`: OTP verification page with simulated SMS popup.
- **JavaScript logic**:
  - `script.js`: Controls email switching, phishing link simulation, fake login, quiz, and reset functionality.
  - `otp.js`: Handles OTP input validation and redirection with stolen credentials.
- **CSS styling**: Clean, modern UI inspired by Gmail and SBI branding for realism.
- **URL parameters**: Used to pass stolen credentials and OTP between pages to simulate data capture.

---

## 📂 Project Structure

```
phishing-simulation/
├── index.html         # Main phishing email simulation page
├── bank.html          # Simulated bank dashboard showing stolen info
├── otp.html           # OTP verification page
├── script.js          # Main JavaScript for phishing simulation
├── otp.js             # JavaScript for OTP verification logic
├── style.css          # Stylesheet for the entire project
├── sbi-logo.png       # SBI logo image used in pages
README.md              # This file
CONFERENCE_GUIDE.md    # Additional documentation (if any)
```

---

## 🎨 How to Use

1. Clone or download this repository.
2. Open `phishing-simulation/index.html` in any modern web browser.
3. Explore the simulated inbox and click on phishing emails.
4. Click the phishing email's link to experience the fake login and OTP flow.
5. Observe how credentials and OTPs are captured and displayed.
6. Take the phishing awareness quiz to test your knowledge.
7. Use the "Replay Attack" button to reset the simulation.

---

## 🤝 How to Contribute

Want to make this project even better? Here's how you can join the fun! 🎉

- Fork the repo and clone it locally.
- Create a new branch for your feature or bugfix: `git checkout -b feature-name`
- Make your changes with love ❤️ and commit them: `git commit -m "Add awesome feature"`
- Push your branch: `git push origin feature-name`
- Open a Pull Request and describe your changes.
- Celebrate your contribution and help others learn! 🎊

---

## ⚠️ Disclaimer

This project is for educational and awareness purposes only. It simulates phishing attacks to help users recognize and avoid them. **Do not use this project for malicious intent or unauthorized data collection.**

---

## 💡 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Responsive Web Design

---

## 📞 Contact

For questions or feedback, please open an issue or contact the repository owner.

---

Thank you for exploring this project! Stay safe online and always verify before you trust. 🔐✨
