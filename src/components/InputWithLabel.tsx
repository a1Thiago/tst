import { cn } from '@/lib/utils'
import { Input } from './ui/input'

interface Props extends React.ComponentProps<"input"> {
  label: string
  id: string
}

export default function InputWithLabel({ label, id, className, ...props }: Props) {
  return (
    <div className="flex flex-col w-full max-w-sm">
      <label htmlFor={id} className="mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex items-center space-x-2">
        <Input className={cn('py-6 outline outline-2 outline-theme-primary/20', className)}
          id={id} {...props} />
      </div>
    </div>
  )
}