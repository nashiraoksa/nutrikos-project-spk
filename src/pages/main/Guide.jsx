import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useState } from 'react';
import { CriteriaTableBody } from '../../components/CriteriaTableBody';
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { Footer } from '../../components/Footer';

export const Guide = () => {
  const [criteria, setCriteria] = useState(null);

  const criteriaRef = collection(db, 'criteria');

  const getCriteria = async () => {
    const criteriaData = await getDocs(criteriaRef);
    const data = criteriaData.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setCriteria(data);
  };

  useEffect(() => {
    getCriteria();
  }, []);

  return (
    <>
      <div className="guide">
        <h2 className="g-title">Tentang NutriKos</h2>
        <p>
          NutriKos merupakan sebuah sistem pendukung keputusan berbasis web yang dapat membantu para mahasiswa, khususnya anak kos, untuk menemukan gaya hidup terbaik yang dapat diterapkan pada kehidupan sehari-hari. Pemilihan gaya hidup
          didasarkan pada 6 kriteria, yaitu Konsumsi Karbohidrat, Konsumsi Protein, Konsumsi Lemak, Konsumsi Penyedap Makanan, Jenis Aktivitas Fisik, dan Konsumsi Serat yang kemudian dpertimbangkan pada setiap alternatif dengan menggunakan
          model TOPSIS.
        </p>
        <h2 className="guide-title g-title">Panduan Penggunaan NutriKos</h2>
        <h3>1. Login/Sign Up</h3>
        <p>Pengguna harus melakukan Login/Sign Up terlebih dahulu sebelum dapat menggunakan fitur sistem pendukung keputusan pada halaman DSS.</p>
        <h3>2. Menentukan Alternatif dan Skala Kriteria</h3>
        <p>Pengguna menentukan alternatif gaya hidup dan memasukkan skala nilai kriteria yang akan dipakai untuk pengambilan keputusan sesuai dengan tabel berikut. Data dimasukkan dengan menekan tombol "+Alternatif".</p>
      </div>
      <div className="table-card-guide">
        <h2>Data Kriteria</h2>
        <Table striped bordered hover className="matrix-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama Kriteria</th>
              <th>Bobot</th>
              <th>Sifat</th>
            </tr>
          </thead>
          <tbody>
            {criteria?.map((data) => (
              <CriteriaTableBody nama={data.nama} bobot={data.bobot} sifat={data.sifat}></CriteriaTableBody>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="guide-child">
        <p>
          Kriteria dengan sifat Benefit adalah kriteria yang baik bagi gaya hidup, sehingga semakin banyak akan semakin baik. Sedangkan kriteria dengan sifat Cost adalah kriteria yang buruk bagi gaya hidup, sehingga semakin banyak akan
          semakin buruk.
        </p>
      </div>
      <div className="table-card-guide">
        <h2>Tabel Skala Kriteria</h2>
        <Table striped bordered hover className="matrix-table">
          <thead>
            <tr>
              <th colSpan={2}></th>
              <th colSpan={5} className="tab-mid">
                Skala
              </th>
            </tr>
            <tr>
              <th>No.</th>
              <th>Nama Kriteria</th>
              <th className="tab-mid">1</th>
              <th className="tab-mid">2</th>
              <th className="tab-mid">3</th>
              <th className="tab-mid">4</th>
              <th className="tab-mid">5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Konsumsi Karbohidrat</td>
              <td>0 - 60 gram</td>
              <td>61 - 150 gram</td>
              <td>151 - 225 gram</td>
              <td>226 - 275 gram</td>
              <td>276 - 300 gram</td>
            </tr>
            <tr>
              <td></td>
              <td>Konsumsi Protein</td>
              <td>0 - 30 gram</td>
              <td>31 - 50 gram</td>
              <td>51 - 70 gram</td>
              <td>71 - 90 gram</td>
              <td>91 - 120 gram</td>
            </tr>
            <tr>
              <td></td>
              <td>Konsumsi Lemak</td>
              <td>0 - 10 gram</td>
              <td>11 - 20 gram</td>
              <td>21 - 30 gram</td>
              <td>31 - 40 gram</td>
              <td>41 - 50 gram</td>
            </tr>
            <tr>
              <td></td>
              <td>Konsumsi Penyedap Makanan</td>
              <td>0 - 20 gram</td>
              <td>21 - 30 gram</td>
              <td>31 - 40 gram</td>
              <td>41 - 50 gram</td>
              <td>51 - 70 gram</td>
            </tr>
            <tr>
              <td></td>
              <td>Aktivitas Fisik</td>
              <td>Sedikit</td>
              <td>Moderat</td>
              <td>Aktif</td>
              <td>Tinggi</td>
              <td>Ekstrem</td>
            </tr>
            <tr>
              <td></td>
              <td>Konsumsi Serat</td>
              <td>0 - 21 gram</td>
              <td>22 - 31 gram</td>
              <td>32 - 37 gram</td>
              <td>38 - 43 gram</td>
              <td>44 - 50 gram</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="guide-child">
        <h4>Penjelasan Skala Aktivitas Fisik</h4>
        <p>
          <b>1 (Sedikit):</b> Aktivitas fisik biasa untuk menunjang rutinitas. Tingkat lama/jarak aktivitas fisik mengikuti rata-rata aktivitas masyarakat Indonesia. Contoh: berjalan di kampus, melakukan praktikum.
        </p>
        <p>
          <b>2 (Moderat):</b> Aktivitas fisik untuk menunjang rutinitas, tetapi lama/jarak aktivitas fisik lebih besar dari rata-rata aktivitas masyarakat Indonesia ditandai dengan adanya keringat Contoh: bersepeda/berjalan dari kost ke
          kampus, jogging mengelilingi lapangan, kegiatan kepramukaan, yoga.
        </p>
        <p>
          <b>3 (Aktif):</b> Aktivitas fisik yang dilakukan khusus kebugaran. Terdapat perasaan panas pada dalam tubuh setelah melakukan aktivitas serta intensitas ringan sehingga tidak perlu terdapat keringat. Contoh: kegiatan workout (push
          up, sit up, dll.), olahraga berlari, gym.
        </p>
        <p>
          <b>4 (Tinggi):</b> Aktivitas fisik yang dilakukan khusus kebugaran di mana tubuh mengeluarkan keringat yang membasahi tubuh. Kelelahan yang dirasakan normal di mana dapat hilang jika aktivitas dihentikan. Contoh: sprint, lari
          jarak jauh nonmarathon, workout pace tinggi seperti tabata, futsal di lini belakang.
        </p>
        <p>
          <b>5 (Ekstrem):</b> Aktivitas fisik yang dilakukan khusus untuk cutting otot di mana tubuh mengeluarkan keringat yang membasahi pakaian, terlihat dari noda basah. Kelelahan yang dirasakan berat di mana dapat hilang jika melakukan
          pendinginan atau istirahat penuh dari segala aktivitas. Merasakan sakit pada bagian tubuh tertentu. Terdapat ngos-ngosan (sedikit atau banyak). Contoh: Marathon; olahraga kardio berat; futsal di lini depan.
        </p>
        <br />
        <p>
          Referensi tabel skala kriteria diambil dari: <a href="https://www.alodokter.com/manfaat-diet-karbohidrat-dan-cara-melakukannya">alodokter.com</a>
        </p>

        <h3>3. Melakukan Perhitungan</h3>
        <p>Setelah memahami tabel di atas dan memasukkan data alternatif dan skala kriteria, pengguna dapat menekan tombol "Hitung" yang ada di pojok kanan bawah untuk melakukan perhitungan TOPSIS.</p>
        <h3>4. Mendapatkan Ranking Alternatif</h3>
        <p>Perhitungan TOPSIS akan secara otomatis melakukan perankingan alternatif gaya hidup yang paling baik bagi pengguna. Data ranking alternatif akan muncul pada tabel "Hasil Perhitungan TOPSIS".</p>
      </div>
      <Footer></Footer>
    </>
  );
};
