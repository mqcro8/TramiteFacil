import { useNavigate } from 'react-router-dom';
import { User, Edit, Settings, Bell, HelpCircle, LogOut, ChevronRight, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { BottomNav } from './BottomNav';

export function ProfileScreen() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Edit, label: 'Editar perfil', color: 'text-[#2F6FED]' },
    { icon: Settings, label: 'Configuración', color: 'text-gray-600' },
    { icon: Bell, label: 'Notificaciones', color: 'text-gray-600' },
    { icon: HelpCircle, label: 'Ayuda', color: 'text-gray-600' },
    { icon: LogOut, label: 'Cerrar sesión', color: 'text-[#EF4444]' },
  ];

  const handleMenuClick = (label: string) => {
    if (label === 'Cerrar sesión') {
      navigate('/');
    } else {
      console.log(`Clicked ${label}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Profile Header */}
      <div className="bg-linear-to-r from-[#2F6FED] to-[#1e40af] px-6 py-12 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl">TrámiteFácil</h1>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-1 mb-4">
              <div className="bg-linear-to-r from-[#2F6FED] to-[#1e40af] rounded-full p-6">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="text-2xl mb-1">Usuario Demo</h2>
            <p className="text-white text-opacity-90 text-sm">usuario@email.com</p>
          </div>
        </motion.div>
      </div>

      {/* Menu Options */}
      <div className="max-w-md mx-auto px-6 py-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === menuItems.length - 1;
            
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleMenuClick(item.label)}
                className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                  !isLast ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                  <span className={`${item.color}`}>{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </motion.button>
            );
          })}
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 bg-white rounded-xl p-5 shadow-sm"
        >
          <h3 className="text-[#1F2937] mb-2">Acerca de TrámiteFácil</h3>
          <p className="text-gray-600 text-sm mb-3">
            Tu aplicación para consultar trámites administrativos de forma rápida y sencilla.
          </p>
          <p className="text-gray-500 text-xs">
            Versión 1.0.0 • © 2026 TrámiteFácil
          </p>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
