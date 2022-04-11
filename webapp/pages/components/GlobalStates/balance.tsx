import { useState } from "react";

function WalletBalanceGlobalState(number) {

  if( typeof(number) == 'undefined' ){

    const [ balance, setBalance ] = useState(125);

    return balance;

  }

}

export default WalletBalanceGlobalState;