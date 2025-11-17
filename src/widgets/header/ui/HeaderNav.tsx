export function HeaderNav() {

  return (
    <nav className="lg:flex hidden gap-2">
      <a
        href="#how-it-works"
        className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
      >
        Как работает
      </a>
      <a 
        href="#calculation" 
        className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"  
      >
        Стоимость
      </a>
    </nav>
  );
}
