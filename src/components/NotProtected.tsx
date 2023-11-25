import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

const NotProtected = ({ children }: { children: ReactNode }) => {
  const token = JSON.parse(sessionStorage.getItem("token")!);
  if (token) {
    return <Navigate to="/dashboard" />;
  }
  return <div>{children}</div>;
};
export default NotProtected;
