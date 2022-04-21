import { useState } from "react"

export default function GetMagicEdenData() {
    const [deladata, setDeladata] = useState()
    fetch('https://api-mainnet.magiceden.dev/v2/collections/runcible/stats')
      .then(response => response.json())
      .then(data => setDeladata(data))
    return(deladata)
}