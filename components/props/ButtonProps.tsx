interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean; // Optional
}

export default function Button({ text, onClick, disabled = false }: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className="border px-4 py-2 m-2"
    >
      {text}
    </button>
  );
}
