import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [toDoList, setToDoList] = useState([
    { id: Math.random(), label: "TODO1", isDone: false },
    { id: Math.random(), label: "TODO2", isDone: false },
    { id: Math.random(), label: "TODO3", isDone: true  },
  ]);

  const toggle = (e: any) => {
    console.log("aaa")
    setToDoList((prevToDoList) => {
      return prevToDoList.map(todo => {
        if (todo.id === Number(e.target.value)) {
          return { ...todo, isDone: !todo.isDone};
        }
        return todo;
      });
    });
  };

  return (
    <div className="w-96 mx-auto p-20">
      <h1 className="text-xl font-bold">ToDo</h1>
      <div className="flex gap-x-2">
        <input type="text" className="border border-black" />
        <button className="border border-black flex-shrink-0">追加</button>
      </div>
      <ul className="mt-4 space-y-2">
        {toDoList.map((todo) => (
          <li key={(todo.id)}>
          <label className="flex items-center gap-x-2">
            <input type="checkbox" value={todo.id} checked={todo.isDone} onChange={toggle} />
            <span>{todo.label}</span>
          </label>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Home
