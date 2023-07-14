type Props = {
  resetFunc: () => void;
};

export const ErrorResetButton = ({ resetFunc }: Props): JSX.Element => {
  return (
    <button
      className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={resetFunc}
    >
      もう一度試す
    </button>
  );
};
