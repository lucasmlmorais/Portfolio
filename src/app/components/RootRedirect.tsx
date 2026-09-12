import { Navigate } from "react-router";
import { detectPreferredLocale } from "../../i18n/detect";

export function RootRedirect() {
  return <Navigate to={`/${detectPreferredLocale()}`} replace />;
}
