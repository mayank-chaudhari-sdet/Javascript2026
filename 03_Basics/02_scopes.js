function One() {
    const userName = "Mayank";

    function Two() {
        const webSite = "youtube.com";
        console.log(userName); // Mayank - Two function can access the userName variable because it is defined in the parent scope (One function)
        console.log(webSite); // youtube.com - Two function can also access the webSite variable because it is defined in the same scope
    }

    console.log(webSite); // ReferenceError: webSite is not defined - One function cannot access the webSite variable because it is defined in the child scope (Two function)
    Two(); // Calling the Two function to execute its code, output will be displayed in the console

}
One();