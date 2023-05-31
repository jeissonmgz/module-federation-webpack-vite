let navigateShell = (route: string)=> {console.log("Go to", route)};

const setNavigateShell = (newNavigateShell: (route: string)=> void) => {
  navigateShell = newNavigateShell;
}

export {navigateShell, setNavigateShell};
