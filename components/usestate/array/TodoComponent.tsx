"use client";

import { Button } from "@/components/ui/button";
import { todo } from "node:test";
import { useState } from "react";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function TodoComponent() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    const id = crypto.randomUUID()
    setTodos([...todos, { id: id, text: text, completed: false }]);
    setText('')
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((t) => t.completed !== true));
  };

  const total = todos.length;
  const completed = todos.filter((t) => t.completed === true).length;
  const remaining = todos.filter((t) => t.completed === false).length;

  return (
    <div className="text-lg font-mono space-y-4 p-10">
      <div className="flex flex-col gap-2 w-120">
        <label>Todo Text: </label>
        <input className="border-2 border-black text-bold px-2" placeholder="enter task here..." type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
        <button className="border-2 border-green-400 px-4 py-2 text-bold" onClick={()=> addTodo()}>Add Todo</button>
      </div>

      {todos && (todos.map((t,index)=> <div key={index}>
        <div className="border-2 flex flex-col gap-4">
            <p>{t.id}</p>
            <p>{t.text}</p>
            <p>{t.completed ? "✅" : "❌"}</p>
            <div className="flex gap-4">
                <button className="border-2 border-green-400 px-4 py-2 text-bold" onClick={()=>toggleTodo(t.id)}>Toggle Todo</button>
                <button className="border-2 border-green-400 px-4 py-2 text-bold" onClick={()=>deleteTodo(t.id)}>Delete Todo</button>
            </div>
        </div>
      </div>))}

      <p>Stats:</p>
      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
      <p>Remaining: {remaining}</p>

      <button className="border-2 border-green-400 px-4 py-2 text-bold" onClick={()=>clearCompleted()}>Clear All Completed Todo</button>
    </div>
  );
}
