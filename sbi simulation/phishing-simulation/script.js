// UI Elements
// Removed phishing action buttons and signs list
const loginSection = document.getElementById('login-section');
const safeLoginSection = document.getElementById('safe-login-section');
const quizSection = document.getElementById('quiz-section');
const resetBtn = document.getElementById('reset-btn');

// Email switching logic
const emailItems = document.querySelectorAll('.email-item');
const emailViews = {
    phishing: document.getElementById('phishing-email'),
    reset: document.getElementById('reset-email'),
    invoice: document.getElementById('invoice-email'),
    spear: document.getElementById('spear-email'),
    bank: document.getElementById('bank-email'),
    shopping: document.getElementById('shopping-email')
};
// Report phishing button logic
const reportBtn = document.getElementById('report-phish-btn');
const reportFeedback = document.getElementById('report-feedback');
if (reportBtn) {
    reportBtn.addEventListener('click', function() {
        const selected = document.querySelector('.email-item.selected');
        const type = selected ? selected.getAttribute('data-email') : '';
        if (["phishing","reset","invoice","spear"].includes(type)) {
            reportFeedback.textContent = 'Correct! This is a phishing email.';
            reportFeedback.style.color = 'green';
        } else {
            reportFeedback.textContent = 'This is not a phishing email.';
            reportFeedback.style.color = 'red';
        }
        setTimeout(()=>{ reportFeedback.textContent = ''; }, 2500);
    });
}
emailItems.forEach(item => {
    item.addEventListener('click', function() {
        emailItems.forEach(i => i.classList.remove('selected'));
        this.classList.add('selected');
        Object.values(emailViews).forEach(v => v.classList.add('hidden'));
        const type = this.getAttribute('data-email');
        if (emailViews[type]) {
            emailViews[type].classList.remove('hidden');
        }
        // No phishing actions to show/hide
    });
});
// Show phishing signs
// Removed phishing signs logic
// Show fake link preview on hover
const phishingLink = document.getElementById('phishing-link');
if (phishingLink) {
    phishingLink.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('phishing-email-section').classList.add('hidden');
        document.getElementById('login-section').classList.remove('hidden');
    });
}
// Simulate falling for the phishing link
// Removed fallForPhishBtn logic
// Fake login form feedback (phishing)
const loginForm = document.getElementById('login-form');
const loginFeedback = document.getElementById('login-feedback');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // Redirect to OTP page with stolen credentials in query params
        window.location.href = `otp.html?user=${encodeURIComponent(username)}&pass=${encodeURIComponent(password)}`;
    });
}
// Safe login form feedback
const safeLoginForm = document.getElementById('safe-login-form');
const safeLoginFeedback = document.getElementById('safe-login-feedback');
if (safeLoginForm) {
    safeLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('safe-username').value;
        const password = document.getElementById('safe-password').value;
        if (username === 'admin' && password === 'secure123') {
            safeLoginFeedback.textContent = 'Login successful! This is a secure login.';
            safeLoginFeedback.style.color = 'green';
            // Show quiz after successful safe login
            safeLoginSection.classList.add('hidden');
            quizSection.classList.remove('hidden');
        } else {
            safeLoginFeedback.textContent = 'Login failed! Please check your credentials.';
            safeLoginFeedback.style.color = 'red';
        }
    });
}
// Quiz logic
const quizForm = document.getElementById('quiz-form');
const quizFeedback = document.getElementById('quiz-feedback');
if (quizForm) {
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const checked = Array.from(quizForm.querySelectorAll('input[type=checkbox]:checked')).map(cb => cb.value);
        if (checked.includes('1') && checked.includes('3') && checked.includes('4') && checked.length === 3) {
            quizFeedback.textContent = 'Correct! You can spot phishing signs.';
            quizFeedback.style.color = 'green';
            document.getElementById('quiz-complete').style.display = 'block';
        } else {
            quizFeedback.textContent = 'Not quite. Review the signs of phishing emails above.';
            quizFeedback.style.color = 'red';
        }
    });
}
// Reset/Replay button
if (resetBtn) {
    resetBtn.addEventListener('click', function() {
        // Reset all sections
        document.getElementById('phishing-email-section').classList.remove('hidden');
        loginSection.classList.add('hidden');
        quizSection.classList.add('hidden');
        // Reset email view
        emailItems.forEach(i => i.classList.remove('selected'));
        emailItems[0].classList.add('selected');
        Object.values(emailViews).forEach(v => v.classList.add('hidden'));
        emailViews['phishing'].classList.remove('hidden');
        // Reset forms and feedback
        if (loginFeedback) loginFeedback.textContent = '';
        if (quizFeedback) quizFeedback.textContent = '';
        if (quizForm) quizForm.reset();
    });
}
