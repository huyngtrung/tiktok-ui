import classNames from "classnames/bind";
import styles from "./Menu.module.scss"
import Button from "~/components/Button";

function MenuItem({ data, onClick }) {
    return ( 
        <Button
            menu
            customIcon={data.customIcon}
            btnIconBig={ data.icon } 
            btnSmallWeight={ data.btnSmallWeight }
            borderTop={ data.borderTop}
            to={ data.to }
            onClick={ onClick }
        >
            {data.title}
        </Button>
     );
}

export default MenuItem;