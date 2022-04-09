import { useState } from "react";

export default function useAuthRoute () {

    const [isAuth, setIsAuth] = useState(false);
    
    return {isAuth}
  
  }