import {
  FileText,
  GraduationCap,
  Heart,
  Building2,
  Bell,
  Car,
  Briefcase,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { BottomNav } from "./BottomNav";
import { CategoryCard } from "./CategoryCard";
import { getRemindersCount } from "../utils/localStorage";
const appIcon = "https://ease-smile-15617808.figma.site/_assets/v11/1deec5215c51266c1f8b6f090c9b80cd89d0f0e2.png";

export function HomeScreen() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(0);

  useEffect(() => {
    // Actualizar contador de recordatorios al cargar la página
    const updateCount = () => {
      const count = getRemindersCount();
      setNotifications(count);
    };
    
    updateCount();
    
    // Escuchar evento personalizado cuando se actualicen los recordatorios
    window.addEventListener('remindersUpdated', updateCount);
    
    return () => {
      window.removeEventListener('remindersUpdated', updateCount);
    };
  }, []);

  const categories = [
    {
      icon: GraduationCap,
      title: "Trámites educativos",
      color: "bg-purple-500",
      id: "educativos",
    },
    {
      icon: Heart,
      title: "Trámites médicos",
      color: "bg-red-500",
      id: "medicos",
    },
    {
      icon: Building2,
      title: "Trámites gubernamentales",
      color: "bg-blue-500",
      id: "gubernamentales",
    },
    {
      icon: Car,
      title: "Trámites vehiculares",
      color: "bg-green-500",
      id: "vehiculares",
    },
    {
      icon: Briefcase,
      title: "Trámites laborales",
      color: "bg-orange-500",
      id: "laborales",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-[#2F6FED] px-6 py-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1.5">
                <img
                  src={appIcon}
                  alt="TrámiteFácil"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h1 className="text-xl text-white">
                  TrámiteFácil
                </h1>
                <p className="text-white text-opacity-70 text-xs">
                  Bienvenido
                </p>
              </div>
            </div>

            <button
              className="relative"
              onClick={() => navigate("/reminders")}
            >
              <Bell className="w-6 h-6 text-white" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#EF4444] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
          </div>

          <p className="text-white text-opacity-90 text-sm">
            Encuentra la información de trámites administrativos
            en un solo lugar
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h2 className="text-2xl text-[#1F2937] mb-2">
            Categoríaas de trámites
          </h2>
          <p className="text-gray-600">
            Explora los trámites disponibles
          </p>
        </motion.div>

        <div className="space-y-4">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CategoryCard
                icon={category.icon}
                title={category.title}
                color={category.color}
                onClick={() =>
                  navigate(`/tramites/${category.id}`)
                }
              />
            </motion.div>
          ))}
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#2F6FED]"
        >
          <h3 className="text-[#1F2937] mb-2">
            ¿Necesitas ayuda?
          </h3>
          <p className="text-gray-600 text-sm mb-3">
            Encuentra información sobre requisitos, fechas y
            lugares para realizar tus trámites.
          </p>
          <button className="text-[#2F6FED] text-sm hover:underline">
            Ver guía de uso
          </button>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}