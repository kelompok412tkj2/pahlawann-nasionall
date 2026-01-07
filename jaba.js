const heroes = {
    soekarno: {
        name: "Ir. Soekarno",
        img: "img/soekarno.jpg",
        bio: `
        <strong>Nama Lengkap:</strong> Ir. Soekarno<br>
        <strong>Tempat, Tanggal Lahir:</strong> Surabaya, 6 Juni 1901<br>
        <strong>Wafat:</strong> Jakarta, 21 Juni 1970<br><br>

        Ir. Soekarno adalah Presiden pertama Republik Indonesia sekaligus
        Proklamator Kemerdekaan Indonesia. Ia berperan sangat besar dalam
        mempersatukan bangsa Indonesia yang terdiri dari berbagai suku,
        agama, dan budaya.<br><br>

        Soekarno juga dikenal sebagai penggagas Pancasila yang menjadi
        dasar negara Indonesia. Dalam perjuangannya, ia berkali-kali
        dipenjara dan diasingkan oleh penjajah Belanda karena aktivitas
        politiknya. Kepemimpinannya menjadi simbol perjuangan dan
        semangat kemerdekaan bangsa Indonesia.
        `
    },

    hatta: {
        name: "Mohammad Hatta",
        img: "img/hatta.jpg",
        bio: `
        <strong>Nama Lengkap:</strong> Dr. (H.C.) Mohammad Hatta<br>
        <strong>Tempat, Tanggal Lahir:</strong> Bukittinggi, 12 Agustus 1902<br>
        <strong>Wafat:</strong> Jakarta, 14 Maret 1980<br><br>

        Mohammad Hatta adalah Wakil Presiden pertama Republik Indonesia.
        Ia dikenal sebagai tokoh yang sederhana, jujur, dan berintegritas
        tinggi. Bersama Ir. Soekarno, ia memproklamasikan kemerdekaan
        Indonesia pada tanggal 17 Agustus 1945.<br><br>

        Selain sebagai negarawan, Hatta juga dikenal sebagai Bapak
        Koperasi Indonesia karena perhatiannya terhadap ekonomi rakyat.
        Pemikirannya banyak dituangkan dalam tulisan-tulisan ilmiah dan
        buku yang hingga kini masih dipelajari.
        `
    },

    kartini: {
        name: "R.A. Kartini",
        img: "img/kartini.jpg",
        bio: `
        <strong>Nama Lengkap:</strong> Raden Ajeng Kartini<br>
        <strong>Tempat, Tanggal Lahir:</strong> Jepara, 21 April 1879<br>
        <strong>Wafat:</strong> Rembang, 17 September 1904<br><br>

        R.A. Kartini merupakan pelopor emansipasi wanita di Indonesia.
        Ia memperjuangkan hak perempuan untuk memperoleh pendidikan dan
        kebebasan berpikir, yang pada masa itu sangat dibatasi.<br><br>

        Pemikiran Kartini dituangkan dalam surat-surat yang dikirimkan
        kepada sahabatnya di Belanda. Surat-surat tersebut kemudian
        dibukukan dengan judul <em>Habis Gelap Terbitlah Terang</em> dan
        menjadi inspirasi perjuangan perempuan Indonesia hingga kini.
        `
    },

    diponegoro: {
        name: "Pangeran Diponegoro",
        img: "img/diponegoro.jpg",
        bio: `
        <strong>Nama Lengkap:</strong> Pangeran Diponegoro<br>
        <strong>Tempat, Tanggal Lahir:</strong> Yogyakarta, 11 November 1785<br>
        <strong>Wafat:</strong> Makassar, 8 Januari 1855<br><br>

        Pangeran Diponegoro adalah pemimpin besar Perang Diponegoro
        (1825–1830) melawan penjajahan Belanda. Perang ini merupakan salah
        satu perlawanan terbesar rakyat Jawa terhadap kolonialisme.<br><br>

        Ia dikenal sebagai sosok religius, berani, dan tegas dalam
        memperjuangkan keadilan. Meskipun akhirnya ditangkap melalui
        tipu daya, semangat juangnya tetap menjadi teladan bagi bangsa
        Indonesia.
        `
    },

    cutnyakdien: {
        name: "Cut Nyak Dien",
        img: "img/cutnyakdien.jpg",
        bio: `
        <strong>Nama Lengkap:</strong> Cut Nyak Dien<br>
        <strong>Tempat, Tahun Lahir:</strong> Aceh, 1848<br>
        <strong>Wafat:</strong> Sumedang, 6 November 1908<br><br>

        Cut Nyak Dien adalah pahlawan nasional perempuan dari Aceh yang
        gigih melawan penjajahan Belanda. Setelah suaminya gugur dalam
        perang, ia melanjutkan perjuangan dengan memimpin perlawanan
        rakyat Aceh.<br><br>

        Keteguhan, keberanian, dan semangat juangnya menjadikan Cut Nyak
        Dien sebagai simbol perlawanan dan keteguhan perempuan Indonesia
        dalam mempertahankan tanah air.
        `
    },

    pattimura: {
        name: "Pattimura",
        img: "img/pattimura.jpg",
        bio: `
        <strong>Nama Lengkap:</strong> Thomas Matulessy (Pattimura)<br>
        <strong>Tempat, Tanggal Lahir:</strong> Maluku, 8 Juni 1783<br>
        <strong>Wafat:</strong> Ambon, 16 Desember 1817<br><br>

        Pattimura adalah pahlawan nasional dari Maluku yang memimpin
        perlawanan rakyat terhadap penjajahan Belanda. Ia berhasil
        menggerakkan rakyat untuk melawan ketidakadilan dan penindasan.<br><br>

        Semangat perjuangan Pattimura mencerminkan keberanian dan
        persatuan rakyat Maluku dalam mempertahankan hak dan kedaulatan
        tanah air.
        `
    }
};

function showHero(key) {
    const hero = heroes[key];
    document.getElementById("content").innerHTML = `
        <img src="${hero.img}" alt="${hero.name}">
        <h2>${hero.name}</h2>
        <p>${hero.bio}</p>
    `;
}