import styles from './styles.module.css';

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>ABC College</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={styles.welcome_message}>
        <h2>Hello, Welcome!</h2>
      </div>
    </div>
  );
};

export default Main;
