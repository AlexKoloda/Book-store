import style from './Loading.module.scss'

const Loading: React.FC = () => {

  return (
    <div className={style.loading__container} >
      <h1 className={style.loading__title}>Loading...</h1>
      <div className={style.loading__spinner}></div>
    </div>
  )
}

export default Loading;