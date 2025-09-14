# Contributing to Advanced DOM & JavaScript Assignment

Thank you for your interest in contributing to this project! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

If you find a bug or have a suggestion for improvement:

1. **Check existing issues** first to avoid duplicates
2. **Create a new issue** with a clear, descriptive title
3. **Provide detailed information**:
   - Steps to reproduce the issue
   - Expected vs actual behavior
   - Browser and OS information
   - Screenshots if applicable

### Suggesting Enhancements

We welcome feature requests and improvements:

1. **Check existing issues** for similar suggestions
2. **Create an enhancement issue** with:
   - Clear description of the proposed feature
   - Use cases and benefits
   - Implementation ideas (if any)

### Code Contributions

#### Getting Started

1. **Fork the repository**
2. **Clone your fork**:
   ```bash
   git clone https://github.com/yourusername/advanced-dom-javascript-assignment.git
   cd advanced-dom-javascript-assignment
   ```
3. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

#### Development Guidelines

##### Code Style
- **JavaScript**: Use ES6+ features, meaningful variable names, and consistent formatting
- **CSS**: Follow BEM methodology, use consistent indentation (2 spaces)
- **HTML**: Use semantic HTML5 elements, proper indentation (2 spaces)
- **Comments**: Add comments for complex logic and functions

##### Project Structure
Maintain the existing structure:
```
├── contact-form/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── todo-app/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── LICENSE
├── CONTRIBUTING.md
├── SECURITY.md
└── README.md
```

##### Technical Requirements
- **Vanilla JavaScript only**: No external libraries or frameworks
- **Responsive design**: Ensure mobile compatibility
- **Accessibility**: Follow WCAG guidelines
- **Performance**: Optimize for speed and efficiency
- **Browser compatibility**: Support modern browsers (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)

#### Testing Your Changes

Before submitting a pull request:

1. **Test functionality**:
   - Contact form validation and submission
   - Todo app CRUD operations
   - Search and filtering features
   - localStorage persistence

2. **Test responsiveness**:
   - Desktop (1920x1080)
   - Tablet (768x1024)
   - Mobile (375x667)

3. **Test browser compatibility**:
   - Chrome
   - Firefox
   - Safari
   - Edge

4. **Validate code**:
   - No console errors
   - Proper HTML structure
   - Clean CSS without conflicts

#### Submitting a Pull Request

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add: brief description of changes"
   ```

2. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** with:
   - Clear title and description
   - Reference related issues
   - Screenshots for UI changes
   - Testing information

### Pull Request Guidelines

#### PR Title Format
- `Add:` for new features
- `Fix:` for bug fixes
- `Update:` for improvements
- `Refactor:` for code restructuring
- `Docs:` for documentation changes

#### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested in multiple browsers
- [ ] No console errors

## Screenshots (if applicable)
Add screenshots here

## Related Issues
Closes #issue_number
```

## 🎯 Areas for Contribution

### Contact Form
- Enhanced validation rules
- Additional form fields
- Email integration
- Form analytics
- Accessibility improvements

### Todo App
- Drag and drop reordering
- Categories/tags
- Due dates
- Export/import functionality
- Keyboard shortcuts
- Bulk operations

### General Improvements
- Performance optimizations
- Code refactoring
- Documentation improvements
- Testing framework
- Build tools
- CI/CD pipeline

## 📋 Code Review Process

1. **Automated checks** will run on all PRs
2. **Maintainer review** within 48 hours
3. **Feedback incorporation** and iteration
4. **Approval and merge** by maintainers

### Review Criteria
- Code quality and style
- Functionality and testing
- Documentation updates
- Performance impact
- Security considerations

## 🏷️ Issue Labels

We use labels to categorize issues:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested
- `wontfix`: This will not be worked on

## 💬 Community Guidelines

### Be Respectful
- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Accept constructive criticism gracefully
- Focus on what is best for the community

### Be Collaborative
- Help others learn and grow
- Share knowledge and resources
- Work together toward common goals
- Give credit where credit is due

### Be Professional
- Keep discussions focused and productive
- Avoid spam and off-topic conversations
- Follow the project's code of conduct
- Report inappropriate behavior

## 📞 Getting Help

If you need help:

1. **Check the documentation** in README.md
2. **Search existing issues** for similar problems
3. **Create a new issue** with the `question` label
4. **Join discussions** in issue comments

## 🎉 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to this project! Your efforts help make it better for everyone.

---

**Note**: This is an educational project focused on vanilla JavaScript and DOM manipulation. Contributions should maintain this focus and avoid introducing external dependencies.
