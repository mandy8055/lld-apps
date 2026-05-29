import Content from './components/content.tsx';
import ProgressBar from './components/progress-bar.tsx';
import { useScrollProgress } from './hooks/use-scroll-progress.ts';

const App: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <>
      <ProgressBar progress={progress} />
      <Content />
    </>
  );
};

export default App;
