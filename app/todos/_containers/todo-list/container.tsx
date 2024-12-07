import { TodoPagePresentation } from "./presentational";

export async function TodoListContainer() {
    const res = await fetch("https://dummyjson.com/todos/random", {
      next: {
        revalidate: 0,
      },
    });

    const todo = await res.json();
    //test
  
    return <TodoPagePresentation todo={todo} />;
  }