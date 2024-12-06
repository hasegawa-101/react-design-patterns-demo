

export function TodoPagePresentation({ todo }: { todo: any }) {
    return (
      <>
        <h1>{todo.todo}</h1>
        <pre>
          <code>{JSON.stringify(todo, null, 2)}</code>
        </pre>
      </>
    );
  }