import { useState, useEffect } from 'react';

function Variables() {

    const [bonfidaDomain, setBonfidaDomain] = useState('');
    const [connected, setConnected] = useState(false);
    const [myProvider, setProvider] = useState();
    const [balance, setBalance] = useState('');
    const [isWalletOpen, setWalletOpen] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

}

export default Variables;