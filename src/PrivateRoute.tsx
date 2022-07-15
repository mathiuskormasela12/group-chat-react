// ========== Private Route
// import all modules
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { IPrivateRouteProps, IReduxStates } from './interfaces';

const PrivateRouter: React.FC<IPrivateRouteProps> = (props) => {
  const { children } = props;
  const accessToken: string = useSelector((
    globalStates: IReduxStates,
  ) => globalStates.auth.accessToken);

  if (accessToken === '') {
    return <Navigate to="/join" />;
  }

  return children;
};

export default PrivateRouter;
