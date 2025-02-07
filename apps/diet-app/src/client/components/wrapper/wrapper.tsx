import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="flex flex-col max-w-md min-h-screen gap-4 px-4 py-2 pb-20 overflow-auto bg-gray-100">
      {children}
    </div>
  );
}
