import { ReactNode } from "react";

interface Prop {
  icon: ReactNode;
  title: string;
  description: string;
}

export function HowItWorksCard({ icon, title, description }: Prop) {
  return (
    <div className="p-6 bg-white shadow-md rounded-xl flex gap-4 items-start">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
