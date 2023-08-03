import Link from 'next/link';
import utils from '../../styles/utils.module.css';

export default function Navbar() {
    return (
        <nav className={`${utils.padding_1rem}`}>
            <Link className={`${utils.padding_1rem} ${utils.hoverPurple}`} href="/">Home</Link>
            <Link className={`${utils.padding_1rem} ${utils.hoverPurple}`} href="/products/pants/bluepants">Calça Azul</Link>
            <Link className={`${utils.padding_1rem} ${utils.hoverPurple}`} href="/products/pants/redpants">Calça Vermelha</Link>
            <Link className={`${utils.padding_1rem} ${utils.hoverPurple}`} href="/products/shirts/greenshirt">Camisa Verde</Link>
            <Link className={`${utils.padding_1rem} ${utils.hoverPurple}`} href="/products/shirts/yellowshirt">Camisa Amarela</Link>
            <Link className={`${utils.padding_1rem} ${utils.hoverPurple}`} href="/desenvolvedores">Desenvolvedores</Link>
        </nav>
    )
}