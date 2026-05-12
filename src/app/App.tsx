import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { SplashScreen } from './components/SplashScreen';
import { LoginScreen } from './components/LoginScreen';
import { RegisterScreen } from './components/RegisterScreen';
import { HomeScreen } from './components/HomeScreen';
import { TramitesListScreen } from './components/TramitesListScreen';
import { TramiteDetailScreen } from './components/TramiteDetailScreen';
import { SavedScreen } from './components/SavedScreen';
import { RemindersScreen } from './components/RemindersScreen';
import { SearchScreen } from './components/SearchScreen';
import { FavoritesScreen } from './components/FavoritesScreen';
import { ProfileScreen } from './components/ProfileScreen';

export default function App() {
  return (
    <Router>
      <div className="size-full bg-gray-50">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/tramites/:category" element={<TramitesListScreen />} />
          <Route path="/tramite/:category/:id" element={<TramiteDetailScreen />} />
          <Route path="/saved" element={<SavedScreen />} />
          <Route path="/reminders" element={<RemindersScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/favorites" element={<FavoritesScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}
