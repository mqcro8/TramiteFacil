import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, User, Mail, Lock, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export function RegisterScreen() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      return;
    }

    toast.success('Cuenta creada correctamente', {
      icon: <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />,
    });
    
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-8 mt-8"
      >
        <div className="bg-[#2F6FED] bg-opacity-10 rounded-full p-6 mb-4">
          <FileText className="w-16 h-16 text-[#2F6FED]" />
        </div>
        <h1 className="text-2xl text-[#1F2937] mb-2">TrámiteFácil</h1>
        <p className="text-gray-600 text-sm">Crea tu cuenta para comenzar</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col max-w-md w-full mx-auto"
      >
        <div className="mb-5">
          <label htmlFor="name" className="block text-[#1F2937] mb-2">
            Nombre
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6FED] focus:border-transparent"
              placeholder="Tu nombre"
              required
            />
          </div>
        </div>

        <div className="mb-5">
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
              placeholder="tu@email.com"
              required
            />
          </div>
        </div>

        <div className="mb-5">
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
              minLength={6}
            />
          </div>
        </div>

        <div className="mb-8">
          <label htmlFor="confirmPassword" className="block text-[#1F2937] mb-2">
            Confirmar contraseña
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6FED] focus:border-transparent"
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#2F6FED] text-white py-4 rounded-xl hover:bg-[#1e40af] transition-colors shadow-md mb-6"
        >
          Crear cuenta
        </button>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
            ¿Ya tienes cuenta?{' '}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-[#2F6FED] hover:underline"
            >
              Iniciar sesión
            </button>
          </p>
        </div>
      </motion.form>
    </div>
  );
}
