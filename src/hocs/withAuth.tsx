import { redirect } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';

export default function withAuth<Props extends object>(
  WrappedComponent: React.ComponentType<Props>,
) {
  function AuthenticatedComponent(props: Props) {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      redirect('/login');
      return null;
    }
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  AuthenticatedComponent.displayName = `withAuth(${wrappedComponentName})`;

  return AuthenticatedComponent;
}
