<template>
    <div class="landing-page">
        <h1 font-family="Arial, Helvetica, sans-serif">Selamat Datang di Toko Online Sekolah</h1>
        <p>Belanja gampang, sekolah senang.</p>
        <button class="Belanjakuy">
            <span>Belanjakuy</span>
        </button>
    </div>
    <div class="landing">
        <div class="landing-page2">
            <h1>😉</h1>
            <p>Kualitas Terjamin</p>
        </div>

        <div class="landing-page2">
            <h1>😉</h1>
            <p>Kualitas Terjamin</p>
        </div>

        <div class="landing-page2">
            <h1>😉</h1>
            <p>Kualitas Terjamin</p>
        </div>
    </div>
</template>

<style scoped>
.landing {
    display: flex;
    margin-bottom: 30px;
    margin-top: 30px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
}

.landing-page {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin-top: 50px;
    background: #140101;
    background: linear-gradient(0deg, rgba(26, 2, 2, 1) 0%, rgba(222, 0, 0, 1) 100%);
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(119, 7, 7, 0.1);
    padding: 50px;

}

.landing-page2 {

    flex-direction: column;
    background: #991212;
    height: 10rem;
    width: 20rem;
    text-align: center;
    border-radius: 10px;
    padding-top: 40px;
}


.Belanjakuy {
    --bg_shape_color: #1b0606;
    --border_radius: 10px;
    --color: #bbb;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: none;
    border: none;
    padding: 0px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    font-size: 16px;
    width: 180px;
    height: 50px;
    position: relative;
    z-index: 1;
    box-sizing: border-box;

}

.Belanjakuy::before,
.Belanjakuy::after {
    content: "";
    position: absolute;
    width: 25%;
    height: 10px;
    background: var(--bg_shape_color);
    border-radius: 10px;
    transition: 0.5s;
    box-sizing: border-box;
    transform: translatex(-50%);
    left: 50%;
}

.Belanjakuy::before {
    top: -5px;
}

.Belanjakuy::after {
    bottom: -7px;
}

.Belanjakuy span {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--border_radius);
    letter-spacing: 1px;
    text-decoration: none;
    overflow: hidden;
    color: var(--color);
    font-weight: bold;
    z-index: 1;
    transition: 0.5s;
    backdrop-filter: blur(15px);
    box-sizing: border-box;
}

.Belanjakuy:hover span {
    letter-spacing: 3px;
    color: #000;
}

.Belanjakuy span::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.3), transparent);
    transform: skewX(45deg) translate(0);
    transition: 0.5s;
    filter: blur(0px);
}

.Belanjakuy:hover span::before {
    transform: skewX(45deg) translate(200px);
}

.Belanjakuy:hover::before {
    top: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
}

.Belanjakuy:hover::after {
    bottom: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
}

/*** disabled style ***/
.Belanjakuy:disabled {
    pointer-events: none;
    opacity: .65;
    color: #7e7e7e;
    background: none;
    box-shadow: none;
    text-shadow: none;
}

.Belanjakuy:disabled span {
    color: #7e7e7e;
    background: #dcdcdc;
    box-shadow: none;
}

.Belanjakuy:disabled::before,
.Belanjakuy:disabled::after {
    background: #dcdcdc;
}
</style>
