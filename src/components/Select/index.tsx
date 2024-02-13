import { ChevronDown } from "lucide-react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    placeholder?: string;
    options: {
        value: string;
        label: string;
    }[];
}

export function Select({ placeholder = 'Selecione...', options, ...rest}: SelectProps) {
    return (
        <div className="relative">
            <select {...rest} placeholder={placeholder} className="block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:yellow-500 focus:border-yellow-500 sm:text-sm">
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}