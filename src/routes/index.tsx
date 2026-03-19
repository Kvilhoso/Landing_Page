import { Home, TermsOfUse, PrivacyPolicies, RiskWarning } from '@/pages';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/terms-of-use',
    element: <TermsOfUse />,
  },
  {
    path: '/risk-warning',
    element: <RiskWarning />,
  },
  {
    path: '/privacy-policies',
    element: <PrivacyPolicies />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
