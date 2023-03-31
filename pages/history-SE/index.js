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
          <h1>Vår berättelse</h1>
        </header>
        <div className={css.spacer}></div>
        <div className={css.content}>
          <div className={css.mainSection}>
            <div className={css.sectionsContainer}>
              <section id='1' className={css.section1}>
                <h1>1891 Början</h1>
                <p>Historien om Fazer och Fazer Café börjar redan år 1891, när Karl Fazer, då 25 år gammal, öppnade ett fransk-ryskt café vid Glogatan 3 i Helsingfors. Det fanns även en lampaffär, en korvaffär och en klädesaffär i samma fastighet. Karl Fazer bodde själv i byggnadens övre våning.</p>
                <img src="./images/1894Alku.png" alt="Vercel Logo" width={715} height={598} />
              </section>
              <section id='2'>
                <h1>1894 Kärleken </h1>
                <div className={css.verticaltextcontainer}>
                  <p>Inte långt efter att affärsverksamheten kommit igång förälskar sig Karl Fazer. Den populära skönheten, fröken Berta Blomqvist gjorde ett besök på Fazer Café för en kopp varm choklad. Besöket ledde till kärlek vid första ögonkastet. Berta, som hade slutfört sina studier vid yrkesskolan, blev Karls livskamrat, närmaste kollega och rådgivare. Hon var inte bara Karls inspirationskälla, utan en jämbördig motpart och nyckelperson i Fazer Cafés historia. Medan Karl ägnade sig åt att utveckla nya produkter, fokuserade sig Berta på recept, reklam och dekor. Berta är personen bakom Fazers stiluttryck. Tips! Bertas rosett pryder fortfarande våra gåvo-askar.</p>
                  <img src="./images/Berta1893.png" alt="Vercel Logo" width={360} height={560} />
                </div>
              </section>
              <section id='3'>
                <h1>1908 Nya Vänner</h1>
                <p>Cafét flyttade till en ny, rymligare lokal vid samma adress. Byggnaden var ritad av arkitekt Selin A. Lindquist och inhyste en godisaffär samt två caféer – ett i den övre våningen, och ett i den nedre. Ingången dekorerades med reliefer av skulptör Viktor Jansson – far till Tove Jansson. Tove Jansson, konstnären bakom Mumintrollen, skulle komma att samarbeta med Fazer över flera decennier. Tips! Ta en titt på alla fina Muminprodukter vid displayen I butiken.</p>
                <img src="./images/1908_1.png" alt="Vercel Logo" width={360} height={230} />
                <img src="./images/1908_2.png" alt="Vercel Logo" width={360} height={230} />
              </section>
              <section id='4'>
                <h1>1930 Byggnadsarvet</h1>
                <p>Populariteten för cafét tilltog och Karl Fazer behövde ett större utrymme. Den nuvarande byggnaden, ritad av arkitekt Gösta Juslin, invigdes år 1930 och reflekterar Art Deco stilen från 1920-talet med starka lodräta och vågräta linjer. Det ursprungliga golvet, taket, ingången, skyltfönstret, spegelväggen, och ventilationsgallren är ännu kvar idag och står under skydd med stöd av lagen om skyddande av byggnadsarvet. Tips! Kan du hitta och peka ut alla ursprungliga delar av cafét och butiken?</p>
                <img src="./images/1930_1.png" alt="Vercel Logo" width={360} height={230} />
                <img src="./images/1930_2.png" alt="Vercel Logo" width={360} height={230} />             
                 </section>
              <section id='5'>
                <h1>1940 i Kärlek och Krig</h1>
                <p>I sann Karl Fazer anda har vårt café utvecklats genom åren i så väl stil som utbud. Även under andra världskriget, då det var ont om råvaror hölls cafét öppet, med det berömda skyltfönstret i skydd bakom sandsäckar.</p>
                <img src="./images/1940.png" alt="Vercel Logo" width={760} height={390} />
              </section>
              <section id='6'>
                <h1>1950 Stå i kö </h1>
                <p>Under 50-talet var cafét så populärt att cafét fick introducera Finlands första kösystem.</p>
                <img src="./images/1950.png" alt="Vercel Logo" width={760} height={390} />
              </section>
              <section id='7'>
                <h1>1980 Glassens tidsålder</h1>
                <p>Under 1980-talet blev glassportionerna ett populärt inslag på menyn – minns du Banana Split, KinKin och Waikiki?</p>
                <img src="./images/1980_1.png" alt="Vercel Logo" width={360} height={1026.4} />
                <img src="./images/1980_2.png" alt="Vercel Logo" width={360} height={1026.4} />    
              </section>
              <section id='8'>
                <h1>1992-2003 Funktionalitet </h1>
                <p>Cafét renoverades och lokalens ursprungliga särdrag togs fram. Freskon på väggen, målad av konstnär Hjalmar Hagelstam, återställdes. Det ursprungliga marmorgolvet under kupolen hittades. Tips! Ta med dig en vän till cafét och sätt er i motsatta ändor under kupolen. Prova ifall ni kan höra varandra prata som resultat av kupolens enastående akustik.</p>
                <img src="./images/1992.png" alt="Vercel Logo" width={760} height={570} />
              </section>
              <section id='9'>
                <h1>2022 Hantvärkets konst </h1>
                <p>Fazer Café på Glogatan genomgick en omfattande renovering, en ny flaggskeppsbutik byggdes och café-upplevelsen förbättrades. De ursprungliga marmorborden restaurerades och det övriga möblemanget förnyades. Den gamla butiksdisken dokumenterades och sattes i förvar, och butikens bordsskivor används nu som cafébord. Väggarna återställdes till sin forna glans. Ett nytt studio-utrymme inrättades för att lyfta fram hantverket som fortsättningsvis ligger oss nära hjärtat. Tips! Kupolsalens kabinett, där den här skärmen står, var en del av spegelväggens gamla kassadisk.</p>
                <img src="./images/1992.png" alt="Vercel Logo" width={760} height={570} />
              </section>
            </div>
            <div id='10' className={css.sweets}>
              <div className={css.sweetscontainer}>
                <div id='11' className={css.sweetcard}>
                <img src="./images/1.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1895 Pihlaja</h2>
                <p>Även känd som “Rävgodis”. Pihlaja-fruktmarmeladen är Fazers äldsta produkt som fortfarande tillverkas.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/2.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1896 Mignon</h2>
                <p>Produktionen av Mignon -ägg, gjutna i äkta äggskal, inleddes år 1896. De mandelnougatfyllda Mignon -äggen tillverkas från början till slut för hand i chokladfabriken i Vanda. Varje år tillverkas omkring 1,5 miljoner Mignon -ägg.</p>
                </div>
                <div id='12' className={css.sweetcard}>
                <img src="./images/3.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1897 Kiss Kiss </h2>
                <p>Kiss Kiss är Finlands första registrerade varumärke. En avlång karamell med seg karamellfyllning.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/4.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1916 Da Capo</h2>
                <p>Da Capo fick sitt namn från en musikterm, Da Capo = upprepning från början. Da Capo föddes år 1916 ur en återvinningsidé, då man ville hitta en ny användning för defekta likörpraliner. De smältes ner och blandades upp med rom för att balansera likörsmaken.</p>
                </div>
                <div  id='13' className={css.sweetcard}>
                <img src="./images/5.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1922 Karl Fazer </h2>
                <p>Karl Fazers Blå föddes år 1922. Chokladen tillverkas fortfarande enligt samma hemliga recept som familjen Fazer fick som ett tack för en vänskaplig tjänst. Karl Fazers gyllene namnteckning och den blå färgen har varit ett kännetecken för mjölkchokladens kvalitet sedan starten.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/6.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1928 Fazer Lakritsi</h2>
                <p>Lakrits blev en del av Fazers utbud under slutet av 1920-talet genom köpet av den Finländskt-Engelska Biscuit-fabriken I Hangö. Försäljningen av lakrits under namnet Fazer inleddes år 1928.</p>
                </div>
                <div  id='14' className={css.sweetcard}>
                <img src="./images/7.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1938 Den första salmiaken </h2>
                <p>Fazers första salmiakprodukt hette Anisa och tillverkades på tredje våningen i byggnaden på Fabriksgatan. Anisa, som namnet antyder, smaksattes med Anisolja. Att unna sig godis var inte så vanligt ännu under 30-talet, och endast några lyckliga få hade möjligheten att smaka på den svarta läckerheten innan vinterkrigets början år 1939.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/8.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1945 Dumle-Klubba, Tikkis</h2>
                <p>Dumle lanserades som en slickepinne i Sverige år 1945. Då tillverkades den vid Mazzettis fabrik i Malmö. År 1985 importerades produkten till Finland under namnet Tikkis.</p>
                </div>
                <div  id='15' className={css.sweetcard}>
                <img src="./images/9.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1949 Marianne</h2>
                <p>Marianne karamellen, med sitt svalkande mintskal och chokladhjärta, kombinerar rysk konfektyrtradition med franska smaker. Produkten uppfanns redan under krigsåren, men tillverkningen kom igång först år 1949. Den tjärv-liknande Marianne-formen har förblivit den samma sedan starten.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/10.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1950-1960 Fazer Salmiak</h2>
                <p>Produktionen av Fazer Salmiak kom igång på allvar under 50-och 60-talet, då den finländska salmiak-kulturen utvecklades i takt med sötsaksindustrin. Sedan 60-talet har finländarna varit ett passionerat salmiakfolk och det tidsenliga formspråket syns fortfarande på Fazers Salmiak-förpackningar.</p>
                </div>
                <div  id='16' className={css.sweetcard}>
                <img src="./images/11.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1957 Moomin</h2>
                <p>Tove Jansson utformade själv förpackningarna för de första Mumin produkterna. Den första produkten lanserades år 1957.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/12.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1961 Pantteri</h2>
                <p>Pantteris historia började år 1961 då Pantteri pastiller med sina tändsticksaskformade förpackningar och röda markörer introducerades för första gången. Pantern hoppade in i sin svart-gula skrud under 70-talet. Pantteri godispåsarna introducerades år 1982. Pantteri har förekommit I ett flertal variationer under årens gång, som t.ex. dragéer, starka pastiller och pastiller smaksatta med xylitol. Under de senaste åren har pantern också hoppat ner i godispåsar i en variation av olika smaker.</p>
                </div>
                <div  id='17' className={css.sweetcard}>
                <img src="./images/13.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1962 Geisha</h2>
                <p>Produktionen av Geisha choklad inleddes år 1962. Fyllningen är baserad på en hasselnougat-bakelse vid namn Japonica, som tillverkades i Fazer Café och som sedan kombinerades med Fazers mjölkchoklad. Namnet Geisha och den ljusröda färgen lånades från en sötsak i Fazers Bästa-påsen, som i sin tur fick namnet “Tokyo”.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/14.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1980 Dumle toffee</h2>
                <p>Den omåttligt populära, choklad-glaserade toffee-sötsaken omformades från klubba och lanserades som konfekt under 80-talet.</p>
                </div>
                <div  id='18' className={css.sweetcard}>
                <img src="./images/15.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1989 Tutti Frutti</h2>
                <p>Tutti Frutti är en spännande och färgglad blandning av sötsaker med smak av bär och frukter.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/16.png" alt="Vercel Logo" width={360} height={220} />
                <h2>2015 Ny Fazer Lakrits </h2>
                <p>Fazer förnyade sitt lakritsutbud år 2015. Lakritsen utvecklas och produceras i Fazers konfektyrfabrik i Villmanstrand.</p>
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
                <Link href="#1"><a onClick={() => setCount(1)} className={ ((scrollY > 200) && (scrollY < 1000)) ? css.active : ""}>1891</a></Link>
                </div>
                <div className={css.years}>
                  <span className={((scrollY > 1000) && (scrollY < 1800)) ? css.active2 : ""}></span>
                <Link href="#2"><a onClick={() => setCount(2)} className={((scrollY > 1000) && (scrollY < 1800)) ? css.active : ""}>1894</a></Link>
                </div>
                <div className={css.years}>
                  <span className={ ((scrollY > 1800) && (scrollY < 2700)) ? css.active2 : ""}></span>
                <Link href="#3"><a onClick={() => setCount(3)} className={ ((scrollY > 1800) && (scrollY < 2700)) ? css.active : ""}>1908</a></Link>
                </div>
                <div className={css.years}>
                  <span className={ ((scrollY > 2700) && (scrollY < 3500)) ? css.active2 : ""}></span>
                <Link href="#4"><a onClick={() => setCount(4)} className={ ((scrollY > 2700) && (scrollY < 3500)) ? css.active : ""}>1930</a></Link>
                </div>
                <div className={css.years}>
                  <span className={ ((scrollY > 3500) && (scrollY < 4500)) ? css.active2 : ""}></span>
                <Link href="#5"><a onClick={() => setCount(5)} className={ ((scrollY > 3500) && (scrollY < 4500)) ? css.active : ""}>1940</a></Link>
                </div>
                <div className={css.years}>
                  <span className={ ((scrollY > 4500) && (scrollY < 5500)) ? css.active2 : ""}></span>
                <Link href="#6"><a onClick={() => setCount(6)} className={ ((scrollY > 4500) && (scrollY < 5500)) ? css.active : ""}>1950</a></Link>
                </div>
                <div className={css.years}>
                  <span className={ ((scrollY > 5500) && (scrollY < 7000)) ? css.active2 : ""}></span>
                <Link href="#7"><a onClick={() => setCount(7)} className={ ((scrollY > 5500) && (scrollY < 7000)) ? css.active : ""}>1980</a></Link>
                </div>
                <div className={css.years}>
                  <span className={((scrollY > 7000) && (scrollY < 8150)) ? css.active2 : ""}></span>
                <Link href="#8"><a onClick={() => setCount(8)} className={((scrollY > 7000) && (scrollY < 8150)) ? css.active : ""}>1990- 2003</a></Link>
                </div>
                <div className={css.years}>
                  <span className={ ((scrollY > 8150) && (scrollY < 9500)) ? css.active2 : ""}></span>
                <Link href="#9"><a onClick={() => setCount(9)} className={ ((scrollY > 8150) && (scrollY < 9500)) ? css.active : ""}>2022</a></Link>
                </div>

              </div>
              <h2>Godisets</h2>
              <div className={css.yearsList}>
              <div className={css.years}>
                  <span className={scrollY > 9500 ? css.active2 : ""}></span>
                <Link href="#10"><a onClick={() => setCount(10)} className={ scrollY > 9500 ? css.active : ""}>Godisets historia</a></Link>
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
