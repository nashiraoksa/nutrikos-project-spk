// bootstrap
import Modal from 'react-bootstrap/Modal';
// react-hook-form
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// firebase
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

export const AlternativeInput = ({ show, handleClose, handle }) => {
  const schema = yup.object().shape({
    nama: yup.string().required('Isikan nama alternatif.'),
    kriteria1: yup.number().positive().integer().min(1).max(5).required(),
    kriteria2: yup.number().positive().integer().min(1).max(5).required(),
    kriteria3: yup.number().positive().integer().min(1).max(5).required(),
    kriteria4: yup.number().positive().integer().min(1).max(5).required(),
    kriteria5: yup.number().positive().integer().min(1).max(5).required(),
    kriteria6: yup.number().positive().integer().min(1).max(5).required(),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const alternativesRef = collection(db, 'alternatives');

  const onCreateAlternative = async (data) => {
    await addDoc(alternativesRef, {
      ...data,
    });
    reset(); // clearing input field
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tambah Alternatif</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="" onSubmit={handleSubmit(onCreateAlternative)}>
          <label htmlFor="" className="input-alternative">
            Nama Alternatif
          </label>
          <input type="text" className="input-alternative" placeholder="Nama" {...register('nama')} /> <br />
          <label htmlFor="" className="input-alternative">
            Karbohidrat
          </label>
          <input type="number" className="input-alternative" placeholder="Karbohidrat (Masukkan skala 1-5)" max={5} min={1} {...register('kriteria1')} /> <br />
          <label htmlFor="" className="input-alternative">
            Protein
          </label>
          <input type="number" className="input-alternative" placeholder="Protein (Masukkan skala 1-5)" max={5} min={1} {...register('kriteria2')} /> <br />
          <label htmlFor="" className="input-alternative">
            Lemak
          </label>
          <input type="number" className="input-alternative" placeholder="Lemak (Masukkan skala 1-5)" max={5} min={1} {...register('kriteria3')} /> <br />
          <label htmlFor="" className="input-alternative">
            Penyedap Makanan
          </label>
          <input type="number" className="input-alternative" placeholder="Penyedap Makanan (Masukkan skala 1-5)" max={5} min={1} {...register('kriteria4')} /> <br />
          <label htmlFor="" className="input-alternative">
            Aktivitas Harian
          </label>
          <input type="number" className="input-alternative" placeholder="Aktivitas Harian (Masukkan skala 1-5)" max={5} min={1} {...register('kriteria5')} /> <br />
          <label htmlFor="" className="input-alternative">
            Serat
          </label>
          <input type="number" className="input-alternative" placeholder="Serat (Masukkan skala 1-5)" max={5} min={1} {...register('kriteria6')} /> <br />
          <input type="submit" className="fill-button submit-alt" onClick={handle} />
        </form>
      </Modal.Body>
    </Modal>
  );
};
