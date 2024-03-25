import { priceFormatter } from "@/utils/priceFormatter"
import cl from "./MakingOrder.module.scss"

interface Props {
  cartPrice: number
}

const MakingOrder = ({ cartPrice }: Props) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.info}>
        <p>Итого</p>
        <span>{priceFormatter(cartPrice)}</span>
      </div>

      <button>Перейти к оформлению</button>
    </div>
  )
}

export default MakingOrder
