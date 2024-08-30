const DropDown = () => {
    return (
      <div className="dropdown absolute top-16 right-0 z-50 bg-white shadow-lg border border-gray-300 rounded">
        <ul className="list-none p-4">
          <li className="cursor-pointer hover:bg-gray-100 p-2"> Shirts</li>
          <li className="cursor-pointer hover:bg-gray-100 p-2"> Pants</li>
          <li className="cursor-pointer hover:bg-gray-100 p-2">Jewellery</li>
        </ul>
      </div>
    );
  };
  
  export default DropDown;
  