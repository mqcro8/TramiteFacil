import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { motion } from 'motion/react';
const appIcon = "https://ease-smile-15617808.figma.site/_assets/v11/1deec5215c51266c1f8b6f090c9b80cd89d0f0e2.png";

export function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  const handleGuestLogin = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-12 mt-8"
      >
        <div className="bg-[#2F6FED] bg-opacity-10 rounded-full p-4 mb-4">
          <img src={appIcon} alt="TrámiteFácil" className="w-20 h-20" />
        </div>
        <h1 className="text-3xl text-[#1F2937] mb-2">TrámiteFácil</h1>
        <p className="text-gray-600 text-sm text-center max-w-xs">
          Consulta todos tus trámites de forma rápida y segura
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col max-w-md w-full mx-auto"
      >
        <div className="mb-6">
          <label htmlFor="email" className="block text-[#1F2937] mb-2">
            Correo electrónico
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6FED] focus:border-transparent"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>
        </div>

        <div className="mb-8">
          <label htmlFor="password" className="block text-[#1F2937] mb-2">
            Contraseña
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6FED] focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#2F6FED] text-white py-4 rounded-xl hover:bg-[#1e40af] transition-colors shadow-md mb-4"
        >
          Continuar
        </button>

        <p className="text-center text-xs text-gray-500 mb-4">
          Al continuar aceptas los términos de uso
        </p>

        <button
          type="button"
          onClick={handleGuestLogin}
          className="w-full bg-white text-[#2F6FED] py-4 rounded-xl border-2 border-[#2F6FED] hover:bg-[#2F6FED] hover:text-white transition-colors shadow-md mb-6"
        >
          Entrar como invitado
        </button>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
            ¿No tienes cuenta?{' '}
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="text-[#2F6FED] hover:underline"
            >
              Crear cuenta
            </button>
          </p>
        </div>
      </motion.form>
    </div>
  );
}