'use client';

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <div>
      <h2>Помилка</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Перезавантажити</button>
    </div>
  );
};

export default Error;
