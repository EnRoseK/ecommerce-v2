import classNames from 'classnames';

interface SwitchProps {
  checked: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <button
      type='button'
      onClick={() => {
        onChange((prev) => !prev);
      }}
      className={classNames(
        'relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent focus:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light  focus-visible:ring-opacity-75 lg:h-7 lg:w-12',
        {
          'bg-brand': checked,
          'bg-fill-four': !checked,
        },
      )}
    >
      <span
        className={classNames(
          'pointer-events-none inline-block h-5 w-5 rounded-full bg-brand-light shadow-switch ring-0 lg:h-6 lg:w-6',
          {
            'translate-x-4 lg:translate-x-5': checked,
            'translate-x-0': !checked,
          },
        )}
      />
    </button>
  );
};

export default Switch;
