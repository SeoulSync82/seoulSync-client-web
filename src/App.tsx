import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Index';
import ModalPortal from '@/utils/portal/portal';
import AlertModal from './components/modals/AlertModal';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ModalPortal>
        <AlertModal />
      </ModalPortal>
    </>
  );
}

export default App;
