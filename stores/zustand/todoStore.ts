import { create } from 'zustand';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  fetchTodos: () => Promise<void>;
  toggleTodo: (id: number) => void;
  addTodo: (title: string) => void;
}

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  isLoading: false,

  // Async action - fetches from API
  fetchTodos: async () => {
    set({ isLoading: true });
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = await response.json();
    set({ todos: data, isLoading: false });
  },

  // Sync action - toggle completion
  toggleTodo: (id) => 
    set((state) => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    })),

  // Sync action - add new todo
  addTodo: (title) => 
    set((state) => ({
      todos: [
        { id: Date.now(), title, completed: false },
        ...state.todos
      ]
    }))
}));
