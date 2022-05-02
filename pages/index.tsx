import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="w-96 mx-auto p-20">
      <h1 className="text-xl font-bold">ToDo</h1>
      <div className="flex gap-x-2">
        <input type="text" className="border border-black" />
        <button className="border border-black flex-shrink-0">追加</button>
      </div>
      <ul className="mt-4 space-y-2">
        <li>
          <label className="flex items-center gap-x-2">
            <input type="checkbox" />
            <span>ToDo1</span>
          </label>
        </li>
        <li>
          <label className="flex items-center gap-x-2">
            <input type="checkbox" />
            <span>ToDo2</span>
          </label>
        </li>
        <li>
          <label className="flex items-center gap-x-2">
            <input type="checkbox" />
            <span>ToDo3</span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Home
