// ========== Router
// import all modules
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistedStore from './redux/store';
import { GlobalStyles } from './styles';

// import all pages
import JoinChatRoom from './pages/JoinChatRoom';
import ChatRoom from './pages/ChatRoom';
import PrivateRouter from './PrivateRoute';

const Router: React.FC = () => {
  const { store, persistor } = persistedStore;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={(
                <PrivateRouter>
                  <ChatRoom />
                </PrivateRouter>
							)}
            />
            <Route path="/join" element={<JoinChatRoom />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyles />
      </PersistGate>
    </Provider>
  );
};

export default Router;
