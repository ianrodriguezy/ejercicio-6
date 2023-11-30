import styles from './Form.module.css'
import image from './assets/bg.jpg'
import icon from './assets/icon.png'

function Form() {
  return (
    <>

    <img className={styles.icon} src={icon} alt="Logo de la empresa"/>
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="Imagen de artista para el background" />
        <form className={styles.form}>
          <h1 className={styles.formTitle}>WELCOME!</h1>
          <input className={styles.input} type="text" placeholder="Nombre" />
          <input className={styles.input} type="text" placeholder="Apellido" />
          <input className={styles.input} type="email" placeholder="Email" />
          <input className={styles.input} type="tel" placeholder="Teléfono" />
          <input className={styles.input} type="password" placeholder="Contraseña" />
          <input className={styles.input} type="password" placeholder="Confirmar Contraseña" />
          <button className={styles.button} type="submit">REGISTRARSE</button>
        </form>
      </div>
    </>
  )
}

export default Form
