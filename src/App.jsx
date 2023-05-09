import MainLayout from '@/components/Layout/MainLayout';
// eslint-disable-next-line import/no-named-default
import { default as FramerRoutes } from '@/router/Routings';
import ThemeProvider from '@/theme/providers/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <FramerRoutes />
      </MainLayout>
    </ThemeProvider>
  );
}
