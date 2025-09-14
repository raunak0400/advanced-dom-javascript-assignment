class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.messagesList = document.getElementById('messagesList');
        this.messageCount = document.getElementById('messageCount');
        this.successMessage = document.getElementById('successMessage');
        
        this.validationTimers = {};
        this.messages = this.loadMessages();
        
        this.init();
    }

    init() {
        this.renderMessages();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Real-time validation with debouncing
        const inputs = ['name', 'email', 'message'];
        inputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            input.addEventListener('input', (e) => this.debouncedValidation(e, inputId));
        });

        // Event delegation for delete buttons
        this.messagesList.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                this.deleteMessage(e.target.dataset.messageId);
            }
        });
    }

    debouncedValidation(event, inputId) {
        // Clear existing timer
        if (this.validationTimers[inputId]) {
            clearTimeout(this.validationTimers[inputId]);
        }

        // Set new timer for 300ms delay
        this.validationTimers[inputId] = setTimeout(() => {
            this.validateField(inputId, event.target.value);
        }, 300);
    }

    validateField(fieldId, value) {
        const errorElement = document.getElementById(`${fieldId}Error`);
        const inputElement = document.getElementById(fieldId);
        let isValid = true;
        let errorMessage = '';

        switch (fieldId) {
            case 'name':
                if (!value.trim()) {
                    errorMessage = 'Name is required';
                    isValid = false;
                } else if (value.trim().length < 2) {
                    errorMessage = 'Name must be at least 2 characters';
                    isValid = false;
                }
                break;

            case 'email':
                if (!value.trim()) {
                    errorMessage = 'Email is required';
                    isValid = false;
                } else if (!this.isValidEmail(value.trim())) {
                    errorMessage = 'Please enter a valid email address';
                    isValid = false;
                }
                break;

            case 'message':
                if (!value.trim()) {
                    errorMessage = 'Message is required';
                    isValid = false;
                } else if (value.trim().length < 10) {
                    errorMessage = 'Message must be at least 10 characters';
                    isValid = false;
                }
                break;
        }

        this.showFieldError(inputElement, errorElement, errorMessage, isValid);
        return isValid;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showFieldError(inputElement, errorElement, message, isValid) {
        if (isValid) {
            inputElement.classList.remove('error');
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        } else {
            inputElement.classList.add('error');
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(this.form);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();

        // Validate all fields
        const isNameValid = this.validateField('name', name);
        const isEmailValid = this.validateField('email', email);
        const isMessageValid = this.validateField('message', message);

        if (isNameValid && isEmailValid && isMessageValid) {
            this.submitMessage(name, email, message);
        }
    }

    submitMessage(name, email, message) {
        const newMessage = {
            id: Date.now(),
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toISOString()
        };

        this.messages.push(newMessage);
        this.saveMessages();
        this.renderMessages();
        this.showSuccessMessage();
        this.form.reset();
        
        // Clear any existing error states
        this.clearAllErrors();
    }

    showSuccessMessage() {
        this.successMessage.textContent = 'Message sent successfully!';
        this.successMessage.classList.add('show');
        
        setTimeout(() => {
            this.successMessage.classList.remove('show');
        }, 3000);
    }

    clearAllErrors() {
        const inputs = ['name', 'email', 'message'];
        inputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            const error = document.getElementById(`${inputId}Error`);
            input.classList.remove('error');
            error.textContent = '';
            error.classList.remove('show');
        });
    }

    deleteMessage(messageId) {
        if (confirm('Are you sure you want to delete this message?')) {
            this.messages = this.messages.filter(msg => msg.id !== parseInt(messageId));
            this.saveMessages();
            this.renderMessages();
        }
    }

    renderMessages() {
        this.messageCount.textContent = this.messages.length;
        
        if (this.messages.length === 0) {
            this.messagesList.innerHTML = '<div class="empty-state">No messages yet</div>';
            return;
        }

        this.messagesList.innerHTML = this.messages.map(message => {
            const date = new Date(message.timestamp);
            const formattedDate = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            return `
                <div class="message-item">
                    <div class="message-header">
                        <div class="message-from">
                            From: ${this.escapeHtml(message.name)}
                            <span class="message-email">(${this.escapeHtml(message.email)})</span>
                        </div>
                        <button class="delete-btn" data-message-id="${message.id}">Delete</button>
                    </div>
                    <div class="message-content">${this.escapeHtml(message.message)}</div>
                    <div class="message-timestamp">Sent: ${formattedDate}</div>
                </div>
            `;
        }).join('');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    loadMessages() {
        try {
            const stored = localStorage.getItem('contactMessages');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading messages from localStorage:', error);
            return [];
        }
    }

    saveMessages() {
        try {
            localStorage.setItem('contactMessages', JSON.stringify(this.messages));
        } catch (error) {
            console.error('Error saving messages to localStorage:', error);
            alert('Error saving message. Please try again.');
        }
    }
}

// Initialize the contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});
