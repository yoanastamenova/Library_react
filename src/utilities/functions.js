export const isTokenValid = (expiresAt) => {

    const interval = setInterval(() => {
        const time = new Date()
        const currentTimeStamp = Date.parse(time)/1000
        console.log(currentTimeStamp);
        if( currentTimeStamp > expiresAt){
            console.log("hemos entrado en el if");
            localStorage.removeItem("passport")
            clearInterval(interval)
        }
    }, 1000)

    return () => clearInterval(interval)
}

