// OTP Simulation for SBI
window.addEventListener('DOMContentLoaded', function() {
    const otpInput = document.getElementById('otp');
    const otpForm = document.getElementById('otp-form');
    const otpFeedback = document.getElementById('otp-feedback');
    const otpValue = '482193'; // Simulated OTP
    // Show fake SMS popup after 1s
    setTimeout(() => {
        const sms = document.createElement('div');
        sms.textContent = 'SBI: Your OTP for login is 482193. Do not share it with anyone.';
        sms.style.position = 'fixed';
        sms.style.bottom = '32px';
        sms.style.right = '32px';
        sms.style.background = '#fff';
        sms.style.border = '1.5px solid #1a237e';
        sms.style.color = '#1a237e';
        sms.style.padding = '14px 22px';
        sms.style.borderRadius = '8px';
        sms.style.boxShadow = '0 2px 8px #e3e3e3';
        sms.style.fontSize = '16px';
        sms.style.zIndex = '9999';
        sms.id = 'fake-sms';
        document.body.appendChild(sms);
        setTimeout(() => { sms.remove(); }, 7000);
    }, 1000);
    otpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (otpInput.value === otpValue) {
            // Pass credentials and OTP to bank.html
            const params = new URLSearchParams(window.location.search);
            const user = params.get('user') || '';
            const pass = params.get('pass') || '';
            window.location.href = `bank.html?user=${encodeURIComponent(user)}&pass=${encodeURIComponent(pass)}&otp=${otpValue}&stolen=1`;
        } else {
            otpFeedback.textContent = 'Incorrect OTP. Please try again.';
            otpFeedback.style.color = 'red';
        }
    });
});
