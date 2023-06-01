let navigateShell = (route)=> {console.log("Go to", route)};

const setNavigateShell = (newNavigateShell) => {
    if (!newNavigateShell) return;
  navigateShell = newNavigateShell;
}

export {navigateShell, setNavigateShell};
