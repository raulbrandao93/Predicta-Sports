
import React, { useState, useCallback } from 'react';
// Fix: Corrected imports. The 'User' type should be imported from './types', not './constants'.
import { Screen, User } from './types';
import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './components/screens/HomeScreen';
import PredictionsScreen from './components/screens/PredictionsScreen';
import RankingScreen from './components/screens/RankingScreen';
import FeedScreen from './components/screens/FeedScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import Layout from './components/layout/Layout';
import { mockUser } from './constants';
import PlanScreen from './components/screens/PlanScreen';
import ChatScreen from './components/screens/ChatScreen';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [hasSelectedPlan, setHasSelectedPlan] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Home);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const handleLogin = useCallback(() => {
    setIsAuthenticated(true);
    setUser(mockUser);
  }, []);

  const handlePlanSelection = useCallback(() => {
    setHasSelectedPlan(true);
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    setHasSelectedPlan(false);
    setUser(null);
    setActiveScreen(Screen.Home);
  }, []);

  const renderScreen = () => {
    switch (activeScreen) {
      case Screen.Home:
        return <HomeScreen onNavigate={setActiveScreen} onOpenChat={() => setIsChatOpen(true)} />;
      case Screen.Predictions:
        return <PredictionsScreen />;
      case Screen.Ranking:
        return <RankingScreen />;
      case Screen.Feed:
        return <FeedScreen />;
      case Screen.Profile:
        return <ProfileScreen user={user!} onLogout={handleLogout} />;
      default:
        return <HomeScreen onNavigate={setActiveScreen} onOpenChat={() => setIsChatOpen(true)} />;
    }
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (!hasSelectedPlan) {
    return <PlanScreen onSelectPlan={handlePlanSelection} />;
  }

  return (
    <>
      <Layout activeScreen={activeScreen} setActiveScreen={setActiveScreen} user={user!}>
        {renderScreen()}
      </Layout>
      {isChatOpen && <ChatScreen onClose={() => setIsChatOpen(false)} />}
    </>
  );
};

export default App;
