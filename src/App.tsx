import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Index';
import ModalPortal from '@/utils/portal/portal';
import AlertModal from './components/modals/AlertModal';
import BottomSheetModal from './components/modals/BottomSheetModal';
import ToastModal from './components/modals/ToastModal';
import AddPlaceModal from './components/modals/AddPlaceModal';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ModalPortal>
        <AlertModal />
        <BottomSheetModal />
        <ToastModal />
        <AddPlaceModal />
      </ModalPortal>
    </>
  );
}

export default App;
