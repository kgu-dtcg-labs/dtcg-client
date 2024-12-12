import reactHotToast from 'react-hot-toast';

export function toast(message: string) {
  reactHotToast(message, {
    duration: 1500,
    position: 'top-right',
    style: {
      width: 280,
      fontSize: 18,
      fontWeight: 700,
    },
  });
}
