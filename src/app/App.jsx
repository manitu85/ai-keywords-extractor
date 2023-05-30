import '@/theme/styles.css';

import MainLayout from '@App/layouts/MainLayout';
import FramerRoutes from '@App/router/Routings';

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
