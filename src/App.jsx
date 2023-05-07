import MainLayout from '@/components/Layout/MainLayout';
import Routings from '@/router/Routings';
import ThemeProvider from '@/theme/providers/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Routings />
      </MainLayout>
    </ThemeProvider>
  );
}
