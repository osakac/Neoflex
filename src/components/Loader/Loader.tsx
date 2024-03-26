import cl from "./Loader.module.scss"

const Loader = () => {
  return (
    <div className={cl.wrapper}>
      <span className={cl.loader}></span>
    </div>
  )
}

export default Loader
