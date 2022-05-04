import type { NextPage } from "next";
import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react";

type Todo = {
  id: number;
  label: string;
  isDone: boolean;
};

type ListItemProps = {
  todo: Todo;
  toggle: ChangeEventHandler<HTMLInputElement>;
};

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // 入力した値をテキストボックスに反映させる
  const input: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  // 追加ボタンを押したときにリストを追加する
  const add: MouseEventHandler<HTMLButtonElement> = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Math.random(), label: text, isDone: false }];
    });
    setText("");
  };

  // 削除ボタンを押したときにチェックがついているリストを削除する
  const deleteTodos: MouseEventHandler<HTMLButtonElement> = () => {
    const notDoneTodos = todos.filter(todo => todo.isDone === false);
    setTodos(() => {
      return notDoneTodos;
    });
  };

  // チェックボックスのオンオフを切り替える
  const toggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === Number(e.target.value)) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  // リストの情報
  const ListItem: FC<ListItemProps> = ({ todo, toggle }) => {
    return (
      <label className="flex items-center gap-x-2">
        <input
          type="checkbox"
          value={todo.id}
          checked={todo.isDone}
          onChange={toggle}
        />
        <span>{todo.label}</span>
      </label>
    );
  };

  return (
    <div className="w-96 mx-auto p-20">
      <h1 className="text-xl font-bold">Todo</h1>
      <div className="flex gap-x-2">
        <input
          type="text"
          value={text}
          onChange={input}
          className="border border-black"
        />
        <button
          onClick={add}
          className="border border-black flex-shrink-0 px-2"
        >
          追加
        </button>
        <button
          onClick={deleteTodos}
          className="border border-black flex-shrink-0 px-2"
        >
          削除
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <ListItem todo={todo} toggle={toggle} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
