import { useNavigate } from 'react-router-dom';
import { FileText, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';
const appIcon = "https://ease-smile-15617808.figma.site/_assets/v11/1deec5215c51266c1f8b6f090c9b80cd89d0f0e2.png";

export function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-r from-[#2F6FED] to-[#1e40af] flex flex-col items-center justify-between p-8 text-white">
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="relative mb-8"
        >
          <div className="bg-white bg-opacity-20 rounded-full p-8">
            <img src={appIcon} alt="TrámiteFácil" className="w-20 h-20" />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="absolute -bottom-2 -right-2 bg-[#22C55E] rounded-full p-2"
          >
            <CheckCircle className="w-8 h-8" />
          </motion.div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl mb-4 text-center"
        >
          TrámiteFácil
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center text-white text-opacity-90 max-w-sm px-4"
        >
          Consulta trámites administrativos de forma rápida y sencilla
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-8 mt-12"
        >
          <div className="flex flex-col items-center">
            <FileText className="w-10 h-10 mb-2 opacity-80" />
            <span className="text-xs">Requisitos</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-10 h-10 mb-2 opacity-80" />
            <span className="text-xs">Fechas</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="w-10 h-10 mb-2 opacity-80" />
            <span className="text-xs">Pasos</span>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={() => navigate('/home')}
        className="w-full max-w-sm bg-white text-[#2F6FED] py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
      >
        Ver trámites
      </motion.button>
    </div>
  );
}
