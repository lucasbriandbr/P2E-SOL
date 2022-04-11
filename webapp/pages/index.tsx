import styles from '../styles/Home.module.css'
import Image from 'next/image';

// pages/index.js

import Layout from "./components/Layout";

const Index = () => (

    <Layout hello="Homepage">

        <div className={styles.Space}></div>

        <div className={styles.FirstSection}>

            <div className={styles.MainTitle}>

                <h1 className={styles.collectionTitle}>Collection Name</h1>

                <div className={styles.collectionLogos}>

                    <a href={'https://opensea.io/explore-solana'} className={styles.linkIcon}>
                        <Image src={'/icon/opensea-icon.png'} alt='opensea-icon' width={35} height={35}/>
                    </a>

                    <a href={'https://magiceden.io/'} className={styles.linkIcon}>
                        <Image src={'/icon/magiceden-icon.png'} alt='magiceden-icon' width={35} height={35}/>
                    </a>

                    <a href={'https://discord.gg/Wycyn7bUYq'} className={styles.linkIcon}>
                        <Image src={'/icon/discorde-icon.png'} alt='discord-icon' width={35} height={35}/>
                    </a>

                    <a href={'https://medium.com/'} className={styles.linkIcon}>
                        <Image src={'/icon/medium-icon.png'} alt='medium-icon' width={35} height={35}/>
                    </a>

                    <a href={'https://twitter.com/NamedCollection'} className={styles.linkIcon}>
                        <Image src={'/icon/twitter-icon.png'} alt='twitter-icon' width={35} height={35}/>
                    </a>

                </div>

            </div>

        </div>

        <div className={styles.SecondSection}>

            <p className={"marquee"}>
                
                <span>Mint planned for this summer</span>
                
                <span className='span'>Mint planned for this summer</span>
                
                <span className={styles.annoncedemerde}>Mint planned for this summer </span>
                
                <span className='span'>Mint planned for this summer</span>
                
                <span className={styles.annoncedemerde}>Mint planned for this summer </span>
                
                <span className='span'>Mint planned for this summer</span>
                
                <span className={styles.annoncedemerde}>Mint planned for this summer </span>
                
                <span className='span'>Mint planned for this summer</span>
                
                <span className={styles.annoncedemerde}>Mint planned for this summer </span>
                
                <span className='span'>Mint planned for this summer</span>

            </p>
            
        </div>

        <div className={styles.ThirdSection}>

            <div className={styles.roadmaptitre}>

                <h1>Roadmap</h1>

                <p className={styles.roadmapParagraphe}><span className={styles.beepbop}>Beep-bop !</span> Why the hell is everyone so f*cking excited about our project ?</p>

            </div>
            
            <div className={styles.timeline}>

                <div className={styles.containerleft}>

                    <div id={styles.summer2022}>

                        <div className={styles.textBlur}>

                            <h4>Summer 2022</h4>
                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    
                        </div>

                    </div>

                </div>

                <div className={styles.containerright}>

                    <div id={styles.winter2022}>

                        <div className={styles.textBlur}>

                            <h4>Winter 2022</h4>
                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    
                        </div>

                    </div>

                </div>

                <div className={styles.containerleft}>

                    <div id={styles.summer2023}>

                        <div className={styles.textBlur}>

                            <h4>Summer 2023</h4>
                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    
                        </div>

                    </div>

                </div>

                <div className={styles.containerright}>

                    <div id={styles.winter2023}>

                        <div className={styles.textBlur}>

                            <h4>Winter 2023</h4>
                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    
                        </div>
                        
                    </div>

                </div>

            </div>

        </div>

        <div className={styles.FourthSection}>

            <div className={styles.backgroundAbout}>

                <div className={styles.mainpageAboutOrigin}>

                    <div className={styles.AboutText}>

                        <div className={styles.aboutTitre}>

                            <h1>Origin and Mechanics</h1>

                            <p className={styles.roadmapParagraphe}>That looks cool but... wtf are the *Collection Name* ??? <span className={styles.beepbop}>Beep-bop !</span></p>

                        </div>

                        <div className={styles.texteAboutPadding}>

                            <div>

                                <h3>Origin</h3>

                                <p>A la fin du 18 ème siècle une nouvelle étoile apparut dans le ciel. La commença l&apos;invasion de la terre.</p>

                                <p>Se battant pour préserver leurs ressources, Les Hommes tentent avec grande difficulté d&apos;empêcher les robots de voler les ressources de la terre.</p>

                                <p>Les robots veulent utiliser ces ressources pour fertiliser leur planète et la rendre à nouveau habitable après que la pollution l&apos;ait détruite.</p>

                            </div>

                            <div>

                                <h3>Mécaniques</h3>

                                <p>Voila les mécaniques du jeu blablabla</p>

                                <p>Différentes classes de robots se battent pour récupérer les ressources que les hommes refusent de leur donner : Les plantes, de petits animaux et petits poissons.</p>

                                <p>Les robots de combat sont séparés en deux classes : les tanks et les robots agiles, ce à quoi viendront s&apos;ajouter les drônes, classe qui est la pour servir de soutien et améliorer les capacités.</p>

                                <p>Enfin, les mineurs extraient des ressources utiles comme le fer pour réparer et maintenir les robots.</p>

                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div className={styles.FifthSection}>

            <div className={styles.roadmaptitreteam}>

                <h1>Team</h1>

                <p className={styles.roadmapParagraphe}>But... <span className={styles.beepbop}>Beep-bop !</span> ...is the team made of gods ??</p>

            </div>

            <div className={styles.profilesbro}>

                <div className={styles.thisismyprofilebro}>
                            
                    <img className={styles.imagesProfil} src="/images/team-profiles/-Kb3QqQujFb5F7HecON06iZANlQYdbzl0MNWgpuQfqg.png" alt="" />

                    <div className={styles.aboutMeBro}>

                        <h1>Erebos</h1>

                        <p>CEO / Dev</p>

                        <p className={styles.paragrapheDescription}>Serial entrepreneur and founder of many companies, this, Ladies and Gentlemens, is French excellence.</p>

                    </div>

                </div>

                <div className={styles.thisismyprofilebro}>
                            
                    <img className={styles.imagesProfil} src="/images/team-profiles/hfWC4hHbOWpQ8Vr5rg3BfQOL9TNsB7DahcV5q1aSmyQ.png" alt="" />

                    <div className={styles.aboutMeBro}>

                        <h1>Co0Co</h1>

                        <p>Dev</p>

                        <p className={styles.paragrapheDescription}>This guy kind of acts like a ghost but in real life he’s mostly a living, hard-working guy.</p>

                    </div>

                </div>

                <div className={styles.thisismyprofilebro}>
                            
                    <img className={styles.imagesProfil} src="/images/team-profiles/PxlSyl.png" alt="" />

                    <div className={styles.aboutMeBro}>

                        <h1>PxlSyl</h1>

                        <p>Artist / Dev</p>

                        <p className={styles.paragrapheDescription}>Artist in his spare time, full-time artist, and apprentice-developer in the time that remains.<br/>Is he human ?</p>

                    </div>

                </div>

                <div className={styles.thisismyprofilebro}>
                            
                    <img className={styles.imagesProfil} src="/images/team-profiles/bullish.png" alt="" />

                    <div className={styles.aboutMeBro}>

                        <h1>Amayegak</h1>

                        <p>Artist</p>

                        <p className={styles.paragrapheDescription}>This guy is a real artist, no joke this time, you better appreciate or consequences.</p>

                    </div>

                </div>

                <div className={styles.thisismyprofilebro}>
                            
                    <img className={styles.imagesProfil} src="images/team-profiles/08aab2a0-dfff-43c7-9493-8b5448af043f.png" alt="" />

                    <div className={styles.aboutMeBro}>

                        <h1>Black Eagle</h1>

                        <p>Dev</p>

                        <p className={styles.paragrapheDescription}>This guy does everything, he’s a crazy hard worker but a little more crazy than the others.</p>

                    </div>

                </div>

            </div>
        
        </div>

        <div className={styles.SixthFunction}>



        </div>

    </Layout>

);

export default Index;