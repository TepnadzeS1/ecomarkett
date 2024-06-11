import { MenuItem } from "./MenuItem"

export const Menu = () => {
    return (
        <div>
            <MenuItem>
                მთავარი
            </MenuItem>

            <MenuItem>
                ჩვენს შესახებ
            </MenuItem>

            <MenuItem size='big'>
                კონტაქტი
            </MenuItem>
            
            <MenuItem size='big'> 
                ეკრანები
            </MenuItem>

        </div>
    )
}