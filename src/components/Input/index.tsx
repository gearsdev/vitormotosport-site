import { Search } from 'lucide-react'
import { Button } from '../Button';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder?: string;
    search?: boolean;
    onSearch?: () => void;
}

export function Input({ placeholder = 'Digite algo aqui...', type, search = false, onSearch, ...res }: InputProps) {
    return (
      <div className="flex w-full items-center gap-2">
        <div className="w-full">
          <input
            type={type}
            className="block w-full h-11 px-2 border border-gray-300 shadow-sm focus:outline-none focus:yellow-500 focus:border-yellow-500 sm:text-sm"
            placeholder={placeholder}
            {...res}
          />
        </div>
        { search &&
          <div className="flex items-center cursor-pointer">
            <Button type='button' className='!px-3' onClick={onSearch}>
              <Search/>
            </Button>
          </div>
        }  
      </div>
    );
}