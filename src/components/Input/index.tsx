interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder?: string;
}

export function Input({ placeholder = 'Digite algo aqui...', type, ...res }: InputProps) {
    return (
        <input
          type={type}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:yellow-500 focus:border-yellow-500 sm:text-sm"
          placeholder={placeholder}
          {...res}
        />
      );
}