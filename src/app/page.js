'use client' // next por default trabaja desde el lado del servidor y asi no me deja usar usestate... por eso con esta linea trabajo desde el lado del client


import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';
import { useEffect, useState, useRef } from 'react';


export default function Home() {

    const [seconds, setSeconds] = useState(41);  // casa usestate me va a dar un valor para hacer el conteo regresivo
    const [ minutes, setMinutes] = useState(55);
    const [ hours, setHours] = useState(23);
    const [ days, setDays] = useState(8);

    useEffect(() => {
        seconds > 0 && setTimeout(() => setSeconds(seconds- 1), 1000); // esta es la clave, aqui la function setTimeout se dispara si los segundos son mayores a 0
                                                                        // hace que el numero de segundos se reduzca 1 cada "mil milisegundos" (segundo)
        if ( seconds == 0 ) {                                          
          setMinutes ( minutes - 1 )
          setSeconds (60) 
        } // este if hace que cada que los segundos lleguen a 0... se me reduzca en 1 el conteo de minutos... y se reestablecen los segundos
        
        if ( minutes == 0 ) {                                         
            setHours ( hours - 1 )
            setMinutes (60)
          } // este if hace que cada que los minutos lleguen a 0... se me reduzca en 1 el conteo de horas... y se reestablecen los minutos
         
          if ( hours == 0 ) {                                         
            setDays ( days - 1 )
            setHours (24)
          } // este if hace que cada que las horas lleguen a 0... se me reduzca en 1 el conteo de dias... y se reestablecen las horas
         

      }, [seconds, minutes, hours, days]); // coloco todo dentro de un useeffect para que se atualicen los valores constantemente



  return (
    <div className={styles.body}>
    <main className={styles.main} >
        <section className={styles.header}>
            <h1>WE´RE LAUNCHING SOON</h1>
        </section>
        <section className={styles.count} id={styles.count}>      
             <div>  
                    <article className={styles.bolaUp}> </article>  
                    <article className={styles.bolaDown}> </article>                 
                        <hr className={styles.hr}></hr> {/* esta tag hace que se dibuje una linea horizontal*/}
                        <h2>{"0" + days}</h2>

             </div>
             <div>                   
                  <article className={styles.bolaUp}> </article>  
                  <article className={styles.bolaDown}> </article>                 
                  <hr className={styles.hr}></hr> {/* esta tag hace que se dibuje una linea horizontal*/}
                  <h2>{hours}</h2>
             </div>
             <div>  
                  <article className={styles.bolaUp}> </article>  
                    <article className={styles.bolaDown}> </article>                 
                    <hr className={styles.hr}></hr> {/* esta tag hace que se dibuje una linea horizontal*/}
                    <h2>{minutes}</h2>
             </div>
             <div>                  
                  <article className={styles.bolaUp}> </article>  
                  <article className={styles.bolaDown}> </article>                 
                  <hr className={styles.hr}></hr> {/* esta tag hace que se dibuje una linea horizontal*/}
                  <h2>{seconds}</h2>
             </div>
        </section>
        <section className={styles.data} id={styles.data}>
              <p>DAYS</p>
              <p className={styles.data1}>HOURS</p>
              <p className={styles.data1}>MINUTES</p>
              <p>SECONDS</p>
        </section>
        <footer className={styles.footer}>
              <img onClick={event =>  window.location.href='https://www.facebook.com/'}  src={"./icon-facebook.svg"} /> 
              <img onClick={event =>  window.location.href='https://co.pinterest.com/'} src={"./icon-pinterest.svg"} /> 
              <img onClick={event =>  window.location.href='https://www.instagram.com/'} src={"./icon-instagram.svg"} /> 
        </footer> {/* asi con este onclick voy directamente a un link */}
    </main>
    </div>
  )
}
