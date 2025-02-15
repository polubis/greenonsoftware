import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="max-w-md min-h-screen gap-4 px-4 py-6 pb-20 overflow-auto bg-white-100">
      {children}
    </div>
  );
}
