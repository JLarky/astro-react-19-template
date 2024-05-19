import { actions } from "astro:actions";
import { useActionState, useState, type JSX } from "react";
import "./Counter.css";

export default function Counter({
  children,
  count: initialCount,
}: {
  children: JSX.Element;
  count: number;
}) {
  const [count, setCount] = useState(initialCount);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <ChangeName />
      <div className="counter">
        {new Date().toLocaleTimeString()}
        <button formAction={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className="counter-message">{children}</div>
    </>
  );
}

function ChangeName() {
  const [error, submitAction, isPending] = useActionState(
    async (_previousState: string | null, formData: FormData) => {
      console.log("formData", actions.updateName);
      return await actions.updateName(formData);
    },
    null
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
