import Page from './components/Page.tsx';

const App: React.FC = () => {
  return (
    <div className='snap-y snap-mandatory h-screen overflow-y-scroll'>
      <nav className='h-8 fixed w-screen bg-white'>Heading</nav>
      <Page color='#E6EAE3' heading='Page 1' />
      <Page color='#F5E6D3' heading='Page 2' />
      <Page color='#E6E6FA' heading='Page 3' />
      <Page color='#E0F0F5' heading='Page 4' />
      <Page color='#FFE5D9' heading='Page 5' />
    </div>
  );
};

export default App;
