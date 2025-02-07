import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="max-w-md min-h-screen px-4 py-2 bg-gray-100">{children}</div>
  );
}
