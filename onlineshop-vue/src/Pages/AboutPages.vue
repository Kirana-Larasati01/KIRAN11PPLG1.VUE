<template>
 <main class="about-page">
 <h1>Tentang Kami</h1>
 </main>
 
<main class="cerita">
<section class="cerita-text">
    <h1>Cerita Kami</h1>
    <p>online shop ini dikelola oleh siswa smk yadika jurusan pplg,
        sebagai proyek sekaligus membantu teman teman mendapatkan 
        perlengkapan sekolah dengan mudah dan trjangkau.
    </p>
    <p>
        setiap produk dipilih dan dikurasi tim kecil siswa,
        dengan mengambil langsung di koperasi sekolah.
    </p>
    </section>  
</main>

    <section class="image">
    <div class="cerita-image">
    </div>
</section>
</template>

<style scoped>
.about-page {
    display: grid;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    text-align: center;
     background: #140101;
background: linear-gradient(0deg, rgba(26, 2, 2, 1) 0%, rgba(222, 0, 0, 1) 100%);
}

.cerita {
 display: flex;
   align-items: center;
   gap: 30px;
   flex-direction: column;
}

.cerita-text {
    flex: 1;
}

.cerita-text h1 {
    margin-bottom: 30px;
}

.cerita-text p {
    margin-bottom: 30px;
    line-height: 20px;
}

.image{
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 220px;
    min-height: 15px;
    padding: 2rem;
    text-align: center;
    box-sizing: border-box;
       background: #140101;
background: linear-gradient(0deg, rgba(26, 2, 2, 1) 0%, rgba(222, 0, 0, 1) 100%);
    box-shadow: 0px 5px 10px rgba(119, 7, 7, 0.1);
    border-radius: 15px;
}

.cerita-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
</style>