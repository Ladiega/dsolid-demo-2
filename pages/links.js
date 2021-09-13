import Layout from '../components/layout/layout'
import styles from '../components/links/links.module.css'
import Images from 'next/image'
import img44 from '../public/img/44logo.png'
import imgLogo from '../public/img/logo.svg'





export default function Links(){


    return(
        <div>
            <Layout>
                <main className={styles.links_main_container}>
                    <h1 className={styles.links_h1}>
                        Links
                    </h1>
                        
                        <div className={styles.img_container}>
                        <Images
                        className={styles.logo_img}
                        src = {img44}
                        alt = "4/4img"
                        width={280} 
                        height={150} 
                        
                        />
                         <Images
                         className={styles.four_logo}
                        src = {imgLogo}
                        alt = "4/4img"
                        width={280} 
                        height={150} 
                        
                        />
                        </div>
                </main>

            </Layout>
           
        </div>

    
        
        

        
    )

}