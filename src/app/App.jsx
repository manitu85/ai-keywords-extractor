import '@/theme/styles.css';

import MainLayout from '@/app/layout/MainLayout';
// eslint-disable-next-line import/no-named-default
import { default as FramerRoutes } from '@/app/router/Routings';
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
