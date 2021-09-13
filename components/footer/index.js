import Link from 'next/link'
import Image from 'next/image'
import styles from '../footer/footer.module.css'
import footericonPic from '../../public/img/icon.png'
import footericonPic2 from '../../public/img/instaLogo.svg'



export function Footer(){
    return(
       
       <div className={styles.global_footer}>
       
            <footer className={styles.footer_container}
                       >
                <div className={styles.footer_icons}>
                    <Link  className="imgfooter1_container"
                            href="https://dsolid.co/" >
                        <a>
                            <Image 
                                                
                                className={styles.footer_icon_img1}
                                                
                                src={footericonPic}
                                alt="ds-logo"
                                width={30}
                                height={30}
                            />
                                    
                        </a>
                    </Link>
                </div>
                <div className= {styles.footer_icons} 
                                    >
                    <Link  className="imgfooter2_container"
                            href="https://www.instagram.com/dsolid_co/" >
                        <a>
                            <Image 
                                                
                                               
                                className={styles.footer_icon_img2}
                                                
                                src={footericonPic2}
                                alt="instaLogo"
                                width={30}
                                height={25}
                                                
                            />
                                    
                        </a>
                    </Link>
                </div>          
                               
            </footer>
    </div>        
    )
}