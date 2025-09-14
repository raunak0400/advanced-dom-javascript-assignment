# Advanced DOM & JavaScript Assignment

This repository contains two interactive web applications built with vanilla JavaScript, demonstrating advanced DOM manipulation techniques, event handling, and modern web development practices.

## 🎯 Learning Objectives

By completing this assignment, you will demonstrate your ability to:

- Handle form submissions and validation using vanilla DOM
- Implement event delegation for dynamic content
- Use localStorage for data persistence
- Apply debouncing technique for performance optimization
- Create interactive web applications using DOM manipulation
- Understand the challenges of vanilla DOM development

## 📁 Project Structure

```
advanced-dom-javascript-assignment/
├── contact-form/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── todo-app/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

## 🚀 Applications

### 1. Smart Contact Form (`contact-form/`)

A sophisticated contact form with real-time validation and message history management.

#### Features:
- **Real-time Validation**: Form fields validate as users type with visual feedback
- **Debounced Validation**: 300ms delay to prevent excessive validation calls
- **Message History**: View all previously submitted messages
- **localStorage Persistence**: Messages survive page refreshes
- **Event Delegation**: Single event listener handles all delete buttons
- **Responsive Design**: Works seamlessly on desktop and mobile devices

#### Technical Implementation:
- Form validation with custom error messages
- Debouncing for performance optimization
- Event delegation for dynamic content
- localStorage with error handling
- Modern CSS with gradients and animations

#### Usage:
1. Open `contact-form/index.html` in your browser
2. Fill out the form with name, email, and message
3. Watch real-time validation as you type
4. Submit the form to see success message
5. View message history below the form
6. Delete individual messages using the delete button

### 2. Dynamic Todo List (`todo-app/`)

A feature-rich todo application with search, filtering, and persistence.

#### Features:
- **Todo Management**: Add, complete, and delete todos
- **Debounced Search**: Search todos with 400ms delay for performance
- **Filter Options**: View All, Active, or Completed todos
- **Live Statistics**: Real-time count of total and completed todos
- **localStorage Persistence**: Todos survive page refreshes
- **Event Delegation**: Efficient handling of dynamic todo interactions
- **Responsive Design**: Mobile-friendly interface

#### Technical Implementation:
- CRUD operations for todo management
- Debounced search functionality
- Multiple filter states with active button highlighting
- Event delegation for todo interactions
- localStorage with error handling
- Smooth animations and transitions

#### Usage:
1. Open `todo-app/index.html` in your browser
2. Add new todos using the input field and Add button
3. Mark todos as complete by checking the checkbox
4. Search todos using the search field
5. Filter todos using All/Active/Completed buttons
6. Delete todos using the delete button
7. View statistics in the header

## 🛠️ Technical Requirements Met

### Contact Form:
- ✅ Name field (required, min 2 characters)
- ✅ Email field (required, valid email format)
- ✅ Message field (required, min 10 characters)
- ✅ Real-time validation with error messages
- ✅ Debounced validation (300ms delay)
- ✅ Form submission without page reload
- ✅ Message history display
- ✅ localStorage persistence
- ✅ Delete functionality with event delegation
- ✅ Empty state handling

### Todo App:
- ✅ Add todos with input field and button
- ✅ Display todos with checkboxes
- ✅ Mark complete functionality
- ✅ Delete individual todos
- ✅ Todo counter (total and completed)
- ✅ localStorage persistence
- ✅ Debounced search (400ms delay)
- ✅ Filter options (All/Active/Completed)
- ✅ Live results update
- ✅ No results state handling

## 🎨 Design Features

Both applications feature:
- **Modern UI**: Clean, professional design with gradients and shadows
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Hover effects, transitions, and loading states
- **Accessibility**: Proper form labels, keyboard navigation, and focus states
- **Error Handling**: Graceful handling of localStorage errors and edge cases

## 🔧 Technical Implementation Details

### Event Delegation
Both applications use event delegation to efficiently handle dynamic content:
- Contact form: Single listener for all delete buttons
- Todo app: Single listener for checkboxes and delete buttons

### Debouncing
Performance optimization through debouncing:
- Contact form: 300ms delay for validation
- Todo app: 400ms delay for search

### localStorage
Data persistence with error handling:
- JSON serialization/deserialization
- Try-catch blocks for error handling
- Graceful fallbacks when localStorage fails

### Modern JavaScript
- ES6+ features (classes, arrow functions, template literals)
- DOM manipulation without jQuery
- Event handling with addEventListener
- Form validation with custom logic

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/advanced-dom-javascript-assignment.git
   cd advanced-dom-javascript-assignment
   ```

2. **Open the applications**:
   - For Contact Form: Open `contact-form/index.html` in your browser
   - For Todo App: Open `todo-app/index.html` in your browser

3. **No build process required**: These are vanilla HTML, CSS, and JavaScript applications that run directly in the browser.

## 🌐 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📱 Mobile Support

Both applications are fully responsive and work on:
- iOS Safari
- Android Chrome
- Mobile Firefox
- Other modern mobile browsers

## 🎯 Key Learning Outcomes

After studying this code, you will understand:

1. **DOM Manipulation**: How to create, update, and delete DOM elements dynamically
2. **Event Handling**: Proper use of addEventListener and event delegation
3. **Form Validation**: Client-side validation with real-time feedback
4. **Performance Optimization**: Debouncing to reduce unnecessary function calls
5. **Data Persistence**: Using localStorage for client-side data storage
6. **Modern CSS**: Flexbox, Grid, animations, and responsive design
7. **Error Handling**: Graceful handling of edge cases and errors
8. **Code Organization**: Clean, maintainable JavaScript with classes and modules

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

If you have any questions or suggestions, please feel free to reach out.

---

**Note**: This assignment demonstrates advanced vanilla JavaScript and DOM manipulation techniques. No external libraries or frameworks were used, showcasing the power and flexibility of modern web standards.
