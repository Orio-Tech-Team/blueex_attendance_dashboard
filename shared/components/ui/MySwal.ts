import Swal from 'sweetalert2';

interface Props {
  icon: any;
  title: any;
  text: any;
  onConfirm: () => void;
}

const MySwal = ({ icon, title, text, onConfirm }: Props) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonColor: '#3B82F6',
    // confirmButtonText: 'OK',
  }).then((isConfirm) => {
    if (icon == 'success') onConfirm();
  });
};

export default MySwal;
