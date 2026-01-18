import { Lock, Check, Zap } from 'lucide-react';

export const StatusIcon = ({ estado }) => {
  switch (estado) {
    case 'bloqueado': return <Lock size={14} className="text-gray-600" />;
    case 'completada': return <Check size={18} className="text-green-500 stroke-[3]" />;
    default: return <Zap size={14} className="text-blood-800 fill-current" />;
  }
};