import { ArrowLeft } from 'lucide-react';

export default function HeaderWithBackArrow({ title, prevStep }: { title: string, prevStep: () => void }) {
  return (
    <div className="flex gap-6">
      <div onClick={prevStep}>
        <ArrowLeft />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
