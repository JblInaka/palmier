import Link from "next/link";


const Menu = () => {
    return (
      <div className=" px-1 py-1 rounded-full w-[600px] h-[60px] bg-white border-4 border-[#EDEDCB] sticky top-0">
        <div className=" px-1 py-2 rounded-full w-[100%] h-[100%] bg-[#EDEDCB] flex justify-center ">
            <ul className="hidden md:flex gap-x-20 text-black text-base font-bold ">
                <li className=" hover:text-green-600">
                    <Link href="/home">
                    <p >Acceuil</p>
                    </Link>
                </li>
                <li className=" hover:text-green-600">
                    <Link href="/apropos">
                    <p>À Propos</p>
                    </Link>
                </li>
                <li className=" hover:text-green-600">
                    <Link href="/projet">
                    <p>Projets</p>
                    </Link>
                </li>
                <li className=" hover:text-green-600">
                    <Link href="/contact">
                    <p>Contact</p>
                    </Link>
                </li>
            </ul>
      </div>
      </div>  
    );
  };
  export default Menu;