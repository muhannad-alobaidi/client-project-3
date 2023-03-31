import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import 'smoothscroll-anchor-polyfill';

import css from './page.module.css';




const Page = ({
}) => {
  const router = useRouter()
  const [scrollY, setScrollY] = useState(0);
  const [count, setCount] = useState(1);
  const [href, setHref] = useState("#");

  if (typeof window !== "undefined") {
    smoothscroll.polyfill();
    console.log("smooth scroll")
  }


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(scrollY)
  return (
    <div className={css.main}>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6536656/7922012/css/fonts.css" />
      </Head>

      <div className={css.container}>

        <header className={css.header}>
        <div className={css.back}>
          <Link href="/"><a ><img src="/images/Exit_history.png" alt="Vercel Logo" width={40} height={40} /></a></Link>
          </div>
          <h1>Tarinamme</h1>
        </header>
        <div className={css.spacer}></div>
        <div className={css.content}>
          <div className={css.mainSection}>
            <div className={css.sectionsContainer}>
              <section id='1' className={css.section1}>
                <h1>1891 Alku</h1>
                <p>Fazerin ja Fazer Cafén tarina alkaa vuodesta 1891, jolloin 25-vuotias Karl Fazer avasi ranskalais-venäläisen kahvilan Helsingissä osoitteessa Kluuvikatu 3. Näihin aikoihin rakennuksessa toimi kahvilan lisäksi valaisinkauppa, makkaramyymälä sekä muotiliike. Karl Fazer asui itse talon ylemmässä kerroksessa.</p>
                <img src="./images/1894Alku.png" alt="Vercel Logo" width={715} height={598} />
              </section>
              <section id='2'>
                <h1>1894 Rakkaustarina</h1>
                <div className={css.verticaltextcontainer}>
                  <p>Kahvilan perustamisen jälkeen Karl Fazer rakastui. Neiti Berta Blomqvist oli tunnettu kaunotar, joka vieraili kahvilassa kaakaolla. Kohtaaminen oli rakkautta ensisilmäyksellä. Berta oli juuri valmistunut kauppakoulusta, kun hänestä tuli Karlin elämänkumppani, lähin kollega ja neuvonantaja. Hän ei ollut vain muusa, vaan tasa-arvoinen yrityskumppani, jolla oli suuri vaikutus Fazer Cafén historiaan. Samaan aikaan, kun Karl keskittyi uusiin tuoteideoihin, Berta suunnitteli reseptejä, markkinointia ja kahvilan sisustusta. Berta on Fazerin alkuperäisen tyylin takana. Vinkki! Bertan suunnittelemaa rusettia käytetään nykypäivänäkin myymälän lahjatuotteiden pakkauksissa.</p>
                  <img src="./images/Berta1893.png" alt="Vercel Logo" width={360} height={560} />
                </div>
              </section>
              <section id='3'>
                <h1>1908 Uusia ystäviä</h1>
                <p>Fazer Café muutti uuteen isompaan tilaan samassa osoitteessa, arkkitehti Selin A. Lindquistin suunnittelemassa rakennuksessa. Rakennuksessa oli Fazer Cafén lisäksi karkkikauppa ja kaksi muuta kahvilaa – yksi yläkerrassa ja toinen alakerrassa. Viktor Jansson koristeli sisäänkäynnin kohokuvioin. Tulevaisuudessa hänen tyttärensä Tove Jansson, Muumi-hahmojen äiti, tekisi Fazerin kanssa yhteistyötä vuosikymmenien ajan. Vinkki! Tutustu myymälän ihaniin Muumi-tuotteisiin.</p>
                <img src="./images/1908_1.png" alt="Vercel Logo" width={360} height={230} />
                <img src="./images/1908_2.png" alt="Vercel Logo" width={360} height={230} />
              </section>
              <section id='4'>
                <h1>1930 Rakennuksen perintö </h1>
                <p>Fazer Cafén suosio jatkoi kasvuaan, ja Karl Fazer tarvitsi kahvilalle entistäkin isomman tilan. Nykyinen rakennus, jonka suunnitteli arkkitehti Göstä Juslin, avattiin vuonna 1930. Rakennus heijastelee 1920-luvun Art Deco -tyyliä, jolle on tyypillistä voimakkaat vaaka- ja pystysuorat linjat. Kahvilasta voi vielä tänä päivänä löytää Museoviraston suojeleman alkuperäisen lattian, katon, sisäänkäynnin, näyteikkunan, peiliseinän ja ilmanvaihtoaukot. Vinkki! Etsi kaikki alkuperäiset elementit kahvilasta ja myymälästä.</p>
                <img src="./images/1930_1.png" alt="Vercel Logo" width={360} height={230} />
                <img src="./images/1930_2.png" alt="Vercel Logo" width={360} height={230} />             
                 </section>
              <section id='5'>
                <h1>1940 Rakkaudessa ja sodassa.</h1>
                <p>Vuosien saatossa kahvilan tyyli ja tuotevalikoima on kehittynyt Karl Fazerin henkeä ja kunnianhimoa kunnioittaen. Vaikka toisen maailmansodan aikaan raaka-aineiden saatavuus oli heikkoa, kahvila pidettiin auki – kuuluisaa näyteikkunaa suojeltiin hiekkapussien avulla pommituksilta.</p>
                <img src="./images/1940.png" alt="Vercel Logo" width={760} height={390} />
              </section>
              <section id='6'>
                <h1>1950 Seiso jonossa</h1>
                <p>50-luvulla kahvila oli niin suosittu, että asiakkaita varten piti luoda jonotusjärjestelmä ensimmäistä kertaa koskaan Helsingissä.</p>
                <img src="./images/1950.png" alt="Vercel Logo" width={760} height={390} />
              </section>
              <section id='7'>
                <h1>1980 Jäätelön nousu</h1>
                <p>1980-luvulla jäätelöannokset olivat suosittu herkku – muistatko banana splitin tai KinKin- ja Waikiki-jäätelöt?</p>
                <img src="./images/1980_1.png" alt="Vercel Logo" width={360} height={1026.4} />
                <img src="./images/1980_2.png" alt="Vercel Logo" width={360} height={1026.4} />    
              </section>
              <section id='8'>
                <h1>1992-2003 Käytännöllisyys </h1>
                <p>Kahvilan remontoinnin yhteydessä alkuperäisiä funktionalistisia tyylipiirteitä entisöitiin. Hjalmar Hagelstamin seinälle maalaama fresko restauroitiin. Remontin yhteydessä löytyi myös kupolisalin alkuperäinen marmorilattia.</p>
                <img src="./images/1992.png" alt="Vercel Logo" width={760} height={570} />
              </section>
              <section id='9'>
                <h1>2022 Käsityöläisyyden taidetta </h1>
                <p>Fazer Café Kluuvikatua remontoitiin jälleen, kun uusi lippulaivamyymälä rakennettiin ja kahvilaa paranneltiin. Alkuperäiset marmoripöydät kunnostettiin ja asiakastilojen huonekalut uudistettiin. Vanha kassatiski dokumentoitiin ja siirrettiin säilytykseen, sekä myyntitasojen päällyslevyistä tehtiin pöytiä. Seinät entisöitiin alkuperäiseen kiiltoon. Uudessa studioalueessa korostuva käsityöläisyys on aina ollut kahvilan sydämessä. Vinkki! Myymälän vitriini, jossa tämä näyttö sijaitsee, oli osa vanhaa peiliseinää reunustavaa kassatiskiä.</p>
                <img src="./images/1992.png" alt="Vercel Logo" width={760} height={570} />
              </section>
            </div>
            <div id='10' className={css.sweets}>
              <div className={css.sweetscontainer}>
                <div id='11' className={css.sweetcard}>
                <img src="./images/1.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1895 Pihlaja</h2>
                <p>Kettukarkkinakin tunnettu Pihlaja-marmelaadimakeinen on Fazerin vanhin edelleen valmistuksessa oleva tuote.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/2.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1896 Mignon</h2>
                <p>Aitoon kananmunankuoreen valettujen Mignon -munien valmistus alkoi vuonna 1896. Mantelipähkinänougattäyteiset Mignonit valmistetaan Vantaan suklaatehtaassa käsityönä alusta loppuun. Vuosittain tehdään noin 1,5 miljoonaa munaa. </p>
                </div>
                <div id='12' className={css.sweetcard}>
                <img src="./images/3.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1897 Kiss Kiss</h2>
                <p>Kiss Kiss on ensimmäinen suomalainen rekisteröity tavaramerkki. Pitkulaisen karamellin sisällä on venyvä toffeetäyte.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/4.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1916 Da Capo</h2>
                <p>Da Capo on saanut nimensä musiikkitermistä, Da Capo = alusta uudelleen. Da Capo syntyi vuonna 1916 kierrätysideasta, kun rikkoutuneet liköörikonvehdit haluttiin saada uusiokäyttöön. Ne sulatettiin ja seokseen lorautettiin rommia tasoittamaan liköörin makua.</p>
                </div>
                <div id='13' className={css.sweetcard}>
                <img src="./images/5.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1922 Karl Fazer</h2>
                <p>Fazerin Sininen syntyi vuonna 1922. Suklaata valmistetaan edelleen samalla, salaisella reseptillä jonka Fazerin Perhe sai kiitoksena ystävänpalveluksesta. Karl Fazerin kultainen nimikirjoitus ja sininen väri ovat olleet maitosuklaan laadun tunnus alusta asti. </p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/6.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1928 Fazerin- lakritsi</h2>
                <p>Lakritsi saapui Fazerin valikoimiin 1920-luvun lopulla hankolaisen Suomalais-Englantilaisen Biscuit-tehtaan oston myötä. Fazerin nimissä lakritsin myynti aloitettiin vuonna 1928. </p>
                </div>
                <div id='14' className={css.sweetcard}>
                <img src="./images/7.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1938 Ensimmäinen- salmiakki</h2>
                <p>Fazerin ensimmäinen salmiakkituote oli nimeltään Anisa, jota valmistettiin Tehtaankadulla rakennuksen 3. kerroksessa. Anisa oli nimensä mukaisesti maustettu anisöljyllä. Makeisilla herkuttelu ei ollut yleistä vielä 30-luvulla ja harva onnekas sai maistaa mustaa herkkua ennen talvisodan alkua 1939. </p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/8.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1945 Dumle- tikkari, tikkis</h2>
                <p>Dumle julkaistiin alun perin tikkukaramellinna Ruotsissa vuonna 1945, sitä valmistettiin Malmössä Mazettin tehtaalla. Suomeen se tuotiin ensin tuotenimellä Tikkis vuonna 1985.</p>
                </div>
                <div id='15' className={css.sweetcard}>
                <img src="./images/9.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1949 Marianne</h2>
                <p>Viileän minttukaramellikuoren ja suklaasydämen omaavassa Marianne-karkissa yhdistyy venäläinen konvehtiperinne ja ranskalainen maku. Tuote keksittiin jo sota-aikana, mutta tuotanto alkoi vasta 1949. Taiteilija Aimo Vuorisen ehdotuksesta karamelli käärittiin klassiseen punavalkoraidalliseen käärepaperiin. Lyhteen muotoinen Marianne-valumuotti on pysynyt alusta alkaen samana.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/10.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1950-1960 Fazerin- Salmiakki </h2>
                <p>Fazerin salmiakkituotanto käynnistyi toden teolla 50-60 luvuilla jolloin Suomen salmiakkikulttuuri kehittyi makeisteollisuuden kanssa. 60-luvulta lähtien Suomalaiset ovat olleet intohimoista salmiakkikansaa, ja tämän aikakauden muodot näkyvät edelleen Fazerin Salmiakkien pakkauksissa.</p>
                </div>
                <div id='16' className={css.sweetcard}>
                <img src="./images/11.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1957 Moomin </h2>
                <p>Tove Jansson suunnitteli itse ensimmäisten Muumi-tuotteiden pakkaukset. Ensimmäinen tuote tuli markkinoille vuonna 1957.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/12.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1961 Pantteri </h2>
                <p>Pantterin tarina alkoi vuonna 1961, jolloin esiteltiin Pantteri-pastilli tulitikkuaskimaisessa rasiassa punaisin tunnuksin. Keltamustaan asuun Pantteri loikkasi 70-luvulla. Pantteri-makeispussi näki päivänvalon 1982. Pantteri-makeisesta on vuosien varrella ollut useita variaatioita, mm. salmiakkirae, väkevä salmiakkipastilli sekä ksylitolilla makeutettu pastilli. Viime vuosina Pantteri on loikannut myös pusseihin erilaisine makuineen. </p>
                </div>
                <div id='17' className={css.sweetcard}>
                <img src="./images/13.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1962 Geisha </h2>
                <p>Geisha-suklaan valmistaminen aloitettiin vuonna 1962. Sen täyte pohjautuu Fazer Caféssa valmistettuun Japonica-nimiseen hasselpähkinänougat -leivokseen, joka yhdistettiin makeisessa Fazerin maitosuklaaseen.  Geisha-nimi ja vaaleanpunainen väri lainattiin tuotteelle Fazerin Parhain -pussin makeiselta, joka taas sai uuden nimen “Tokyo”.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/14.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1980 Dumle toffee</h2>
                <p>Dumle julkaistiin alun perin tikkukaramellinna Ruotsissa vuonna 1945, sitä valmistettiin Malmössä Mazettin tehtaalla. Suomeen se tuotiin ensin tuotenimellä Tikkis vuonna 1985.</p>
                </div>
                <div id='18' className={css.sweetcard}>
                <img src="./images/15.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1989 Tutti Frutti </h2>
                <p>Tutti Frutti on jännittävä ja värikäs sekoitus herkullisia karamelleja, joissa maistuvat marjat ja hedelmät.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/16.png" alt="Vercel Logo" width={360} height={220} />
                <h2>2015 Uusi Fazer- Lakritsi</h2>
                <p>Fazer uudisti Lakritsi-valikoimaansa vuonna 2015. Lakritsit on kehitetty ja valmistettu Lappeenrannan makeistehtaalla.</p>
                </div>
              </div>

            </div>

          </div>
          <div className={css.nav}>
            <div className={css.navcontent}>
              <h2>FAZER CAFE</h2>
              <div className={css.yearsList}>
                <div className={css.years}>
                  <span className={ ((scrollY > 200) && (scrollY < 1000))  ? css.active2 : ""}></span>
                <Link href="#1"><a onClick={() => setCount(1)} className={  ((scrollY > 200) && (scrollY < 1000)) ? css.active : ""}>1891</a></Link>
                </div>
                <div className={css.years}>
                  <span className={((scrollY > 1000) && (scrollY < 1800)) ? css.active2 : ""}></span>
                <Link href="#2"><a onClick={() => setCount(2)} className={ ((scrollY > 1000) && (scrollY < 1800)) ? css.active : ""}>1894</a></Link>
                </div>
                <div className={css.years}>
                  <span className={ ((scrollY > 1800) && (scrollY < 2700)) ? css.active2 : ""}></span>
                <Link href="#3"><a onClick={() => setCount(3)} className={  ((scrollY > 1800) && (scrollY < 2700)) ? css.active : ""}>1908</a></Link>
                </div>
                <div className={css.years}>
                  <span className={ ((scrollY > 2700) && (scrollY < 3500)) ? css.active2 : ""}></span>
                <Link href="#4"><a onClick={() => setCount(4)} className={  ((scrollY > 2700) && (scrollY < 3500)) ? css.active : ""}>1930</a></Link>
                </div>
                <div className={css.years}>
                  <span className={ ((scrollY > 3500) && (scrollY < 4500)) ? css.active2 : ""}></span>
                <Link href="#5"><a onClick={() => setCount(5)} className={  ((scrollY > 3500) && (scrollY < 4500)) ? css.active : ""}>1940</a></Link>
                </div>
                <div className={css.years}>
                  <span className={ ((scrollY > 4500) && (scrollY < 5500)) ? css.active2 : ""}></span>
                <Link href="#6"><a onClick={() => setCount(6)} className={  ((scrollY > 4500) && (scrollY < 5500)) ? css.active : ""}>1950</a></Link>
                </div>
                <div className={css.years}>
                  <span className={ ((scrollY > 5500) && (scrollY < 7000)) ? css.active2 : ""}></span>
                <Link href="#7"><a onClick={() => setCount(7)} className={  ((scrollY > 5500) && (scrollY < 7000)) ? css.active : ""}>1980</a></Link>
                </div>
                <div className={css.years}>
                  <span className={((scrollY > 7000) && (scrollY < 8150)) ? css.active2 : ""}></span>
                <Link href="#8"><a onClick={() => setCount(8)} className={ ((scrollY > 7000) && (scrollY < 8150)) ? css.active : ""}>1990- 2003</a></Link>
                </div>
                <div className={css.years}>
                  <span className={ ((scrollY > 8150) && (scrollY < 9500)) ? css.active2 : ""}></span>
                <Link href="#9"><a onClick={() => setCount(9)} className={  ((scrollY > 8150) && (scrollY < 9500)) ? css.active : ""}>2022</a></Link>
                </div>

              </div>
              <h2>MAKEISET</h2>
              <div className={css.yearsList}>
              <div className={css.years}>
                  <span className={scrollY > 9500 ? css.active2 : ""}></span>
                <Link href="#10"><a className={ scrollY > 9500 ? css.active : ""}>Makeisten historaa</a></Link>
                </div>
              </div>
              <div className={css.navButtons}>
                <Link href={`${href}${count}`}><a onMouseDown={((count > 1) && (count <= 16))? () => setCount(count - 1) : () => setCount(count)} ><img src="/images/up.png" alt="Vercel Logo" width={40} height={40} /></a></Link>
                <Link href={`${href}${count}`}><a onMouseDown={((count >= 0) && (count < 16))? () => setCount(count + 1) : () => setCount(count)} ><img src="/images/down.png" alt="Vercel Logo" width={40} height={40} /></a></Link>
              </div>
              
            </div>
          </div>
        </div>


      </div>


    </div>
  );
};

Page.propTypes = {
  className: PropTypes.string,
};
Page.defaultProps = {
  className: null,
};

export default Page;
