import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Head from 'next/head'


// pages/index.js

import Layout from "./components/Layout";

const Index = () => (

    <Layout hello="Homepage">

        <Head>

            <title>Home - Andromeda Mechs</title>

            <meta name="description" content="3333 Mechs from Andromeda Galaxy" />

        </Head>

        <div className={styles.Space}></div>

        <div className={styles.FirstSection}>

            <div className={styles.MainTitle}>

                <h1 className={styles.collectionTitle}>Andromeda Mechs</h1>

                <div className={styles.collectionLogos}>

                    <a href={'https://opensea.io/explore-solana'} className={styles.linkIcon}>
                        <Image src={'/icon/opensea-icon.png'} alt='opensea-icon' width={35} height={35}/>
                    </a>

                    <a href={'https://magiceden.io/'} className={styles.linkIcon}>
                        <Image src={'/icon/magiceden-icon.png'} alt='magiceden-icon' width={35} height={35}/>
                    </a>

                    <a href={'https://discord.gg/q84ME9JFB7'} className={styles.linkIcon}>
                        <Image src={'/icon/discorde-icon.png'} alt='discord-icon' width={35} height={35}/>
                    </a>

                    <a href={'https://medium.com/'} className={styles.linkIcon}>
                        <Image src={'/icon/medium-icon.png'} alt='medium-icon' width={35} height={35}/>
                    </a>

                    <a href={'https://twitter.com/AndroMechs'} className={styles.linkIcon}>
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
                            <p>Launch of the First Gen : &quot;Pods&quot;.</p>
                            <p>They have been sent by a mysterious population that we know nothing about to steal samples of terrestrial biodiversity.</p>
                            <p>We believe their planet was destroyed by a nuclear war.</p>
                    
                        </div>

                    </div>

                </div>

                <div className={styles.containerright}>

                    <div id={styles.automn2022}>

                        <div className={styles.textBlur}>

                            <h4>Automn 2022</h4>
                            <p>Launch of the Second Gen : &quot;Fighters&quot;.</p>
                            <p>Now that our mysterious enemy knows we???re vulnerable and our resources are viable, he???s moving on to the second phase of his plan : conquer.</p>
                            <p>Astronomers have observed amazing signals in the sky, like signals from spaceships...</p>

                        </div>

                    </div>

                </div>

                <div className={styles.containerleft}>

                    <div id={styles.winter2022}>

                        <div className={styles.textBlur}>

                            <h4>Winter 2022</h4>
                            <p>Launch of the Third Gen : &quot;Tanks&quot;.</p>
                            <p>Despite their monumental efforts to assault the world???s largest metropolises, the battle is fierce against the ground forces !</p>
                            <p>Unfortunately for our dear blue planet, it seems that space factories are running at full speed to mount our perfect enemy.</p>
                    
                        </div>

                    </div>

                </div>

                <div className={styles.containerright}>

                    <div id={styles.spring2023}>

                        <div className={styles.textBlur}>

                            <h4>Spring 2023</h4>
                            <p>Launch of the DAO and voting system, via the &quot;DAO&quot; menu at <a href='https://www.andromedamechs.com/DAO'>andromedamechs.com</a>.</p>
                            <p>The community may propose actions to be carried out with the funds of the DAO wallet.</p>
                            <p>People will be able to vote anonymously by yes or no, and the team will work on the proposal if it is adopted.</p>
                    
                        </div>
                        
                    </div>

                </div>

                <div className={styles.containerleft}>

                    <div id={styles.summer2023}>

                        <div className={styles.textBlur}>

                            <h4>Summer 2023</h4>
                            <p>Launch of the Play-To-Earn game</p>
                            <p>Maybe the earth didn&apos;t survived the assault...</p>
                            <p>But maybe she did. And you always need more ressources. Your population needs you to survive.</p>
                            <p>For the first time, you&apos;ll be the bad guy in the story.</p>
                    
                        </div>

                    </div>

                </div>

                <div className={styles.containerright}>

                    <div id={styles.autumn2023}>

                        <div className={styles.textBlur}>

                            <h4>Autumn 2023</h4>
                            <p>Launch of Investments in On-Chain Start-ups</p>
                            <p>Some young start-ups will be selected to recieve funds from the DAO Wallet.</p>
                            <p>The companies will be selected by the team, however the DAO can also submit proposals which will then be studied by our team, whether they are small or large projects.</p>
                            <p>This is a more advanced form of Launchpad.</p>

                        </div>
                        
                    </div>

                </div>

                <div className={styles.containerleft}>

                    <div id={styles.laterthan2023}>

                        <div className={styles.textBlur}>

                            <h4>Coming later...</h4>
                            <p>Updated soon, we&apos;re working really fast.</p>
                    
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

                                <p>A la fin du 18 ??me si??cle une nouvelle ??toile apparut dans le ciel. La commen??a l&apos;invasion de la terre.</p>

                                <p>Se battant pour pr??server leurs ressources, Les Hommes tentent avec grande difficult?? d&apos;emp??cher les robots de voler les ressources de la terre.</p>

                                <p>Les robots veulent utiliser ces ressources pour fertiliser leur plan??te et la rendre ?? nouveau habitable apr??s que la pollution l&apos;ait d??truite.</p>

                            </div>

                            <div>

                                <h3>M??caniques</h3>

                                <p>Voila les m??caniques du jeu blablabla</p>

                                <p>Diff??rentes classes de robots se battent pour r??cup??rer les ressources que les hommes refusent de leur donner : Les plantes, de petits animaux et petits poissons.</p>

                                <p>Les robots de combat sont s??par??s en deux classes : les tanks et les robots agiles, ce ?? quoi viendront s&apos;ajouter les dr??nes, classe qui est la pour servir de soutien et am??liorer les capacit??s.</p>

                                <p>Enfin, les mineurs extraient des ressources utiles comme le fer pour r??parer et maintenir les robots.</p>

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

                        {/* <p className={styles.paragrapheDescription}>Serial entrepreneur and founder of many companies, this, Ladies and Gentlemens, is French excellence.</p> */}

                    </div>

                </div>

                <div className={styles.thisismyprofilebro}>
                            
                    <img className={styles.imagesProfil} src="/images/team-profiles/hfWC4hHbOWpQ8Vr5rg3BfQOL9TNsB7DahcV5q1aSmyQ.png" alt="" />

                    <div className={styles.aboutMeBro}>

                        <h1>Co0Co</h1>

                        <p>Dev</p>

                        {/* <p className={styles.paragrapheDescription}>This guy kind of acts like a ghost but in real life he???s mostly a living, hard-working guy.</p> */}

                    </div>

                </div>

                <div className={styles.thisismyprofilebro}>
                            
                    <img className={styles.imagesProfil} src="/images/team-profiles/PxlSyl.png" alt="" />

                    <div className={styles.aboutMeBro}>

                        <h1>PxlSyl</h1>

                        <p>Artist / Dev</p>

                        {/* <p className={styles.paragrapheDescription}>Artist in his spare time, full-time artist, and apprentice-developer in the time that remains.<br/>Is he human ?</p> */}

                    </div>

                </div>

                <div className={styles.thisismyprofilebro}>
                            
                    <img className={styles.imagesProfil} src="/images/team-profiles/bullish.png" alt="" />

                    <div className={styles.aboutMeBro}>

                        <h1>Amayegak</h1>

                        <p>Artist</p>

                        {/* <p className={styles.paragrapheDescription}>This guy is a real artist, no joke this time, you better appreciate or consequences.</p> */}

                    </div>

                </div>

                <div className={styles.thisismyprofilebro}>
                            
                    <img className={styles.imagesProfil} src="images/team-profiles/08aab2a0-dfff-43c7-9493-8b5448af043f.png" alt="" />

                    <div className={styles.aboutMeBro}>

                        <h1>Black Eagle</h1>

                        <p>Dev</p>

                        {/* <p className={styles.paragrapheDescription}>This guy does everything, he???s a crazy hard worker but a little more crazy than the others.</p> */}

                    </div>

                </div>

            </div>
        
        </div>

        <div className={styles.SixthFunction}>



        </div>

    </Layout>

);

export default Index;