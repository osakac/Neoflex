import BrowseLanguageIcon from "@/assets/svg/browse-language.svg?react"
import TelegramIcon from "@/assets/svg/telegram.svg?react"
import VkIcon from "@/assets/svg/vk.svg?react"
import WhatsappIcon from "@/assets/svg/whatsapp.svg?react"
import { useState } from "react"
import { Link } from "react-router-dom"
import cl from "./Footer.module.scss"

const Footer = () => {
  const [language, setLanguage] = useState("ru")

  return (
    <footer className={cl.footer}>
      <h2>QPICK</h2>

      <ul className={`${cl.options} list-reset`}>
        <li>
          <Link to={"/"}>Избранное</Link>
        </li>
        <li>
          <Link to={"/cart"}>Корзина</Link>
        </li>
        <li>
          <Link to={"/"}>Контакты</Link>
        </li>
        <li>
          <Link to={"/"}>Условия сервиса</Link>
        </li>
        <li className={cl.optionsLanguage}>
          <div>
            <BrowseLanguageIcon />
            <button
              onClick={() => setLanguage("ru")}
              className={`${language === "ru" && cl.active}`}
            >
              Рус
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`${language === "en" && cl.active}`}
            >
              Eng
            </button>
          </div>
        </li>
      </ul>

      <ul className={`${cl.socials} list-reset`}>
        <li>
          <Link to={"/"}>
            <VkIcon />
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <TelegramIcon />
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <WhatsappIcon />
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
