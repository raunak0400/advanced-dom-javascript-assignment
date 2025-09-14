class TodoApp {
    constructor() {
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.searchInput = document.getElementById('searchInput');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.todoList = document.getElementById('todoList');
        this.todoStats = document.getElementById('todoStats');
        this.noResults = document.getElementById('noResults');
        
        this.currentFilter = 'all';
        this.searchTerm = '';
        this.searchTimer = null;
        this.todos = this.loadTodos();
        
        this.init();
    }

    init() {
        this.renderTodos();
        this.updateStats();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Add todo
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTodo();
            }
        });

        // Search with debouncing
        this.searchInput.addEventListener('input', (e) => {
            this.debouncedSearch(e.target.value);
        });

        // Filter buttons
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setFilter(e.target.dataset.filter);
            });
        });

        // Event delegation for todo interactions
        this.todoList.addEventListener('click', (e) => {
            if (e.target.classList.contains('todo-checkbox')) {
                this.toggleTodo(e.target.dataset.todoId);
            } else if (e.target.classList.contains('delete-btn')) {
                this.deleteTodo(e.target.dataset.todoId);
            }
        });
    }

    debouncedSearch(searchTerm) {
        // Clear existing timer
        if (this.searchTimer) {
            clearTimeout(this.searchTimer);
        }

        // Set new timer for 400ms delay
        this.searchTimer = setTimeout(() => {
            this.searchTerm = searchTerm.toLowerCase().trim();
            this.renderTodos();
        }, 400);
    }

    addTodo() {
        const text = this.todoInput.value.trim();
        
        if (!text) {
            this.todoInput.focus();
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.todos.unshift(newTodo); // Add to beginning
        this.saveTodos();
        this.renderTodos();
        this.updateStats();
        
        // Clear input and focus
        this.todoInput.value = '';
        this.todoInput.focus();
    }

    toggleTodo(todoId) {
        const todo = this.todos.find(t => t.id === parseInt(todoId));
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.renderTodos();
            this.updateStats();
            
            // Add completion animation
            const todoElement = document.querySelector(`[data-todo-id="${todoId}"]`).closest('.todo-item');
            todoElement.classList.add('completing');
            setTimeout(() => {
                todoElement.classList.remove('completing');
            }, 500);
        }
    }

    deleteTodo(todoId) {
        if (confirm('Are you sure you want to delete this todo?')) {
            this.todos = this.todos.filter(t => t.id !== parseInt(todoId));
            this.saveTodos();
            this.renderTodos();
            this.updateStats();
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update active filter button
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
        
        this.renderTodos();
    }

    getFilteredTodos() {
        let filtered = this.todos;

        // Apply search filter
        if (this.searchTerm) {
            filtered = filtered.filter(todo => 
                todo.text.toLowerCase().includes(this.searchTerm)
            );
        }

        // Apply status filter
        switch (this.currentFilter) {
            case 'active':
                filtered = filtered.filter(todo => !todo.completed);
                break;
            case 'completed':
                filtered = filtered.filter(todo => todo.completed);
                break;
            // 'all' shows all todos
        }

        return filtered;
    }

    renderTodos() {
        const filteredTodos = this.getFilteredTodos();
        
        if (filteredTodos.length === 0) {
            if (this.todos.length === 0) {
                this.todoList.innerHTML = '<li class="empty-state">No todos yet. Add one above!</li>';
                this.noResults.style.display = 'none';
            } else {
                this.todoList.innerHTML = '';
                this.noResults.style.display = 'block';
            }
            return;
        }

        this.noResults.style.display = 'none';
        this.todoList.innerHTML = filteredTodos.map(todo => {
            const date = new Date(todo.createdAt);
            const formattedDate = date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            return `
                <li class="todo-item ${todo.completed ? 'completed' : ''}">
                    <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} data-todo-id="${todo.id}">
                    <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                    <span class="todo-timestamp">${formattedDate}</span>
                    <button class="delete-btn" data-todo-id="${todo.id}">Delete</button>
                </li>
            `;
        }).join('');
    }

    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(todo => todo.completed).length;
        this.todoStats.textContent = `📝 Todo List (${total} total, ${completed} completed)`;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    loadTodos() {
        try {
            const stored = localStorage.getItem('todos');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading todos from localStorage:', error);
            return [];
        }
    }

    saveTodos() {
        try {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        } catch (error) {
            console.error('Error saving todos to localStorage:', error);
            alert('Error saving todos. Please try again.');
        }
    }
}

// Initialize the todo app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});
