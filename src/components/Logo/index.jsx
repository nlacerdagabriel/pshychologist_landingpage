import Image from "next/image";
import LogoI from "../../../public/Logo.png";


export default function Logo(){
    return(
        <Image height={65} src={LogoI} alt="logotipo da Heloísa Aquino" />
    )
}