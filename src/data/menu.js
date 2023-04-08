import { AiOutlineHome, AiOutlineStar, AiOutlinePhone } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import { MdMiscellaneousServices } from "react-icons/md";


export const menu = [
  {
    title: "Início",
    icon: AiOutlineHome,
    link: "#"
  },
  {
    title: "Sobre",
    icon: BsPerson,
    link: "#sobre"
  },
  {
    title: "Galeria",
    icon: TfiGallery,
    link: "#galeria"

  },
  {
    title: "Serviços",
    icon: MdMiscellaneousServices,
    link: "#servicos"
  },
  {
    title: "Avaliações",
    icon: AiOutlineStar,
    link: "#avaliacoes"
  },
  {
    title: "Contato",
    icon: AiOutlinePhone,
    link: "#contato"
  },
];
