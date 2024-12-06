import { TodoPagePresentation } from "./presentational";

export default async function TodoListContainer() {
    const res = await fetch("https://dummyjson.com/todos/random", {
      next: {
        revalidate: 0,
      },
    });

    const todo = await res.json();
  
    return <TodoPagePresentation todo={todo} />;
  }