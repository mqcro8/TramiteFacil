import type { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function Card({ icon: Icon, title, description, buttonText = 'Ver más', onButtonClick }: CardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-[#2563EB] bg-opacity-10 rounded-lg p-3">
          <Icon className="w-6 h-6 text-[#2563EB]" />
        </div>
        <div className="flex-1">
          <h3 className="text-[#1F2937] mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <button
            onClick={onButtonClick}
            className="text-[#2563EB] text-sm hover:underline"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
