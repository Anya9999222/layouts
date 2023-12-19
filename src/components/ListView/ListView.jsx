import { ShopItem } from "./ShopItem/ShopItem"
import './ListView.css'

export const ListView = ({items}) => {
    console.log()
    return(
        <div className="card-list">
           {items.map(item => {
            return(
                <ShopItem item = {item} />
            )
           })}
        </div>
    )
}