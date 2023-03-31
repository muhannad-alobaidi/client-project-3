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
    
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);

    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  console.log(count)
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
          <h1>OUR STORY</h1>
        </header>
        <div className={css.spacer}></div>
        <div className={css.content}>
          <div className={css.mainSection}>
            <div className={css.sectionsContainer}>
              <section id='1' className={css.section1}>
                <h1>1891 The Beginning</h1>
                <p>The story of Fazer and Fazer Café goes back to 1891, when Karl Fazer opened a French-Russian café at Kluuvikatu 3 in Helsinki, at the age of 25. At the time there was already a lamp shop, a sausage shop, and a fashion shop in the same property. Karl Fazer himself lived on the upper floor. </p>
                <img src="./images/1894Alku.png" alt="Vercel Logo" width={715} height={598} />
              </section>
              <section id='2'>
                <h1>1894 The Love Story</h1>
                <div className={css.verticaltextcontainer}>
                  <p>Not long after establishing his business, Karl Fazer fell in love. The popular beauty, Miss Berta Blomqvist came by the Café for a cup of hot chocolate. It was love at first sight. Berta, who had finished trade school, eventually became Karl´s life-companion, closest colleague and advisor. She was not merely a muse, but an equal partner and key contributor to the history of Fazer Cafe. Karl focused on new product ideas, while Berta brought ideas for recipes, advertising and decoration to life. Berta was the primus motor in creating the Fazer style. Tip! Berta’s Bow is still used to decorate our gift boxes</p>
                  <img src="./images/Berta1893.png" alt="Vercel Logo" width={360} height={560} />
                </div>
              </section>
              <section id='3'>
                <h1>1908 New friends</h1>
                <p>The Café moved into a new, bigger space on the same site. The building was designed by architect Selin A. Lindquist, and held a candy store as well as two cafés – one upstairs, and one downstairs. The entrance was decorated with reliefs by sculptor Viktor Jansson – the father of Tove Jansson. Tove Jansson, creator of Moomin, would later collaborate with Fazer over many decades. Tip! Check out all the lovely Moomin products at the Moomin display in the shop</p>
                <img src="./images/1908_1.png" alt="Vercel Logo" width={360} height={230} />
                <img src="./images/1908_2.png" alt="Vercel Logo" width={360} height={230} />
              </section>
              <section id='4'>
                <h1>1930 Building heritage</h1>
                <p>The popularity of the café grew and Karl Fazer needed a bigger space. The current building, designed by architect Gösta Juslin, opened in 1930 and reflects the Art Deco style of the 1920’s with strong vertical and horizontal lines. The original floor, ceiling, entrance, display window, mirror wall, and ventilation grids still remain today and are protected under the Act on the Protection of the Built Heritage. Tip! Spot all of the original features around the Café and Shop</p>
                <img src="./images/1930_1.png" alt="Vercel Logo" width={360} height={230} />
                <img src="./images/1930_2.png" alt="Vercel Logo" width={360} height={230} />             
                 </section>
              <section id='5'>
                <h1>1940 In Love and War.</h1>
                <p>True to Karl Fazer’s spirit and ambition, our café has evolved over the years both in style and product offering. During WW2, raw materials were in short supply, but the café continued to operate through-out the war years, even as sandbags were shielding the famous window display. </p>
                <img src="./images/1940.png" alt="Vercel Logo" width={760} height={390} />
              </section>
              <section id='6'>
                <h1>1950 Stand in line</h1>
                <p>In the 50s the café was so popular that it introduced one of the first customer queuing systems in Helsinki.</p>
                <img src="./images/1950.png" alt="Vercel Logo" width={760} height={390} />
              </section>
              <section id='7'>
                <h1>1980 The Rise of the Ice Cream</h1>
                <p>In the 1980’s, ice cream servings were a popular item – do you remember Banana Split, KinKin and Waikiki?</p>
                <img src="./images/1980_1.png" alt="Vercel Logo" width={360} height={1026.4} />
                <img src="./images/1980_2.png" alt="Vercel Logo" width={360} height={1026.4} />    
              </section>
              <section id='8'>
                <h1>1992-2003 Functionality </h1>
                <p>The café underwent renovations and the original features of functionalism were restored. The fresco on the wall, painted by artist Hjalmar Hagelstam, was restored. Furthermore, the original marble floor in the cupola area was found. Tip! Take a friend and sit in the cupola area on opposite sides. See if you can hear one another due to the extraordinary acoustics of the cupola</p>
                <img src="./images/1992.png" alt="Vercel Logo" width={760} height={570} />
              </section>
              <section id='9'>
                <h1>2022 Art of the Craft</h1>
                <p>Fazer Café Kluuvikatu went through a large renovation, a new Fazer flagship store was built, and the overall café experience was improved. Original marble tables were restored and rest of the customer furniture was renewed. The old store counter was documented and put into storage, while store countertops were re-used as customer tables. The walls were restored to bring back their original shine. A new studio area was created to highlight the craftmanship that continues to be at the heart of our café. Tip! The glass dome cabinet that holds this screen was part of the old store counter that ran along the mirror wall</p>
                <img src="./images/1992.png" alt="Vercel Logo" width={760} height={570} />
              </section>
            </div>
            <div id='10' className={css.sweets}>
              <div className={css.sweetscontainer}>
                <div id='11' className={css.sweetcard}>
                <img src="./images/1.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1895 Pihlaja</h2>
                <p>Known as ”Fox candy”, the Pihlaja-marmalade is Fazer’s oldest product still in production.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/2.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1896 Mignon</h2>
                <p>Production of the Mignon -eggs, cast in genuine eggshells, started in 1896. Filled with almond nougat, the Mignon eggs are produced at the Vantaa chocolate factory as an artisan product from start to finish. Every year around 1,5 million Mignon -eggs are produced.</p>
                </div>
                <div id='12' className={css.sweetcard}>
                <img src="./images/3.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1897 Kiss Kiss </h2>
                <p>Kiss Kiss is the first registered trademark from Finland. The elongated candy is filled with chewy caramel.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/4.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1916 Da Capo</h2>
                <p>Da Capo got its name from a musical term, Da Capo = repeat from the beginning. Da Capo was born in 1916 out of a recycling idea, as there was a request to find a new purpose for defect liquor confectionery. It was molten down and mixed with rum in order to balance the liquor taste.</p>
                </div>
                <div id='13' className={css.sweetcard}>
                <img src="./images/5.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1922 Karl Fazer </h2>
                <p>Karl Fazer Milk Chocolate, commonly known as Fazer Blue, was born in 1922. The chocolate is still produced according to the same secret recipe given to the Fazer family as a thank you for a friendly favor. Karl Fazer’s golden signature and the blue color has been a mark of quality for the milk chocolate since the beginning.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/6.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1928 Fazer Lakritsi</h2>
                <p>Licorice made an entrance in the Fazer offering in the late 1920s through the acquisition of the Finnish-English Biscuit factory in Hanko. The sales of licorice under the Fazer name began in the year 1928.</p>
                </div>
                <div id='14' className={css.sweetcard}>
                <img src="./images/7.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1938 First Salmiak </h2>
                <p>Fazer’s first salmiak product was called Anisa and it was produced on the third floor of the building on Tehtaankatu. Anisa was, as hinted by the name, flavored with anis-oil. Treating yourself to candy wasn’t very common yet in the 30s, and only a few lucky ones got to taste the black delicacy before the start of the Winter War in 1939.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/8.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1945 Dumle-Lollipop, Tikkis</h2>
                <p>Dumle was launched as candy-on-a-stick in Sweden in 1945. It was made in Malmö at the Mazetti factory. The lollipop was imported to Finland under the product name Tikkis in the year 1985.</p>
                </div>
                <div id='15' className={css.sweetcard}>
                <img src="./images/9.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1949 Marianne</h2>
                <p>Marianne, with its cooling mint shell and chocolate heart, combines Russian confectionary tradition with a French taste. The product was invented during the war years, but production didn’t begin until 1949. On the suggestion of artist Aimo Vuorinen, the candy received a classic red-and-white striped wrapping. The sheaf-shaped Marianne-mold has remained the same since the beginning.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/10.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1950-1960 Fazer Salmiak</h2>
                <p>The production of Fazer Salmiak started for real in the 50s and 60s, when the Finnish salmiak culture was developing alongside the candy-industry. Since the 60s, Finns have been salmiak-loving people and the design of the time period can still be seen on the Fazer Salmiakki packages.</p>
                </div>
                <div id='16' className={css.sweetcard}>
                <img src="./images/11.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1957 Moomin</h2>
                <p>Tove Jansson herself designed the packaging of the first Moomin products. The first product was introduced in the year 1957.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/12.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1961 Pantteri</h2>
                <p>The story of Pantteri started in the year 1961, when the Pantteri pastilles and their match-box-shaped packages with red markers were introduced. The panther leapt into its black and yellow uniform in the 70s. The Pantteri candy-bag was introduced in 1982. The Pantteri candy has seen many variations over the years, f.ex.  salmiak-hails, a strong salmiak pastille, and xylitol sweetened pastilles. During the last few years the panther has also leapt into candy-bags in many different flavors.</p>
                </div>
                <div id='17' className={css.sweetcard}>
                <img src="./images/13.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1962 Geisha</h2>
                <p>Production of the Geisha-chocolate started in the year 1962. Its filling is based on the almond-nougat-pastry called Japonica, made in the Fazer Café, and combined with Fazer’s milk chocolate. The Geisha-name and the pink color was borrowed from a sweet in the Fazerin Parhain-bag, which in turn got the name “Tokyo”.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/14.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1980 Dumle toffee</h2>
                <p>The immensely popular, chocolate-laden toffee was transformed from the Dumle-lollipop into a confectionary, and launched during the 1980s.</p>
                </div>
                <div id='18' className={css.sweetcard}>
                <img src="./images/15.png" alt="Vercel Logo" width={360} height={220} />
                <h2>1989 Tutti Frutti</h2>
                <p>Tutti Frutti is an exciting and colorful mix of delicious candy with tastes of berries and fruits.</p>
                </div>
                <div className={css.sweetcard}>
                <img src="./images/16.png" alt="Vercel Logo" width={360} height={220} />
                <h2>2015 The New Fazer Licorice</h2>
                <p>Fazer renewed its licorice-offering in the year 2015. The licorice is developed and produced at the Lappeenranta candy factory.</p>
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
                <Link href="#8"><a onClick={() => setCount(8)} className={((scrollY > 7000) && (scrollY < 8150)) ? css.active : ""}>1992- 2003</a></Link>
                </div>
                <div className={css.years}>
                  <span className={ ((scrollY > 8150) && (scrollY < 9500)) ? css.active2 : ""}></span>
                <Link href="#9"><a onClick={() => setCount(9)} className={ ((scrollY > 8150) && (scrollY < 9500)) ? css.active : ""}>2022</a></Link>
                </div>
               
              </div>
              <h2>SWEETS</h2>
              <div className={css.yearsList}>
              <div className={css.years}>
                  <span className={scrollY > 9500 ? css.active2 : ""}></span>
                <Link href="#10"><a onClick={() => setCount(10)} className={ scrollY > 9500 ? css.active : ""}>History of sweets</a></Link>
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
