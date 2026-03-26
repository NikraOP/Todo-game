import { useEffect, useState } from 'react'
import styles from './RankPage.module.scss'
import Iron1 from '../../img/Iron1.png'
import Iron2 from '../../img/Iron2.png'
import Iron3 from '../../img/Iron3.png'
import Bronze1 from '../../img/Bronze1.png'
import Bronze2 from '../../img/Bronze2.png'
import Bronze3 from '../../img/Bronze3.png'
import Silver1 from '../../img/Silver1.png'
import Silver2 from '../../img/Silver2.png'
import Silver3 from '../../img/Silver3.png'
import Gold1 from '../../img/Gold1.png'
import Gold2 from '../../img/Gold2.png'
import Gold3 from '../../img/Gold3.png'
import Platinum1 from '../../img/Platinum1.png'
import Platinum2 from '../../img/Platinum2.png'
import Platinum3 from '../../img/Platinum3.png'
import Diamond1 from '../../img/Diamond1.png'
import Diamond2 from '../../img/Diamond2.png'
import Diamond3 from '../../img/Diamond3.png'
import Ascendant1 from '../../img/Ascendant1.png'
import Ascendant2 from '../../img/Ascendant2.png'
import Ascendant3 from '../../img/Ascendant3.png'
import Immortal1 from '../../img/immortal1.png'
import Immortal2 from '../../img/immortal2.png'
import Immortal3 from '../../img/immortal3.png'
import Radiant from '../../img/Radiant.png'


const RankPage = () => {
    
    const [MMR, setMMR] = useState(() => {
        const savedMMR = localStorage.getItem('MMRStorage')
        return savedMMR ? Number(savedMMR) : 0;
    });
    const [nameRank, setNameRank] = useState(() => {
        const savedName = localStorage.getItem('nameRankStorage')
        return savedName 
    });
    const [pngRank, setPngRank] = useState(() => {
        const savedPng = localStorage.getItem('pngRankStorage')
        return savedPng
    })

    useEffect(() => {
        localStorage.setItem('MMRStorage', MMR)
        localStorage.setItem('nameRankStorage', nameRank)
        localStorage.setItem('pngRankStorage', pngRank)
    }, [MMR, nameRank, pngRank])


    const plusMMR30 = () => {

        const newMMR = MMR + 30 
        setMMR(newMMR)
        
        checksAll(newMMR)
    }

    const plusMMR15 = () => {

        const newMMR = MMR + 15 
        setMMR(newMMR)
        
        checksAll(newMMR)
    }

    const minusMMR30 = () => {
        
        if (MMR <= 0 ) {
            return
        }

        const newMMR = MMR - 30 
        setMMR(newMMR)
        
        checksAll(newMMR)
    }

    const minusMMR15 = () => {
        if (MMR <= 0 ) {
            return
        }

        const newMMR = MMR - 15 
        setMMR(newMMR)
        
        checksAll(newMMR)
        
    }
    
    const checksAll = (mmr) => {
        pngRankEdit(mmr)
        nameRankEdit(mmr)
    }

    const pngRankEdit = (mmr) => {
        // Iron
        {if (mmr >= 0) {
            setPngRank(Iron1)
        }
        if (mmr >= 150) {
            setPngRank(Iron2)
        }
        if (mmr >= 300) {
            setPngRank(Iron3)
        }}

        // Bronze
        {if (mmr >= 400) {
            setPngRank(Bronze1)
        }
        if (mmr >= 550) {
            setPngRank(Bronze2)
        }
        if (mmr >= 700) {
            setPngRank(Bronze3)
        }}

        // Silver
        {if (mmr >= 810) {
            setPngRank(Silver1)
        }
        if (mmr >= 960) {
            setPngRank(Silver2)
        }
        if (mmr >= 1020) {
            setPngRank(Silver3)
        }}

        // Gold
        {if (mmr >= 1200) {
            setPngRank(Gold1)
        }
        if (mmr >= 1340) {
            setPngRank(Gold2)
        }
        if (mmr >= 1500) {
            setPngRank(Gold3)
        }}

        // Platinum
        {if (mmr >= 1700) {
            setPngRank(Platinum1)
        }
        if (mmr >= 1840) {
            setPngRank(Platinum2)
        }
        if (mmr >= 2000) {
            setPngRank(Platinum3)
        }}

        // Diamond
        {if (mmr >= 2100) {
            setPngRank(Diamond1)
        }
        if (mmr >= 2300) {
            setPngRank(Diamond2)
        }
        if (mmr >= 2515) {
            setPngRank(Diamond3)
        }}

        // Ascendant
        {if (mmr >= 2650) {
            setPngRank(Ascendant1)
        }
        if (mmr >= 2800) {
            setPngRank(Ascendant2)
        }
        if (mmr >= 3000) {
            setPngRank(Ascendant3)
        }}

        // Immortal
        {if (mmr >= 3200) {
            setPngRank(Immortal1)
        }
        if (mmr >= 3400) {
            setPngRank(Immortal2)
        }
        if (mmr >= 3600) {
            setPngRank(Immortal3)
        }}

        // Radiant
        {if (mmr >= 4000) {
            setPngRank(Radiant)
        }}

    }

    const nameRankEdit = (mmr) => {
        // Iron
        {if (mmr >= 0) {
            setNameRank('Iron 1')
        }
        if (mmr >= 150) {
            setNameRank('Iron 2')
        }
        if (mmr >= 300) {
            setNameRank('Iron 3')
        }}

        // Bronze      
        {if (mmr >= 400) {
            setNameRank('Bronze 1')
        }
        if (mmr >= 550) {
            setNameRank('Bronze 2')
        }
        if (mmr >= 700) {
            setNameRank('Bronze 3')
        }}

        // Silver
        {if (mmr >= 810) {
            setNameRank('Silver 1')
        }
        if (mmr >= 960) {
            setNameRank('Silver 2')
        }
        if (mmr >= 1020) {
            setNameRank('Silver 3')
        }}

        // Gold
        {if (mmr >= 1200) {
            setNameRank('Gold 1')
        }
        if (mmr >= 1340) {
            setNameRank('Gold 2')
        }
        if (mmr >= 1500) {
            setNameRank('Gold 3')
        }}

        // Platinum
        {if (mmr >= 1700) {
            setNameRank('Platinum 1')
        }
        if (mmr >= 1840) {
            setNameRank('Platinum 2')
        }
        if (mmr >= 2000) {
            setNameRank('Platinum 3')
        }}

        // Diamond
        {if (mmr >= 2100) {
            setNameRank('Diamond 1')
        }
        if (mmr >= 2300) {
            setNameRank('Diamond 2')
        }
        if (mmr >= 2515) {
            setNameRank('Diamond 3')
        }}

        // Ascendant
        {if (mmr >= 2650) {
            setNameRank('Ascendant 1')
        }
        if (mmr >= 2800) {
            setNameRank('Ascendant 2')
        }
        if (mmr >= 3000) {
            setNameRank('Ascendant 3')
        }}

        // Immortal
        {if (mmr >= 3200) {
            setNameRank('Immortal1 1')
        }
        if (mmr >= 3400) {
            setNameRank('Immortal1 2')
        }
        if (mmr >= 3600) {
            setNameRank('Immortal1 3')
        }}

        // Radiant
        {if (mmr >= 4000) {
            setNameRank('RADIANT')
        }}


    }
    
    return (
        <>
        <div 
        className={styles.screen } 
        >
        <div className={styles.start}>
            <p className={styles.day}>Ранг</p>

            <div className={styles.block}> 
                <p className={styles.name} >{nameRank}</p>

                <img src={pngRank} alt="" className={styles.img}/>

                <p className={styles.mmr}>{MMR} MMR</p>

                <div className={styles.buttonList}>
                    <button className={styles.button} onClick={minusMMR30}>-30 mmr</button>
                    <button className={styles.button} onClick={minusMMR15}>-15 mmr</button>
                    <button className={styles.button} onClick={plusMMR15}>+15 mmr</button>
                    <button className={styles.button} onClick={plusMMR30}>+30 mmr</button>
                </div>
            </div>

        </div>
    </div>
        </>
    )
}

export default RankPage