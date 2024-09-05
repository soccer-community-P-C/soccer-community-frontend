import { redirect } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';

export default function withoutAuth<Props extends object>(
  WrappedComponent: React.ComponentType<Props>,
) {
  function UnauthenticatedComponent(props: Props) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      redirect('/');
      return null;
    }
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  UnauthenticatedComponent.displayName = `withoutAuth(${wrappedComponentName})`;

  return UnauthenticatedComponent;
}
