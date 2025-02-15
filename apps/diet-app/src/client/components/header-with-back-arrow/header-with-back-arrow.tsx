import { ArrowLeft } from 'lucide-react';

export default function HeaderWithBackArrow({ title }: { title: string }) {
  return (
    <div className="flex">
      <div>
        <ArrowLeft />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
