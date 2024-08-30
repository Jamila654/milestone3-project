const Footer = () => {
    return ( 
        <main className=" fixed bottom-0 right-0 left-0 w-full h-14 sm:h-24 bg-black text-white text-nowrap flex items-center justify-around">
            <p>&copy; {new Date().getFullYear()} Jam's Closet. All rights reserved.</p>
        </main>
     );
}
 
export default Footer;