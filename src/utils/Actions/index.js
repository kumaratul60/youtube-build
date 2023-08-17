const toggleMenu = (state) => {
  state.isMenuOpen = !state.isMenuOpen;
};

const closeMenu = (state) => {
  state.isMenuOpen = false;
};

const actionUtils = {
  toggleMenu,
  closeMenu,
};

export default actionUtils;
