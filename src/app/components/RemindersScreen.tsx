import { Bell, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { BottomNav } from './BottomNav';
import { getReminders, removeReminder, type Reminder } from '../utils/localStorage';
import { toast } from 'sonner';
const appIcon = "https://ease-smile-15617808.figma.site/_assets/v11/1deec5215c51266c1f8b6f090c9b80cd89d0f0e2.png";

export function RemindersScreen() {
  const navigate = useNavigate();
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    // Leer recordatorios de localStorage
    loadReminders();
  }, []);

  const loadReminders = () => {
    const storedReminders = getReminders();
    setReminders(storedReminders);
  };

  const handleComplete = (reminderId: string) => {
    removeReminder(reminderId);
    loadReminders(); // Recargar la lista
    toast.success('Recordatorio completado', {
      icon: <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
    });
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'urgente':
        return 'bg-red-50 border-[#EF4444] text-[#EF4444]';
      case 'pendiente':
        return 'bg-yellow-50 border-yellow-500 text-yellow-700';
      case 'completado':
        return 'bg-green-50 border-[#22C55E] text-[#22C55E]';
      default:
        return 'bg-gray-50 border-gray-300 text-gray-600';
    }
  };

  const getEstadoText = (estado: string) => {
    switch (estado) {
      case 'urgente':
        return 'Próximo a vencer';
      case 'pendiente':
        return 'Pendiente';
      case 'completado':
        return 'Completado';
      default:
        return 'Sin estado';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-[#2F6FED] px-6 py-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <img src={appIcon} alt="TrámiteFácil" className="w-20 h-20" />
            </div>
            <h1 className="text-xl text-white">Recordatorios</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6">
        {reminders.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <p className="text-gray-600">
                Tienes {reminders.length} recordatorio{reminders.length !== 1 ? 's' : ''} activo{reminders.length !== 1 ? 's' : ''}
              </p>
            </motion.div>

            <div className="space-y-4">
              {reminders.map((reminder, index) => (
                <motion.div
                  key={reminder.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-5 shadow-md border-l-4 ${getEstadoColor(reminder.estado)}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[#1F2937] flex-1">{reminder.tramite}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${getEstadoColor(reminder.estado)} border`}>
                      {getEstadoText(reminder.estado)}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>Fecha límite: {reminder.fecha}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{reminder.diasRestantes} días restantes</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => navigate(`/tramite/${reminder.category}/${reminder.tramiteId}`)}
                      className="flex-1 text-[#2F6FED] text-sm py-2 px-4 border border-[#2F6FED] rounded-lg hover:bg-[#2F6FED] hover:text-white transition-colors"
                    >
                      Ver detalles
                    </button>
                    <button
                      onClick={() => handleComplete(reminder.id)}
                      className="text-[#22C55E] text-sm py-2 px-4 border border-[#22C55E] rounded-lg hover:bg-[#22C55E] hover:text-white transition-colors flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Completar
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 bg-linear-to-r from-[#2F6FED] to-[#1e40af] rounded-xl p-5 text-white shadow-md"
            >
              <h3 className="text-lg mb-2">Mantente al día</h3>
              <p className="text-sm text-white text-opacity-90">
                Revisa tus recordatorios regularmente para no perder fechas importantes de tus trámites.
              </p>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="bg-gray-100 rounded-full p-8 inline-block mb-4">
              <Bell className="w-16 h-16 text-gray-300" />
            </div>
            <h2 className="text-xl text-[#1F2937] mb-2">Sin recordatorios activos</h2>
            <p className="text-gray-500 mb-6">
              Activa recordatorios en los detalles de cada trámite para no olvidar fechas importantes
            </p>
            <button
              onClick={() => navigate('/home')}
              className="bg-[#2F6FED] text-white px-6 py-3 rounded-xl hover:bg-[#1e40af] transition-colors"
            >
              Explorar trámites
            </button>
          </motion.div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}