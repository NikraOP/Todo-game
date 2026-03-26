import styles from './User.module.scss'



const User = () => {

    return (
         <div className={styles.profile}>
        
              <div className={styles.ava}></div>
              <p className={styles.nameUser}>Nikra</p>
              <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M19.92 8.54167C19.73 8.54167 19.54 8.61458 19.39 8.77083L12.87 15.5625C12.39 16.0625 11.61 16.0625 11.13 15.5625L4.60999 8.77083C4.31999 8.46875 3.83999 8.46875 3.54999 8.77083C3.25999 9.07292 3.25999 9.57292 3.54999 9.875L10.07 16.6667C11.13 17.7708 12.86 17.7708 13.93 16.6667L20.45 9.875C20.74 9.57292 20.74 9.07292 20.45 8.77083C20.3 8.625 20.11 8.54167 19.92 8.54167Z" fill="white"/>
              </svg>
        
          </div>
    )
}

export default User