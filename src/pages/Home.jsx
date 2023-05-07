import Feature from '@/components/Elements/Feature';
import { feature } from '@/config';

export default function Home() {
  return (
    <div>
      <Feature title={feature.title} sub={feature.subtitle} desc={feature.desc} />
    </div>
  );
}
